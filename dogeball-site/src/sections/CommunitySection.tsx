import { placeholders, siteConfig } from "../config/site.ts";
import { MascotImage } from "../components/MascotImage.tsx";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { officialHttpUrl } from "../lib/official.ts";

function CommunityAction({
  href,
  label,
  text,
  pending,
}: {
  href: string;
  label: string;
  text: string;
  pending: string;
}) {
  const url = officialHttpUrl(href);

  if (!url) {
    return (
      <button type="button" className="btn btn-ghost social-word" disabled aria-label={`${label}, ${pending} pending`}>
        {text}
      </button>
    );
  }

  return (
    <a
      className="btn btn-ghost social-word"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}, opens in a new tab`}
    >
      {text}
    </a>
  );
}

export function CommunitySection() {
  return (
    <section className="community" id="community" aria-labelledby="community-title">
      <div className="container">
        <div className="community-panel">
          <div className="community-copy">
            <SectionHeading
              eyebrow="Pick your side of the court"
              titleId="community-title"
              title={
                <>
                  The game is
                  <br />
                  better together.
                </>
              }
            />
            <p>
              Follow the official channels for launch updates, community events, and the next DOGEBALL highlight reel.
            </p>
            <div className="community-actions">
              <CommunityAction href={siteConfig.xUrl} label="Follow on X" text="X" pending={placeholders.x} />
              <CommunityAction href={siteConfig.telegramUrl} label="Join Telegram" text="TG" pending={placeholders.telegram} />
            </div>
          </div>
          <div className="community-art">
            <MascotImage alt="DOGEBALL mascot" />
          </div>
        </div>
      </div>
    </section>
  );
}
