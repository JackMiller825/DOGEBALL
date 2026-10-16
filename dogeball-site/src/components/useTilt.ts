import { useRef, type PointerEvent } from "react";

export function useTilt<T extends HTMLElement>(max = 12) {
  const ref = useRef<T>(null);

  function onPointerMove(event: PointerEvent<T>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;
    const box = node.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.transform = `rotateY(${(x * max).toFixed(2)}deg) rotateX(${(-y * max).toFixed(2)}deg)`;
  }

  function onPointerLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return { ref, onPointerMove, onPointerLeave };
}
