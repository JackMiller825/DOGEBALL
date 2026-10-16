import { useEffect, useId, useRef, useState } from "react";
import { assetPaths } from "../config/site.ts";
import "./entrance.css";

const REDUCE_MOTION = "(prefers-reduced-motion: reduce)";

type EntranceProps = {
  onDone: () => void;
};

export function Entrance({ onDone }: EntranceProps) {
  const titleId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onDoneRef = useRef(onDone);
  const [reduce] = useState(() => window.matchMedia(REDUCE_MOTION).matches);
  const [leaving, setLeaving] = useState(false);
  const closed = useRef(false);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  function enter() {
    if (closed.current || leaving) return;
    setLeaving(true);
  }

  useEffect(() => {
    buttonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const hold = window.setTimeout(() => setLeaving(true), reduce ? 1400 : 4600);
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setLeaving(true);
    }
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(hold);
      window.removeEventListener("keydown", onKey);
    };
  }, [reduce]);

  useEffect(() => {
    if (!leaving) return;
    const exit = window.setTimeout(() => {
      if (closed.current) return;
      closed.current = true;
      onDoneRef.current();
    }, reduce ? 160 : 780);
    return () => window.clearTimeout(exit);
  }, [leaving, reduce]);

  return (
    <div
      className={`entrance${leaving ? " is-exit" : ""}${reduce ? " is-still" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="entrance-light entrance-light-left" aria-hidden="true" />
      <div className="entrance-light entrance-light-right" aria-hidden="true" />
      <div className="entrance-floor" aria-hidden="true" />
      <div className="entrance-stage">
        <img
          className="entrance-dog"
          src={assetPaths.hero}
          alt=""
          width={460}
          height={520}
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="entrance-copy">
        <p className="entrance-kicker">A new legend is warming up</p>
        <p className="entrance-title" id={titleId}>
          DOGEBALL
        </p>
        <p className="entrance-sub">
          The court is <span>open.</span>
        </p>
        <button ref={buttonRef} className="btn btn-primary entrance-enter" type="button" onClick={enter}>
          Enter the court
        </button>
      </div>
    </div>
  );
}
