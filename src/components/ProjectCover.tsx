import Image from "next/image";
import type { ProjectDetail } from "@/data/project-details";
import { text as t, type Locale } from "@/lib/locale";

const mobileImages: Record<string, string> = {
  alertaya: "/alertaya/mobile/inicio-actual.png",
  "bunker-canino": "/bunker-canino/mobile.png",
  educapp: "/educapp/mobile/contar-estrellas.jpg",
};

export default function ProjectCover({
  project,
  locale = "es",
  large = false,
}: {
  project: ProjectDetail;
  locale?: Locale;
  large?: boolean;
}) {
  return (
    <div
      className={`project-cover cover-${project.slug} ${large ? "project-cover-large" : ""}`}
    >
      <div className="cover-orbit" aria-hidden="true" />
      <div className="cover-browser">
        <div className="browser-chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{project.title}</p>
        </div>
        <div className="cover-browser-image">
          {project.image && (
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              fill
              priority={large}
              sizes={
                large
                  ? "(max-width: 1120px) 90vw, 1000px"
                  : "(max-width: 700px) 85vw, 600px"
              }
              className="object-cover object-top"
            />
          )}
        </div>
      </div>
      <div className="cover-phone">
        <div className="cover-phone-camera" aria-hidden="true" />
        <div className="cover-phone-image">
          <Image
            src={mobileImages[project.slug]}
            alt={t(
              locale,
              `Vista móvil de ${project.title}`,
              `${project.title} mobile interface`,
            )}
            fill
            sizes={
              large
                ? "(max-width: 700px) 25vw, 230px"
                : "(max-width: 700px) 25vw, 150px"
            }
            className="object-cover object-top"
          />
        </div>
      </div>
      {project.slug === "educapp" && (
        <div className="cover-game" aria-hidden="true">
          <Image
            src="/educapp/mobile/animales.jpg"
            alt=""
            fill
            sizes={large ? "200px" : "120px"}
            className="object-cover object-top"
          />
        </div>
      )}
      <div className="cover-label" aria-hidden="true">
        <span className="cover-label-dot" />
        {project.slug === "bunker-canino"
          ? t(locale, "Web responsiva", "Responsive web")
          : "Android + Web"}
      </div>
    </div>
  );
}
