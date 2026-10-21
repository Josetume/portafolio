"use client";
import { useEffect, useState } from "react";

export default function useActiveSection(
  ids: readonly string[],
  enabled = true,
) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const cutoff = window.innerWidth <= 900 ? 155 : 165;
      let current = "";
      for (const id of ids) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= cutoff) current = id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 12
      ) {
        current = ids[ids.length - 1] || "";
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [ids, enabled]);
  return enabled ? active : "";
}
