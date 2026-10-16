import { Icon, type IconName } from "../components/Icons.tsx";
import { SectionHeading } from "../components/SectionHeading.tsx";
import { tokenomicMetrics } from "../lib/tokenomics.ts";

const metricIcons: Record<string, IconName> = {
  supply: "coins",
  tax: "percent",
  liquidity: "drop",
  ownership: "key",
};

export function TokenomicsSection() {
  const metrics = tokenomicMetrics();

  return (
    <section className="tokenomics" id="tokenomics" aria-labelledby="tokenomics-title">
      <div className="container">
        <SectionHeading align="center" eyebrow="The scoreboard" titleId="tokenomics-title" title="Tokenomics" />
        <ul className="metric-grid">
          {metrics.map((metric) => (
            <li className="metric-card" key={metric.id} data-verified={metric.verified ? "true" : "false"}>
              <span className="mark-row">
                <span className="metric-index">
                  <Icon name={metricIcons[metric.id] ?? "scoreboard"} />
                </span>
                <span className="mark-num">{metric.index}</span>
              </span>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
              {metric.verified ? null : <span className="visually-hidden">Planned, not verified on-chain.</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
