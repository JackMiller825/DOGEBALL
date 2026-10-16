import { siteConfig } from "../config/site.ts";

export type TokenomicMetric = {
  id: string;
  index: string;
  value: string;
  label: string;
  verified: boolean;
};

export function tokenomicMetrics(): TokenomicMetric[] {
  const { tokenomics } = siteConfig;

  return [
    {
      id: "supply",
      index: "01",
      value: tokenomics.totalSupply,
      label: "TOTAL SUPPLY",
      verified: tokenomics.verified.totalSupply,
    },
    {
      id: "tax",
      index: "02",
      value: tokenomics.tax,
      label: tokenomics.verified.tax ? "BUY / SELL TAX" : "BUY / SELL TAX*",
      verified: tokenomics.verified.tax,
    },
    {
      id: "liquidity",
      index: "03",
      value: tokenomics.verified.liquidity ? tokenomics.liquidity : "LP Burn*",
      label: "LIQUIDITY PLAN",
      verified: tokenomics.verified.liquidity,
    },
    {
      id: "ownership",
      index: "04",
      value: tokenomics.verified.ownership ? tokenomics.ownership : "Renounce*",
      label: "OWNERSHIP PLAN",
      verified: tokenomics.verified.ownership,
    },
  ];
}

export function tokenomicsNeedVerification(): boolean {
  return tokenomicMetrics().some((metric) => !metric.verified);
}
