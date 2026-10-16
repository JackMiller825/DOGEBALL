import { assetPaths, navItems, placeholders, siteConfig } from "../config/site.ts";
import { officialHttpUrl } from "../lib/official.ts";

function FooterSocial({
  href,
  label,
  name,
  pending,
}: {
  href: string;
  label: string;
  name: string;
  pending: string;
}) {
  const url = officialHttpUrl(href);
  if (!url) {
    return (
      <span className="footer-social is-pending" aria-label={`${name}, ${pending} pending`}>
        {label}
      </span>
    );
  }

  return (
    <a className="footer-social" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name}, opens in a new tab`}>
      {label}
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
            <FooterSocial href={siteConfig.xUrl} label="X" name="Follow on X" pending={placeholders.x} />
            <FooterSocial href={siteConfig.telegramUrl} label="TG" name="Join Telegram" pending={placeholders.telegram} />
          </div>
        </div>
      </div>
    </footer>
  );
}
