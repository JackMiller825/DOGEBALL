import { assetPaths, navItems, placeholders, siteConfig } from "../config/site.ts";
import { officialHttpUrl } from "../lib/official.ts";

function FooterSocial({ href, label, pending }: { href: string; label: string; pending: string }) {
  const url = officialHttpUrl(href);
  if (!url) {
    return (
      <span className="footer-social is-pending">
        {label} <span aria-hidden="true">↗</span>
        <span className="visually-hidden"> {pending} pending</span>
      </span>
    );
  }

  return (
    <a className="footer-social" href={url} target="_blank" rel="noopener noreferrer">
      {label} <span aria-hidden="true">↗</span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <img src={assetPaths.logo} alt="" width={1024} height={1024} decoding="async" />
              <span>{siteConfig.name}</span>
            </a>
            <p>The court is open.</p>
          </div>
          <nav aria-label="Footer sections">
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-socials">
            <FooterSocial href={siteConfig.xUrl} label="X" pending={placeholders.x} />
            <FooterSocial href={siteConfig.telegramUrl} label="Telegram" pending={placeholders.telegram} />
          </div>
        </div>
      </div>
    </footer>
  );
}
