import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  intro?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  intro,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "section-heading is-center" : "section-heading"}>
      <p className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={titleId}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
