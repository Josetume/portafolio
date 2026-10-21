"use client";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ZoomIn,
  ZoomOut,
  Scan,
  ChevronDown,
} from "lucide-react";
import type { Screenshot } from "@/data/alertaya-screens";
import { text as t, type Locale } from "@/lib/locale";

export default function ScreenshotGallery({
  screens,
  mobile = false,
  locale = "es",
  projectName = "AlertaYa",
  mobileAspect = "9 / 19.5",
  initialCount = screens.length,
}: {
  screens: Screenshot[];
  mobile?: boolean;
  locale?: Locale;
  projectName?: string;
  mobileAspect?: string;
  initialCount?: number;
}) {
  const titleId = useId();
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [viewport, setViewport] = useState({ width: 800, height: 500 });
  const [dimensions, setDimensions] = useState<
    Record<string, { width: number; height: number }>
  >({});
  const dialog = useRef<HTMLDialogElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const drag = useRef<{
    x: number;
    y: number;
    left: number;
    top: number;
  } | null>(null);
  const close = () => {
    setActive(null);
    setZoom(1);
  };
  const step = (direction: number) => {
    setZoom(1);
    setActive((current) =>
      current === null
        ? null
        : (current + direction + screens.length) % screens.length,
    );
  };
  const changeZoom = (value: number) =>
    setZoom((current) => Math.max(1, Math.min(4, current + value)));
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (active === null) {
      element.close();
      opener.current?.focus();
      return;
    }
    element.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const surface = stage.current;
    const measure = () => {
      if (surface)
        setViewport({
          width: surface.clientWidth,
          height: surface.clientHeight,
        });
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (surface) observer.observe(surface);
    return () => {
      observer.disconnect();
      document.body.style.overflow = overflow;
    };
  }, [active]);
  useEffect(() => {
    if (zoom === 1) stage.current?.scrollTo(0, 0);
  }, [zoom, active]);
  const screen = active === null ? null : screens[active];
  const natural = screen
    ? dimensions[screen.src] || {
        width: mobile ? 900 : 1440,
        height: mobile ? 1600 : 1050,
      }
    : { width: 1, height: 1 };
  const fit = Math.min(
    viewport.width / natural.width,
    viewport.height / natural.height,
  );
  const visibleCount = expanded
    ? screens.length
    : Math.min(initialCount, screens.length);
  return (
    <div className="gallery-collection">
      <div
        id={`${titleId}-grid`}
        className={`screenshot-grid ${mobile ? "screenshot-grid-mobile" : ""}`}
        data-visible-count={visibleCount}
      >
        {screens.map((item, index) => (
          <a
            key={item.src}
            href={item.src}
            className="screenshot-card"
            hidden={!expanded && index >= initialCount}
            onClick={(event) => {
              event.preventDefault();
              opener.current = event.currentTarget;
              setZoom(1);
              setActive(index);
            }}
            aria-label={`${t(locale, "Ampliar", "Enlarge")}: ${item.label}`}
          >
            <div
              className={`screenshot-thumbnail ${mobile ? "screenshot-thumbnail-mobile" : ""}`}
              style={mobile ? { aspectRatio: mobileAspect } : undefined}
            >
              <Image
                src={item.src}
                alt={`${projectName}: ${item.label}. ${item.description}`}
                fill
                sizes={
                  mobile
                    ? "(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 270px"
                    : "(max-width: 768px) 100vw, 550px"
                }
                className="object-contain"
              />
              <span className="expand-hint">
                <Maximize2 size={16} />
                {t(locale, "Ampliar", "Enlarge")}
              </span>
            </div>
            <div className="screenshot-caption">
              <h3>
                {item.label}
                <Maximize2 size={15} aria-hidden="true" />
              </h3>
              <p className="muted">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
      {screens.length > initialCount && (
        <button
          className="gallery-more button secondary"
          aria-expanded={expanded}
          aria-controls={`${titleId}-grid`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? t(locale, "Mostrar selección", "Show selection")
            : t(
                locale,
                `Ver ${screens.length - initialCount} capturas más`,
                `Show ${screens.length - initialCount} more screenshots`,
              )}
          <ChevronDown size={16} className={expanded ? "rotate-180" : ""} />
        </button>
      )}
      <dialog
        ref={dialog}
        className="screenshot-dialog"
        aria-labelledby={titleId}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "Tab") {
            const controls = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                'button:not([disabled]), a[href], [tabindex="0"]',
              ),
            );
            const first = controls[0],
              last = controls[controls.length - 1];
            if (
              event.shiftKey &&
              (document.activeElement === first ||
                document.activeElement === event.currentTarget)
            ) {
              event.preventDefault();
              last?.focus();
            } else if (
              !event.shiftKey &&
              (document.activeElement === last ||
                document.activeElement === event.currentTarget)
            ) {
              event.preventDefault();
              first?.focus();
            }
          }
          if (
            ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
              event.key,
            ) &&
            zoom > 1 &&
            event.target === stage.current
          ) {
            event.preventDefault();
            stage.current?.scrollBy({
              left:
                event.key === "ArrowLeft"
                  ? -80
                  : event.key === "ArrowRight"
                    ? 80
                    : 0,
              top:
                event.key === "ArrowUp"
                  ? -80
                  : event.key === "ArrowDown"
                    ? 80
                    : 0,
            });
            return;
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          }
          if (event.key === "+" || event.key === "=") {
            event.preventDefault();
            changeZoom(0.5);
          }
          if (event.key === "-") {
            event.preventDefault();
            changeZoom(-0.5);
          }
        }}
      >
        {screen && (
          <div className="viewer-panel">
            <div className="viewer-header">
              <div>
                <p className="eyebrow">
                  {projectName} · {mobile ? "Android" : "Web"}
                </p>
                <h3 id={titleId}>{screen.label}</h3>
              </div>
              <button
                className="icon-button"
                autoFocus
                onClick={close}
                aria-label={t(locale, "Cerrar visor", "Close image viewer")}
              >
                <X />
              </button>
            </div>
            <div
              className="viewer-tools"
              aria-label={t(locale, "Controles de ampliación", "Zoom controls")}
            >
              <button
                className="icon-button"
                disabled={zoom <= 1}
                onClick={() => changeZoom(-0.5)}
                aria-label={t(locale, "Reducir imagen", "Zoom out")}
              >
                <ZoomOut size={18} />
              </button>
              <output
                aria-live="polite"
                aria-label={t(locale, "Nivel de ampliación", "Zoom level")}
              >
                {Math.round(zoom * 100)}%
              </output>
              <button
                className="icon-button"
                disabled={zoom >= 4}
                onClick={() => changeZoom(0.5)}
                aria-label={t(locale, "Ampliar imagen", "Zoom in")}
              >
                <ZoomIn size={18} />
              </button>
              <button
                className="viewer-fit"
                disabled={zoom === 1}
                onClick={() => setZoom(1)}
              >
                <Scan size={16} />
                {t(locale, "Ajustar", "Fit to screen")}
              </button>
              <span>
                {zoom > 1
                  ? t(
                      locale,
                      "Arrastra o desplázate para explorar",
                      "Drag or scroll to explore",
                    )
                  : t(
                      locale,
                      "Amplía para leer los detalles",
                      "Zoom in to read the details",
                    )}
              </span>
            </div>
            <div
              ref={stage}
              className={`viewer-image ${zoom > 1 ? "viewer-image-zoomed" : ""}`}
              tabIndex={0}
              role="region"
              aria-label={t(
                locale,
                "Captura ampliable. Usa los controles para ampliar y desplázate para explorar.",
                "Zoomable screenshot. Use the zoom controls and scroll to explore.",
              )}
              onPointerDown={(event) => {
                if (
                  zoom <= 1 ||
                  event.pointerType !== "mouse" ||
                  event.button !== 0
                )
                  return;
                event.preventDefault();
                event.currentTarget.focus();
                drag.current = {
                  x: event.clientX,
                  y: event.clientY,
                  left: event.currentTarget.scrollLeft,
                  top: event.currentTarget.scrollTop,
                };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const start = drag.current;
                if (!start) return;
                event.currentTarget.scrollLeft =
                  start.left + start.x - event.clientX;
                event.currentTarget.scrollTop =
                  start.top + start.y - event.clientY;
              }}
              onPointerUp={() => {
                drag.current = null;
              }}
              onPointerCancel={() => {
                drag.current = null;
              }}
              onLostPointerCapture={() => {
                drag.current = null;
              }}
            >
              <div className="viewer-canvas">
                <div
                  className="viewer-fitted-image"
                  style={{
                    width: Math.max(1, natural.width * fit * zoom),
                    height: Math.max(1, natural.height * fit * zoom),
                  }}
                >
                  <Image
                    src={screen.src}
                    alt={screen.description}
                    fill
                    sizes="(max-width: 700px) 1600px, 2400px"
                    className="object-contain"
                    quality={90}
                    draggable={false}
                    onLoad={(event) => {
                      const image = event.currentTarget;
                      setDimensions((current) => ({
                        ...current,
                        [screen.src]: {
                          width: image.naturalWidth,
                          height: image.naturalHeight,
                        },
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="viewer-footer">
              <button
                className="icon-button"
                onClick={() => step(-1)}
                aria-label={t(
                  locale,
                  "Captura anterior",
                  "Previous screenshot",
                )}
              >
                <ChevronLeft />
              </button>
              <p aria-live="polite">
                {(active ?? 0) + 1} / {screens.length}
              </p>
              <button
                className="icon-button"
                onClick={() => step(1)}
                aria-label={t(locale, "Captura siguiente", "Next screenshot")}
              >
                <ChevronRight />
              </button>
              <a
                href={screen.src}
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link"
              >
                {t(locale, "Abrir original", "Open original")}
                <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="viewer-description">{screen.description}</p>
          </div>
        )}
      </dialog>
    </div>
  );
}
