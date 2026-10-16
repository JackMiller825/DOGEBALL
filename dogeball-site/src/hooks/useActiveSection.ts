import { useEffect, useState } from "react";
import { navItems, type SectionId } from "../config/site.ts";

const SECTION_IDS = navItems.map((item) => item.id);

function isSectionId(value: string): value is SectionId {
  return SECTION_IDS.some((id) => id === value);
}

function sectionFromHash(): SectionId {
  const id = window.location.hash.replace("#", "");
  return isSectionId(id) ? id : "home";
}

export function useActiveSection(): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(sectionFromHash);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null,
    );

    if (elements.length === 0 || !("IntersectionObserver" in window)) return;

    const ratios = new Map<SectionId, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!isSectionId(entry.target.id)) continue;
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let nextId: SectionId | null = null;
        let bestRatio = 0;
        for (const id of SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            nextId = id;
          }
        }

        if (nextId && bestRatio > 0) setActiveId(nextId);
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return activeId;
}
