# Photography needed

No AI-generated images of Angelica and no stock photography standing in
for her likeness — every placeholder in the site is a plain gradient card
labeled with what's missing (`src/components/ui/PlaceholderImage.tsx`), not
a fake photo. Drop real files in here (or `src/assets/`, matching whatever
convention the deployed image pipeline uses) and swap the corresponding
`<PlaceholderImage>` for a real `<Image>` using the same wrapper
className/aspect ratio.

## Priority order

1. **Angelica — professional portrait.** Used in the homepage hero and
   About page. Needs a vertical (4:5) crop at minimum.
2. **Angelica — casual / local lifestyle.** Homepage "Meet Angelica"
   section and Relocate page.
3. **Peachtree City multi-use paths.** Homepage "Why Peachtree City"
   section and the Peachtree City page's "Getting Around" section.
4. **Peachtree City lakes.**
5. **Golf-cart lifestyle.** Peachtree City page, "Getting Around."
6. **Residential streets / homes** (generic, not a specific listing).
7. **Natural local scenery.**
8. **Dog-related image** — only if it's an authentic photo of Angelica's
   own dog; skip otherwise rather than substituting a stock pet photo.

## Where placeholders currently render

- `src/app/page.tsx` (homepage) — hero portrait, Peachtree City lifestyle,
  Angelica casual photo
- `src/app/relocate/page.tsx` — Angelica relocation-story photo
- `src/app/about/page.tsx` — Angelica professional portrait
- `src/app/peachtree-city-ga/page.tsx` — golf-cart / path photo
