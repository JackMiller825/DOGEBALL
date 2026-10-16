/**
 * Launch configuration. Empty destinations and `verified: false` are pending.
 * Replace a value only after it is confirmed. Leave verification flags false
 * until that item is intentionally approved for factual display.
 */
export const siteConfig = {
  name: "DOGEBALL",
  ticker: "$DOGEBALL",
  network: "Ethereum Mainnet — confirm before publishing",
  contractAddress: "", // PENDING: [CONTRACT_ADDRESS]
  buyUrl: "", // PENDING: [BUY_LINK]
  chartUrl: "", // PENDING: [CHART_LINK]
  xUrl: "", // PENDING: [X_URL]
  telegramUrl: "", // PENDING: [TELEGRAM_URL]
  tokenomics: {
    totalSupply: "1,000,000,000", // planned; not yet verified on-chain
    tax: "0%", // planned; not yet verified on-chain
    liquidity: "LP Burn planned", // not completed/verified
    ownership: "Renounce planned", // not completed/verified
    verified: {
      totalSupply: false,
      tax: false,
      liquidity: false,
      ownership: false,
    },
  },
} as const;

export const placeholders = {
  contract: "[CONTRACT_ADDRESS]",
  buy: "[BUY_LINK]",
  chart: "[CHART_LINK]",
  x: "[X_URL]",
  telegram: "[TELEGRAM_URL]",
} as const;

const publicBase = import.meta.env.BASE_URL;

export const assetPaths = {
  logo: `${publicBase}images/dogeball-logo-transparent.png`,
  banner3to1: `${publicBase}images/dogeball-banner-3to1.png`,
  bannerSocial: `${publicBase}images/dogeball-banner-1100x520.png`,
} as const;

export const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "story", label: "Story", href: "#story" },
  { id: "tokenomics", label: "Tokenomics", href: "#tokenomics" },
  { id: "how-to-buy", label: "How to Buy", href: "#how-to-buy" },
  { id: "community", label: "Community", href: "#community" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];
