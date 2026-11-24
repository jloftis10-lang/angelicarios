# Branding

## The logo is the brokerage's

Angelica does **not** carry a separate personal logo. The mark on this site
is **DeGolian Realty's**, with her name as the wordmark beside it.

That is the normal arrangement: most brokerages require their branding to be
primary and many prohibit a competing agent mark outright. An earlier "AR"
monogram was built for this site and has been removed — do not reintroduce a
personal mark without DeGolian's written sign-off.

### Rules for the brokerage mark

`src/assets/images/degolian-realty.png`, rendered through `<BrokerageMark>`
in `src/components/brand/Logo.tsx`:

- **Never recolor it.** Its cyan sits outside this site's navy/sage/peach
  palette and that is fine — a broker's logo is their asset, and recoloring
  it to match a palette breaches most brand guidelines.
- **Never crop it** to just the floral element, and never rebuild it as
  inline SVG. Without DeGolian's guidelines there is no sanctioned icon-only
  variant, so the complete lockup is the only safe form.
- It is decorative in markup (`alt=""`, `aria-hidden`); the accessible name
  comes from the adjacent wordmark and the link's `aria-label`.

### Lockups

| Export | Shape | Used in |
| --- | --- | --- |
| `<BrokerageMark />` | the brokerage logo alone | tight spaces |
| `<Logo variant="horizontal" />` | mark, rule, name, "Realtor · DeGolian Realty" | site header |
| `<Logo variant="stacked" />` | mark over name, peach divider, affiliation | site footer |

## The peach is not a logo

`<PeachMark>` / `<PeachOrnament>` is a Georgia and Peachtree City motif used
as a section divider (`BrandRule`) and on the closing CTA. It is decoration,
rather than a personal identity mark, so it survived the move to brokerage
branding.

## Still to decide

The favicon and app icons still carry the retired personal mark. Whether
they should become DeGolian's is a question for the broker — a brokerage
favicon on an agent's own domain is a judgement call, not an obvious yes.
