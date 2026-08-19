# Branding

## The logo

The AR + sage-sprig lockup is implemented as a **React component**
(`src/components/brand/Logo.tsx`), not as an image file. It is drawn with
inline SVG plus live text so it:

- stays sharp at any size and on any display density,
- costs no image request and almost no bytes,
- inherits the site's real design tokens (`--color-navy`, `--color-sage`,
  `--color-sand`) and the Newsreader display face, so a palette or type
  change carries into the logo automatically instead of stranding a stale
  PNG.

Two lockups are exported:

| Export | Shape | Used in |
| --- | --- | --- |
| `<BrandMonogram />` | AR mark alone | icon artwork, tight spaces |
| `<Logo variant="horizontal" />` | mark + wordmark + tagline, on one line | site header |
| `<Logo variant="stacked" />` | mark over wordmark, peach divider rule, tagline | site footer |

Every SVG in the component is `aria-hidden` — the mark is decorative, and
the accessible name comes from the surrounding link (`aria-label` on the
header's home link) or the visible text beside it. Don't add a `<title>` to
the SVG; it would double up the announcement.

### Provenance note

This is a faithful rebuild of the logo the client supplied, redrawn in the
site's own tokens and typeface rather than traced from the supplied raster.
It is intentionally very close to that design — the AR monogram, the sage
sprig woven through it, the small-caps wordmark, the peach-ornament divider
rule, and the "Peachtree City Realtor" tagline all match. If the original
vector artwork (AI/EPS/SVG) ever turns up, swapping it in is a
`Logo.tsx`-only change; nothing else in the codebase references logo
geometry.

## Icons

`src/app/favicon.ico`, `src/app/apple-icon.png`, `public/icon-192.png`, and
`public/icon-512.png` are all **generated from the same component** — the
monogram rendered in a real browser (so the letters are true Newsreader),
recolored cream-and-sage on navy, and exported at each size. Navy-field
artwork was chosen over cream-field because the hairline sprig disappears
against a light background at 16px.

`favicon.ico` must be saved in **RGBA** mode. Next.js's image pipeline
rejects an ICO whose embedded PNGs are RGB ("The PNG is not in RGBA
format!") and the whole app then 500s, so this is not a cosmetic detail.

To regenerate after a logo change: render `<BrandMonogram>` at 512×512 on
`#193247` with the letters at `#faf8f4` and the sprig at `#9db3a4`, then
resize to 512/192/180 and write the ICO at 16/32/48 from an RGBA source.

## Open Graph images

`src/config/brandMark.ts` holds the monogram as an inlined base64 PNG
(~4.6 KB) for use inside `next/og` `ImageResponse` routes.

This indirection exists because satori, the renderer behind
`ImageResponse`, cannot rasterize SVG `<text>` — so the live component
can't be reused there — and reading a PNG off disk at render time is not
reliably traced into the serverless bundle. Inlining removes every failure
mode: no filesystem access, no font loading, no network fetch. The mark's
background is baked in as the OG navy so it composites seamlessly.

It's a generated file. Re-render and re-encode it if the logo changes;
don't hand-edit the base64.
