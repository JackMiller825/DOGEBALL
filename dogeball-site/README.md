# DOGEBALL

Single-page site for DOGEBALL ($DOGEBALL). One route, `/`, with same-page section anchors.

## Scripts

- `npm run dev` — local preview
- `npm run lint` — oxlint
- `npm run build` — typecheck with `tsc -b`, then Vite production build
- `npm run preview` — serve the production build

Live site: [GitHub Pages](https://jackmiller825.github.io/DOGEBALL/). Pushing to `main` on [JackMiller825/DOGEBALL](https://github.com/JackMiller825/DOGEBALL) runs `.github/workflows/deploy-pages.yml`, which builds this folder and publishes `dist`.

The Pages build sets `GITHUB_PAGES=true`, so Vite uses the `/DOGEBALL/` base path. A normal `npm run build` keeps the base at `/` for local preview or a root-hosted deploy such as Vercel (`vercel.json`, output directory `dist`). Hash anchors do not need path rewrites.

## Pending launch values

Edit only `src/config/site.ts`. Leave a field empty, and leave its `verified` flag `false`, until that fact is confirmed. The page keeps the placeholder or caveat until then.

| Key | Current value | Shown until confirmed |
| --- | --- | --- |
| `contractAddress` | empty | `[CONTRACT_ADDRESS]`, copy disabled |
| `buyUrl` | empty | Get DOGEBALL scrolls to `#how-to-buy`; buy chip shows `[BUY_LINK]` |
| `chartUrl` | empty | no chart control |
| `xUrl` | empty | `[X_URL]`, Follow on X is not a link |
| `telegramUrl` | empty | `[TELEGRAM_URL]`, Join Telegram is not a link |
| `network` | `Ethereum Mainnet — confirm before publishing` | not printed as a network claim |
| `tokenomics.totalSupply` | `1,000,000,000` | planned, `verified.totalSupply: false` |
| `tokenomics.tax` | `0%` | planned, label keeps `*` |
| `tokenomics.liquidity` | `LP Burn planned` | scoreboard shows `LP Burn*` until `verified.liquidity` is set |
| `tokenomics.ownership` | `Renounce planned` | scoreboard shows `Renounce*` until `verified.ownership` is set |

When a tokenomics item is confirmed, set that item’s `verified` flag to `true` and replace the string with the confirmed wording. The section disclaimer stays until every flag is true. Do not mark liquidity burned or ownership renounced unless that action has actually happened.

Official links must be absolute `http:` or `https:` URLs. The contract copy control accepts a `0x` address with 40 hex characters and copies that exact value.

## Assets

Production files in `public/images/`:

- `dogeball-logo-transparent.png` — header, footer, and the mascot artwork in the hero, story, and community sections
- `dogeball-banner-3to1.png` — promo file only, not used as a page background
- `dogeball-banner-1100x520.png` — social/Telegram promo file only, not placed in a homepage section

`public/favicon.png` is a 64×64 derivative of the transparent logo for the browser tab. The logo corners stay transparent.

Unavailable:

- `dogeball-mascot-cutout.png` was not in the brand archive. The transparent logo is the mascot fallback, with `object-fit: contain`.
- A dedicated 1200×630 Open Graph image is not included. The 1500×500 banner is 3:1 and would not crop cleanly to 1.91:1, so no Open Graph image is set and no canonical domain is invented.

Design mockups live in `design-reference/dogeball-website-previews/` and are not part of the production page.
