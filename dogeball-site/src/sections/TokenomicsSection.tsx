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
        <ul className="metric-grid" aria-describedby={needsVerification ? "tokenomics-disclaimer" : undefined}>
          {metrics.map((metric) => (
            <li className="metric-card" key={metric.id} data-verified={metric.verified ? "true" : "false"}>
              <span className="metric-index">{metric.index}</span>
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
              {metric.verified ? null : <span className="visually-hidden">Planned, not verified on-chain.</span>}
            </li>
          ))}
        </ul>
        {needsVerification ? (
          <div className="disclaimer" id="tokenomics-disclaimer">
            <span className="disclaimer-mark" aria-hidden="true" />
            <p>
              *These are proposed defaults from the project brief, not independently verified on-chain facts. Publish
              only after the contract is deployed and each setting or action is confirmed.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
