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
- **`src/assets/images/angelica-portrait-blue.jpg`** — real photo, sharp
  and well-lit, used on the Relocate page (previously a duplicate of the
  hero portrait). Originally arrived with the source app's crop-tool UI
  burned in; cropped to 4:5 below the chrome.
- **`src/assets/images/angelica-candid.jpg`** — real photo, used on the
  Contact page. Same crop treatment. **Noticeably soft/out of focus and
  very tightly zoomed** — it's real and it works, but it's the weakest
  image on the site. Replace it first when better photography exists.
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
- `src/app/peachtree-city-ga/page.tsx` — golf-cart / path photo

Every page that should show Angelica now shows a real, distinct photo of
her; the only remaining placeholders are Peachtree City *place* shots.
