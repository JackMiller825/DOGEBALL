# DOGEBALL single-page website preview notes

These are static design mockups of one continuous, responsive homepage. They show the approved DOGEBALL Shiba mascot, orange/cobalt/red/cream palette, and midnight arena setting. All controls and interaction states are illustrative; the PNGs do not contain working links, buttons, or animation.

## Page sequence and visual story

1. **Hero — `#home`**: the champion enters the arena. “The court is open” is the hook, with DOGEBALL as the dominant visual, a primary buy action, a story action, and a contract placeholder.
2. **Origin story — `#story`**: scroll from the entrance into the joke: eleven minutes of training, total confidence, a dramatic dodge, and a no-look winning throw. The three beat cards make the story scannable.
3. **Tokenomics — `#tokenomics`**: the scoreboard transition turns the character narrative into four simple proposed parameters. Each value is labeled as planned and requires confirmation before publication.
4. **How to Buy — `#how-to-buy`**: the visual changes to a four-play instruction card sequence, ending with the most important safety check: verify the contract.
5. **Community — `#community`**: the arena opens back up for the audience, with social placeholders and a celebratory mascot.
6. **Footer**: repeats the section navigation, placeholders, and a concise volatility reminder.

The same order is preserved on mobile. At narrow widths the hero stacks copy above the mascot, story art moves above the story copy, metric cards and buying steps become two-column grids, and the community panel stacks its CTA above the character. The mobile navigation opens as a full-screen dimmed backdrop with a compact link panel.

## Header navigation and implementation behavior

| Header link | Target anchor | Section |
|---|---|---|
| Home | `#home` | Hero |
| Story | `#story` | Narrative/origin story |
| Tokenomics | `#tokenomics` | Tokenomics |
| How to Buy | `#how-to-buy` | Buying instructions |
| Community | `#community` | Community |

For the later website build:

- Keep all sections in one document, each with the matching unique `id`; header links use same-document `href="#…"` anchors.
- Use smooth scrolling by default and immediate scrolling when `prefers-reduced-motion: reduce` is set.
- If the header is sticky/fixed, give target sections sufficient `scroll-margin-top` so headings remain visible below it.
- Highlight the active header link as the visitor scrolls, using an intersection observer or equivalent section tracking.
- Make the mobile menu button expose its expanded state and accessible name; support keyboard focus and Escape to close. Close the menu after a section link is selected.
- Preserve native wheel, touch, and keyboard scrolling. Direct links such as `/#tokenomics` must land on their matching section.
- Connect the contract copy control to the finalized address and clipboard API, then show a brief success/error toast. The copy-confirmed image is a representative state only.
- Connect buy, chart, X, and Telegram actions only to confirmed official destinations. Keep link labels clear; do not use placeholders in production.
- Any scroll reveal, hover feedback, or motion should respect reduced-motion preferences and retain readable content if animation is unavailable.

## Placeholder and factual status

`[CONTRACT_ADDRESS]`, `[BUY_LINK]`, `[X_URL]`, and `[TELEGRAM_URL]` are intentionally unresolved. Tokenomics are shown as **planned parameters**, not established on-chain facts: 1,000,000,000 supply, 0% buy/sell tax, LP burn plan, and ownership renounce plan. Confirm deployment and each on-chain setting/action before presenting them as completed facts.

## Preview index

| Filename | Section/view | Device | Purpose |
|---|---|---|---|
| `01-dogeball-home-overview-desktop.png` | Full homepage | Desktop | Review the entire story and section rhythm from header to footer. |
| `02-dogeball-home-hero-desktop.png` | Hero | Desktop | Evaluate identity, hook, mascot scale, primary actions, and contract block. |
| `03-dogeball-home-story-desktop.png` | Origin story | Desktop | Evaluate the narrative beats and the visual payoff. |
| `04-dogeball-home-tokenomics-desktop.png` | Tokenomics | Desktop | Evaluate planned metrics and verification note. |
| `05-dogeball-home-how-to-buy-desktop.png` | How to Buy | Desktop | Evaluate the four-step buying guide and contract check. |
| `06-dogeball-home-community-desktop.png` | Community | Desktop | Evaluate social CTAs and community close. |
| `07-dogeball-home-footer-desktop.png` | Footer | Desktop | Evaluate repeat navigation and closing disclaimer. |
| `08-dogeball-home-overview-mobile.png` | Full homepage | Mobile | Review the complete responsive page and section order. |
| `09-dogeball-home-hero-mobile.png` | Hero | Mobile | Evaluate stacked hero layout and touch-sized actions. |
| `10-dogeball-home-story-mobile.png` | Origin story | Mobile | Evaluate the reordered art, copy, and story beats. |
| `11-dogeball-home-tokenomics-mobile.png` | Tokenomics | Mobile | Evaluate compact two-column metrics and note readability. |
| `12-dogeball-home-how-to-buy-mobile.png` | How to Buy | Mobile | Evaluate responsive two-column instruction cards. |
| `13-dogeball-home-community-mobile.png` | Community | Mobile | Evaluate stacked social actions and mascot placement. |
| `14-dogeball-header-desktop-active-story.png` | Active Story navigation state | Desktop | Evaluate current-section treatment while Story is in view. |
| `15-dogeball-header-mobile-menu-open.png` | Mobile menu open | Mobile | Evaluate menu hierarchy and all five section links. |
| `16-dogeball-home-footer-mobile.png` | Footer | Mobile | Evaluate stacked navigation, socials, and disclaimer. |
| `17-dogeball-interaction-story-reveal.png` | Scroll reveal example | Desktop | Evaluate the illustrative card reveal state and animation caption. |
| `18-dogeball-interaction-copy-confirmed.png` | Copy confirmation example | Desktop | Evaluate the illustrative success toast after copying the contract. |
| `19-dogeball-interaction-buy-hover.png` | Buy button hover example | Desktop | Evaluate the illustrative hover emphasis on the primary action. |

## Production image assets to prepare

| Proposed filename | Suggested dimensions | Transparency | Placement |
|---|---:|---|---|
| `dogeball-mascot-hero.webp` | 1200 × 1200 px | Transparent PNG/WebP alpha | Hero; transparent cutout at desktop right and mobile below CTAs. |
| `dogeball-mascot-story.webp` | 900 × 700 px | Transparent alpha | Story illustration; action pose or trick-shot pose. |
| `dogeball-mascot-community.webp` | 800 × 900 px | Transparent alpha | Community panel; celebratory pose. |
| `dogeball-logo-mark.png` | 512 × 512 px | Transparent alpha | Header and footer mark. |
| `dogeball-favicon.png` | 64 × 64 px | Transparent alpha | Browser tab/app icon, simplified logo mark. |
| `dogeball-arena-texture.webp` | 1920 × 1080 px | Opaque | Optional low-contrast desktop hero/background texture; crop responsively. |
| `dogeball-social-preview.png` | 1200 × 630 px | Opaque | Link preview/Open Graph card using confirmed launch copy and mascot. |

The hero, story, and community images should use the same mascot proportions, face, headband, jersey, and dodgeball. Keep key anatomy inside a 10% safe margin; provide compressed web versions alongside high-resolution masters.
