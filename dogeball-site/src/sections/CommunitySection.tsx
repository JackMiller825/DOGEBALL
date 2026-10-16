import { assetPaths, placeholders, siteConfig } from "../config/site.ts";
import { Icon, type IconName } from "../components/Icons.tsx";
import { SectionPhoto } from "../components/SectionPhoto.tsx";
import { useTilt } from "../components/useTilt.ts";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { officialHttpUrl } from "../lib/official.ts";

function CommunityAction({
  href,
  label,
  icon,
  pending,
}: {
  href: string;
  label: string;
  icon: IconName;
  pending: string;
}) {
  const url = officialHttpUrl(href);
  const mark = <Icon name={icon} />;

  if (!url) {
    return (
      <button type="button" className="btn btn-ghost social-icon" disabled aria-label={`${label}, ${pending} pending`}>
        {mark}
      </button>
    );
  }

  return (
    <a
      className="btn btn-ghost social-icon"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}, opens in a new tab`}
    >
      {mark}
    </a>
  );
}

export function CommunitySection() {
  const tilt = useTilt<HTMLDivElement>(10);

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
              <CommunityAction href={siteConfig.xUrl} label="Follow on X" icon="x" pending={placeholders.x} />
              <CommunityAction href={siteConfig.telegramUrl} label="Join Telegram" icon="telegram" pending={placeholders.telegram} />
            </div>
          </div>
          <div className="community-art" {...tilt}>
            <SectionPhoto
              src={assetPaths.community}
              width={520}
              height={500}
              alt="A dodgeball hitting the arena scoreboard as DOGEBALL slides in."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
