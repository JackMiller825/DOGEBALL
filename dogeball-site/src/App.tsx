import { useState } from "react";
import { CommunitySection } from "./sections/CommunitySection.tsx";
import { HeroSection } from "./sections/HeroSection.tsx";
import { HowToBuySection } from "./sections/HowToBuySection.tsx";
import { StorySection } from "./sections/StorySection.tsx";
import { TokenomicsSection } from "./sections/TokenomicsSection.tsx";
import { Entrance } from "./components/Entrance.tsx";
import { SiteFooter } from "./components/SiteFooter.tsx";
import { SiteHeader } from "./components/SiteHeader.tsx";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? null : <Entrance onDone={() => setEntered(true)} />}
      <div inert={entered ? undefined : true}>
        <a className="skip-link" href="#home">
          Skip to content
        </a>
        <SiteHeader />
        <main>
          <HeroSection />
          <StorySection />
          <TokenomicsSection />
          <HowToBuySection />
          <CommunitySection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
