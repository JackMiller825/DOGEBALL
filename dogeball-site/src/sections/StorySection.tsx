import { useLayoutEffect, useRef, useState } from "react";
import { Icon, type IconName } from "../components/Icons.tsx";
import { MascotImage } from "../components/MascotImage.tsx";
import { SectionHeading } from "../components/SectionHeading.tsx";

const beats = [
  {
    id: "warm-up",
    index: "01",
    label: "WARM-UP",
    icon: "flame" satisfies IconName,
    title: "Eleven-minute legend",
    body: "He watched one tutorial, tied his headband, and declared himself “basically ready.”",
  },
  {
    id: "dodge",
    index: "02",
    label: "THE DODGE",
    icon: "dodge" satisfies IconName,
    title: "Confidence: 100%",
    body: "Every opponent throws. DOGEBALL turns a simple sidestep into a full arena highlight.",
  },
  {
    id: "finish",
    index: "03",
    label: "THE FINISH",
    icon: "trophy" satisfies IconName,
    title: "No-look. No notes.",
    body: "A trick shot lands. The scoreboard blinks. DOGEBALL asks if anyone got that on camera.",
  },
] as const;

export function StorySection() {
  const listRef = useRef<HTMLOListElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!list || reduce || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const rect = list.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (inView) {
      setVisible(true);
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 },
    );
    observer.observe(list);
    const fallback = window.setTimeout(() => setVisible(true), 4000);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const revealClass = armed ? (visible ? "beats is-armed is-visible" : "beats is-armed") : "beats";

  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="container">
        <div className="story-top">
          <div className="story-copy">
            <SectionHeading
              eyebrow="Origin story · game day"
              titleId="story-title"
              title={
                <>
                  <span className="story-line">Eleven minutes</span>
                  <span className="story-line">of training.</span>
                  <span className="gold story-line">Unshakable.</span>
                </>
              }
            />
            <p>
              DOGEBALL walked onto the court with a ball, a whistle, and the confidence of a champion. His training
              montage lasted eleven minutes. The team still calls it “a full season.”
            </p>
            <p>
              Then the first throw came flying. He leaned left. The opponents leaned harder. One feint later, DOGEBALL
              launched a no-look winner while everyone was still dodging the wrong way.
            </p>
            <a className="text-action" href="#tokenomics">
              See the game plan
              <Icon name="down" />
            </a>
          </div>
          <figure className="story-art">
            <figcaption className="confidence-badge">Confidence: 100%</figcaption>
            <MascotImage alt="DOGEBALL mascot" />
          </figure>
        </div>
        <ol className={revealClass} ref={listRef}>
          {beats.map((beat) => (
            <li className="beat" key={beat.id}>
              <p className="beat-kicker">
                <Icon name={beat.icon} />
                <span>
                  {beat.index} / {beat.label}
                </span>
              </p>
              <h3>{beat.title}</h3>
              <p>{beat.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
