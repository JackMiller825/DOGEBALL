import { useCallback, useEffect, useRef, useState } from "react";
import { assetPaths, navItems, siteConfig } from "../config/site.ts";
import { useActiveSection } from "../hooks/useActiveSection.ts";
import { BuyAction } from "./BuyAction.tsx";
import { Icon } from "./Icons.tsx";
import { MobileMenu } from "./MobileMenu.tsx";

export function SiteHeader() {
  const activeId = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");
    const onChange = () => {
      if (media.matches) closeMenu();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [closeMenu]);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <a className="brand" href="#home">
          <img src={assetPaths.logo} alt="" width={1024} height={1024} decoding="async" />
          <span>{siteConfig.name}</span>
        </a>
        <nav className="desktop-nav" aria-label="Sections">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} aria-current={item.id === activeId ? "location" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <BuyAction className="btn btn-primary header-cta">
          Get DOGEBALL
          <Icon name="arrow" className="btn-arrow" />
        </BuyAction>
        <button
          type="button"
          className="menu-toggle"
          ref={toggleRef}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-bars" aria-hidden="true" />
        </button>
      </div>
      <MobileMenu open={menuOpen} activeId={activeId} onClose={closeMenu} returnFocusRef={toggleRef} />
    </header>
  );
}
