import { SectionHeading } from "../components/SectionHeading.tsx";
import { tokenomicMetrics, tokenomicsNeedVerification } from "../lib/tokenomics.ts";

export function TokenomicsSection() {
  const metrics = tokenomicMetrics();
  const needsVerification = tokenomicsNeedVerification();

  return (
    <section className="tokenomics" id="tokenomics" aria-labelledby="tokenomics-title">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="The scoreboard"
          titleId="tokenomics-title"
          title="Tokenomics"
          intro="Simple stats for the court. Final contract settings and on-chain actions must be confirmed before launch."
        />
        {needsVerification ? (
          <p className="plan-status">Planned parameters · verify before publishing</p>
        ) : null}
        <ul className="metric-grid">
          {metrics.map((metric) => (
            <li className="metric-card" key={metric.id} data-verified={metric.verified ? "true" : "false"}>
              <span className="metric-index">{metric.index}</span>
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
