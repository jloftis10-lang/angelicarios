# Photography

No AI-generated images of Angelica and no stock photography standing in
for her likeness — remaining placeholders are plain gradient cards labeled
with what's missing (`src/components/ui/PlaceholderImage.tsx`), never a
fake photo. Drop real files in `src/assets/images/` and swap the
corresponding `<PlaceholderImage>` for a `<PortraitImage>` (see
`src/components/ui/PortraitImage.tsx`) using the same wrapper
className/aspect ratio.

## In place

- **`src/assets/images/angelica-portrait.jpg`** — a real, current photo of
  Angelica (candid, warm restaurant lighting), used on the homepage hero
  and the About page. It's a phone photo, not a studio headshot — swap for
  a professional portrait when one exists, but this is real and current,
  not a placeholder.
- One additional recent photo from Drive ("angelicaJim") was reviewed and
  intentionally **not** used — a casual selfie with an unidentified second
  person in a sports-bar setting, inconsistent with the site's editorial
  tone and not something to publish without confirming who's in it and
  whether that's appropriate for the site.

## Still needed

1. **Angelica — casual / local lifestyle.** Homepage "Meet Angelica"
   section and Relocate page. Something separate from the hero/About
   portrait so the same image isn't repeated across the site.
2. **Peachtree City multi-use paths.** Homepage "Why Peachtree City"
   section and the Peachtree City page's "Getting Around" section.
3. **Peachtree City lakes.**
4. **Golf-cart lifestyle.** Peachtree City page, "Getting Around."
5. **Residential streets / homes** (generic, not a specific listing).
6. **Natural local scenery.**
7. **Dog-related image** — only if it's an authentic photo of Angelica's
   own dog; skip otherwise rather than substituting a stock pet photo.
8. **Professional headshot** (optional upgrade) — the current portrait
   works for V1 but a studio/professionally-lit headshot would read more
   polished for the hero specifically.

## Where placeholders currently render

- `src/app/page.tsx` (homepage) — Peachtree City lifestyle photo, Angelica
  casual/lifestyle photo (hero now uses the real portrait)
- `src/app/relocate/page.tsx` — Angelica relocation-story photo
- `src/app/peachtree-city-ga/page.tsx` — golf-cart / path photo
