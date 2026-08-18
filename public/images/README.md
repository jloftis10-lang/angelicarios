# Photography

No AI-generated images of Angelica and no stock photography standing in
for her likeness — remaining placeholders are plain SVG/gradient artwork
labeled with what's missing (`src/components/ui/PlaceholderImage.tsx`),
never a fake photo. Drop real files in `src/assets/images/` and swap the
corresponding `<PlaceholderImage>` for a `<PortraitImage>` (see
`src/components/ui/PortraitImage.tsx`) using the same wrapper
className/aspect ratio.

## In place

- **`src/assets/images/angelica-portrait.jpg`** — a real, current photo of
  Angelica (candid, warm restaurant lighting), used on the homepage hero
  and the About page.
- **`src/assets/images/angelica-lifestyle.png`** — a real photo (red
  beret, warm indoor lighting), used on the homepage "Meet Angelica"
  section so it doesn't repeat the hero portrait.
- **`src/assets/images/angelica-hiking.jpg`** — a real photo of Angelica
  and her partner hiking, used in the About page's "Beyond real estate"
  section (both confirmed by the user as real and approved for publication).
- Two more real photos were sent but aren't in use yet — both still have
  the source app's crop-tool UI (a "Crop" button/status bar) burned into
  the image itself. They need a clean crop before they're publishable;
  ask for re-cropped versions or crop them locally before adding.
- A separate photo ("angelicaJim", a sports-bar selfie) was reviewed
  earlier and intentionally **not** used — different setting/context from
  what's since been confirmed appropriate; the hiking photo replaced the
  need for it.
- The one AI-generated studio headshot seen in a draft site build (navy
  blazer, white top) is confirmed **not real** — never use it or anything
  visually similar to it.

## Still needed

1. **Peachtree City multi-use paths.** Homepage "Why Peachtree City"
   section and the Peachtree City page's "Getting Around" section.
2. **Peachtree City lakes.**
3. **Golf-cart lifestyle.** Peachtree City page, "Getting Around."
4. **Residential streets / homes** (generic, not a specific listing).
5. **Natural local scenery.**
6. **Dog-related image** — only if it's an authentic photo of Angelica's
   own dog; skip otherwise rather than substituting a stock pet photo.
7. **Professional headshot** (optional upgrade) — the current portraits
   work for V1 but a studio/professionally-lit headshot would read more
   polished for the hero specifically. (Not the AI-generated one above —
   an actual photoshoot.)

## Where placeholders currently render

- `src/app/page.tsx` (homepage) — Peachtree City path/lake photo
- `src/app/relocate/page.tsx` — reuses the primary portrait; a distinct
  relocation-story photo would be a nice-to-have, not urgent
- `src/app/peachtree-city-ga/page.tsx` — golf-cart / path photo
