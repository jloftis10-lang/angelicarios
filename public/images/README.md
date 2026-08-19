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
- **`src/assets/images/angelica-lifestyle.jpg`** — a real photo (red
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

## Peachtree City scene imagery — AI-GENERATED, read this

`ptc-path-lake.jpg`, `ptc-golf-cart-street.jpg`, and `ptc-path-walkers.jpg`
came from the client's Drive folder and are **AI-generated images, not
photographs of Peachtree City**. They were added at the client's explicit
request to fill the scene slots on the homepage, Peachtree City page, and
Communities page.

Treat this as a deliberate, temporary exception to the no-fake-imagery rule
that governs everything else here, and understand the distinction being
drawn: a fabricated likeness of Angelica is never acceptable, while
generic AI-generated *scenery* is being used the way generic stock
photography would be. It is still not a picture of this city. Replace all
three with real local photography as soon as any exists — that is the
single highest-value photo upgrade left on the site.

Two items from the same source were deliberately **excluded**:

- A collage panel of fabricated Peachtree City wayfinding signs ("LAKE
  PEACHTREE", "SENOIA ROAD", "THE AVENUE"). Invented signage naming real
  roads reads as real municipal signage, which is a step beyond generic
  scenery.
- Every instance of the invented "Peachtree City" peach logo that appeared
  throughout the collage on signage, a tumbler, and golf carts. It is not
  the city's real mark, and applying a made-up civic logo would imply an
  affiliation that does not exist. All three images in use were cropped so
  none of it survives.

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
None. Every image slot on the site is now filled — real photos of Angelica
throughout, and AI-generated scenery in the three Peachtree City slots
noted above.

`src/components/ui/PlaceholderImage.tsx` (the SVG artwork fallback) is
currently unused but kept for any future image slot added before real
photography exists.
