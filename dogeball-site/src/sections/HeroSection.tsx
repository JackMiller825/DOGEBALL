import { BuyAction } from "../components/BuyAction.tsx";
import { CopyAddressButton } from "../components/CopyAddressButton.tsx";
import { Icon } from "../components/Icons.tsx";
import { SectionPhoto } from "../components/SectionPhoto.tsx";
import { useTilt } from "../components/useTilt.ts";
import { assetPaths } from "../config/site.ts";

export function HeroSection() {
  const tilt = useTilt<HTMLDivElement>(14);

  return (
    <section className="hero" id="home" aria-labelledby="home-title">
      <div className="court-lines" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            A new legend is warming up
          </p>
          <h1 id="home-title">
            THE COURT
            <br />
            IS <span className="gold">OPEN.</span>
          </h1>
          <p className="lede">
            Meet DOGEBALL: the Shiba dodgeball champion who dodges every throw and claims the last word.
          </p>
          <div className="hero-actions">
            <BuyAction className="btn btn-primary">
              Get DOGEBALL
              <Icon name="arrow" className="btn-arrow" />
            </BuyAction>
            <a className="btn btn-ghost" href="#story">
              Meet the legend
              <Icon name="down" />
            </a>
          </div>
          <CopyAddressButton />
        </div>
        <div className="hero-art" {...tilt}>
          <SectionPhoto
            priority
            src={assetPaths.hero}
            width={460}
            height={520}
            alt="DOGEBALL lunging across the court and launching a flaming dodgeball."
          />
        </div>
      </div>
    </section>
  );
}
