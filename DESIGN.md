# Visual system

Reference: https://floatprompt.com/specs/ (inspected 19 November 2026 at a 1342 × 819 viewport). Font source: https://allo.joshpuckett.me/, discovered through the user-supplied Abduzeedo article.

## Observed reference

Browser screenshot and computed styles show a #111111 page; Allo throughout; a fixed, narrow left navigation beginning at 120px from the top; a centred 532px document column; a 40px/46px, weight-600 page heading; 20px, weight-500 section headings; two-column definition lists with 168px labels; subdued grey body text, white labels, and thin row dividers. Navigation uses a flat #1c1c1c active background and 8px corners. The page is text-led, without decorative imagery or hero cards.

## Implementation decisions

Preserve the dark document layout, broad negative space, quiet hierarchy, label/value rows, and compact navigation. Adapt navigation and content to a skill library. Use a 560px column (600px on very wide screens), 16–19px body text, slightly lighter grey for comfortable contrast, and a restrained mint accent for interactive details. On mobile, navigation becomes a horizontal row above the content and definition lists retain a smaller label column.

Self-host the unmodified Allo 1.0.3 variable WOFF2 with weight 100–900, optical sizing, and roundness set to 50. Include the original OFL licence. The monogram and favicon are original site marks; no Floatprompt logo or illustration is reused.

## Behaviour

Direct downloads work without JavaScript. JavaScript provides clipboard feedback, accessible keyboard-operated installation tabs, a lazily loaded plain-text skill preview, and active section navigation. Respect reduced-motion preferences. Font and download paths are local to the deployment. No tracking, accounts, external font calls, or private course media are part of the site.
