import { useEffect, useRef, type RefObject } from "react";
import { createPortal } from "react-dom";
import { navItems, type SectionId } from "../config/site.ts";
import { Icon, type IconName } from "./Icons.tsx";

const sectionIcons: Record<SectionId, IconName> = {
  home: "home",
  story: "whistle",
  tokenomics: "scoreboard",
  "how-to-buy": "wallet",
  community: "users",
};

type MobileMenuProps = {
  open: boolean;
  activeId: SectionId;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

export function MobileMenu({ open, activeId, onClose, returnFocusRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const toggle = returnFocusRef.current;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      toggle?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  return createPortal(
    <div className="menu-layer" hidden={!open}>
      <button type="button" className="menu-backdrop" tabIndex={-1} aria-hidden="true" onClick={onClose} />
      <div
        className="menu-panel"
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="menu-panel-head">
          <p id="mobile-menu-title">Navigate the court</p>
          <button type="button" className="menu-close" ref={closeRef} onClick={onClose} aria-label="Close menu">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Sections">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={item.id === activeId ? "location" : undefined}
                  onClick={onClose}
                >
                  <span className="menu-link-label">
                    <Icon name={sectionIcons[item.id]} />
                    <span>{item.label}</span>
                  </span>
                  <Icon name="arrow" className="menu-chevron" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>,
    document.body,
  );
}
