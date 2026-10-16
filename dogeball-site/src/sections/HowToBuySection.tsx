import { placeholders, siteConfig } from "../config/site.ts";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { configuredContractAddress, officialHttpUrl } from "../lib/official.ts";

const steps = [
  {
    id: "wallet",
    index: "01",
    title: "Set up a wallet",
    body: "Choose a self-custody wallet that supports the confirmed token network.",
    chip: "WALLET",
  },
  {
    id: "funds",
    index: "02",
    title: "Add network funds",
    body: "Keep enough of the network’s native token for your swap and gas fees.",
    chip: "GAS READY",
  },
  {
    id: "buy",
    index: "03",
    title: "Open official buy link",
    body: "Use the project’s verified swap destination once it is published.",
    chip: placeholders.buy,
  },
  {
    id: "contract",
    index: "04",
    title: "Check the contract",
    body: "Match the token address exactly. If it differs, stop and verify.",
    chip: placeholders.contract,
  },
] as const;

export function HowToBuySection() {
  const buyUrl = officialHttpUrl(siteConfig.buyUrl);
  const chartUrl = officialHttpUrl(siteConfig.chartUrl);
  const address = configuredContractAddress(siteConfig.contractAddress);

  return (
    <section className="playbook" id="how-to-buy" aria-labelledby="how-to-buy-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Your four-play playbook"
          titleId="how-to-buy-title"
          title="How to Buy"
          intro="Take it one step at a time, and verify the official token address before every swap."
        />
        <ol className="step-grid">
          {steps.map((step) => (
            <li className="step-card" key={step.id}>
              <span className="step-index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {step.id === "buy" && buyUrl ? (
                <a className="step-chip" href={buyUrl} target="_blank" rel="noopener noreferrer">
                  Open buy link <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ) : step.id === "contract" && address ? (
                <span className="step-chip is-address">{address}</span>
              ) : (
                <span className={`step-chip${step.id === "buy" || step.id === "contract" ? " is-pending" : ""}`}>
                  {step.chip}
                </span>
              )}
            </li>
          ))}
        </ol>
        {chartUrl ? (
          <p className="chart-link">
            <a href={chartUrl} target="_blank" rel="noopener noreferrer">
              View chart <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </p>
        ) : null}
        <p className="playbook-note">Crypto assets are volatile. This is a visual guide, not financial advice.</p>
      </div>
    </section>
  );
}
