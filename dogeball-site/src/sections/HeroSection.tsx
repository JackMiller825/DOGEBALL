import { BuyAction } from "../components/BuyAction.tsx";
import { CopyAddressButton } from "../components/CopyAddressButton.tsx";
import { MascotImage } from "../components/MascotImage.tsx";

export function HeroSection() {
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
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </BuyAction>
            <a className="btn btn-ghost" href="#story">
              Meet the legend ↓
            </a>
          </div>
          <CopyAddressButton />
        </div>
        <div className="hero-art">
          <p className="mascot-tag">Dodge first. Ask questions never.</p>
          <MascotImage
            priority
            alt="DOGEBALL logo: an orange-and-cream Shiba in a cobalt headband and red referee jersey, holding an orange dodgeball."
          />
        </div>
      </div>
    </section>
  );
}
