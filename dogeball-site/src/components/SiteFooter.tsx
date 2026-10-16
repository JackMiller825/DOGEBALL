import { assetPaths, navItems, placeholders, siteConfig } from "../config/site.ts";
import { Icon, type IconName } from "./Icons.tsx";
import { officialHttpUrl } from "../lib/official.ts";

function FooterSocial({
  href,
  icon,
  name,
  pending,
}: {
  href: string;
  icon: IconName;
  name: string;
  pending: string;
}) {
  const url = officialHttpUrl(href);
  const mark = <Icon name={icon} />;
  if (!url) {
    return (
      <span className="footer-social is-pending" aria-label={`${name}, ${pending} pending`}>
        {mark}
      </span>
    );
  }

  return (
    <a className="footer-social" href={url} target="_blank" rel="noopener noreferrer" aria-label={`${name}, opens in a new tab`}>
      {mark}
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
            <FooterSocial href={siteConfig.xUrl} icon="x" name="Follow on X" pending={placeholders.x} />
            <FooterSocial href={siteConfig.telegramUrl} icon="telegram" name="Join Telegram" pending={placeholders.telegram} />
          </div>
        </div>
      </div>
    </footer>
  );
}
