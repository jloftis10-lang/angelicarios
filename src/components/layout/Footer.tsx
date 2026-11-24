import Link from "next/link";
import { footerNav, primaryNav } from "@/config/navigation";
import { agent, brand, brokerage, brokerageWebsiteLabel, contact, serviceAreas, social } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/TrackedLink";
import { Logo } from "@/components/brand/Logo";

const socialLinks = [
  { label: "Instagram", href: social.instagram },
  { label: "Facebook", href: social.facebook },
  { label: "LinkedIn", href: social.linkedin },
].filter((link) => !link.href.startsWith("["));

export function Footer() {
  const hasPhone = !agent.phone.startsWith("[");
  const hasEmail = !agent.email.startsWith("[");
  const hasBrokerage = !brokerage.legalName.startsWith("[");
  const hasBrokerageLicense = !brokerage.licenseNumber.startsWith("[");
  const hasBrokeragePhone = !brokerage.officePhone.startsWith("[");
  const hasBrokerageSite = !brokerage.website.startsWith("[");

  return (
    <footer className="mt-24 border-t border-sand/60 bg-canvas">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="stacked" className="items-start text-left" />
          {(hasBrokerageSite || hasBrokeragePhone) && (
            <div className="mt-2 flex flex-col items-start gap-1 text-sm">
              {hasBrokerageSite && (
                <a
                  href={brokerage.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy underline underline-offset-4 hover:text-navy-dark"
                >
                  {brokerageWebsiteLabel}
                </a>
              )}
              {/* Labelled "Office" because Angelica's own line appears further
                  down this same column — two bare numbers would be ambiguous. */}
              {hasBrokeragePhone && (
                <p className="text-ink">
                  Office{" "}
                  <a href={`tel:${brokerage.officePhone}`} className="hover:text-navy">
                    {brokerage.officePhone}
                  </a>
                </p>
              )}
            </div>
          )}
          <p className="mt-4 max-w-sm text-sm text-slate">
            Serving {serviceAreas.primary} and {serviceAreas.secondary}.
          </p>
          {(hasPhone || hasEmail) && (
            <div className="mt-4 flex flex-col gap-1 text-sm text-ink">
              {hasPhone && (
                <p>
                  Cell{" "}
                  <TrackedLink href={contact.phoneHref} event="phone_click" params={{ location: "footer" }} className="hover:text-navy">
                    {agent.phone}
                  </TrackedLink>
                </p>
              )}
              {hasEmail && (
                <a href={contact.emailHref} className="hover:text-navy">
                  {agent.email}
                </a>
              )}
            </div>
          )}
          {socialLinks.length > 0 && (
            <div className="mt-4 flex gap-4 text-sm text-slate">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-navy" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">Explore</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate">Site</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink hover:text-navy">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-sand/60">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate">
          {/* Line 1 carries the part Georgia actually requires of an
              affiliated licensee's advertising: the firm's name and its
              telephone number. The brokerage mark is not repeated here —
              the stacked lockup at the top of this footer already has it. */}
          <p>
            {agent.fullName}, {agent.title}
            {hasBrokerage ? ` · ${brokerage.legalName}` : ""}
            {hasBrokerageLicense ? ` · License ${brokerage.licenseNumber}` : ""}
            {hasBrokeragePhone ? ` · ${brokerage.officePhone}` : ""}
          </p>
          {hasBrokerage && !brokerage.address.startsWith("[") && <p>{brokerage.address}</p>}
          {/* "Information deemed reliable but not guaranteed" used to sit
              here. It is MLS/IDX language for disclaiming listing data, and
              this site displays none — no IDX search, no listings, and the
              market-stats block renders nothing while its data is null. It
              disclaimed nothing, so it was removed. Put it back if and when
              real listing or market data appears on the site. */}
          <p className="text-slate">
            Equal Housing Opportunity · © {new Date().getFullYear()} {brand.name}
          </p>
        </Container>
      </div>
    </footer>
  );
}
