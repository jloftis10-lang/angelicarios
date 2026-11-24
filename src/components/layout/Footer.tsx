import Link from "next/link";
import { footerNav, primaryNav } from "@/config/navigation";
import { agent, brand, brokerage, contact, serviceAreas, social } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { TrackedLink } from "@/components/TrackedLink";
import { Logo } from "@/components/brand/Logo";
import Image from "next/image";
import degolianRealty from "@/assets/images/degolian-realty.png";

const socialLinks = [
  { label: "Instagram", href: social.instagram },
  { label: "Facebook", href: social.facebook },
  { label: "LinkedIn", href: social.linkedin },
].filter((link) => !link.href.startsWith("["));

export function Footer() {
  const hasPhone = !agent.phone.startsWith("[");
  const hasEmail = !agent.email.startsWith("[");
  const hasLicense = !agent.licenseNumber.startsWith("[");
  const hasBrokerage = !brokerage.legalName.startsWith("[");
  const hasBrokerageLicense = !brokerage.licenseNumber.startsWith("[");
  const hasBrokeragePhone = !brokerage.officePhone.startsWith("[");

  return (
    <footer className="mt-24 border-t border-sand/60 bg-canvas">
      <Container className="grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="stacked" className="items-start text-left" />
          <p className="mt-4 max-w-sm text-sm text-slate">
            Serving {serviceAreas.primary} and {serviceAreas.secondary}.
          </p>
          {(hasPhone || hasEmail) && (
            <div className="mt-4 flex flex-col gap-1 text-sm text-ink">
              {hasPhone && (
                <TrackedLink href={contact.phoneHref} event="phone_click" params={{ location: "footer" }} className="hover:text-navy">
                  {agent.phone}
                </TrackedLink>
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
          <p>
            {agent.fullName}, {agent.title}
            {hasLicense ? ` — License ${agent.licenseNumber}` : ""}
          </p>
          {hasBrokerage && (
            <div className="mt-2 flex items-center gap-4">
              {/* The brokerage's own mark, used unaltered. Do not recolor it to
                  match this site's palette — a broker's logo is their asset and
                  their brand guidelines normally forbid changing it. */}
              <Image
                src={degolianRealty}
                alt={`${brokerage.legalName} logo`}
                width={148}
                height={110}
                sizes="88px"
                className="h-auto w-[88px] shrink-0"
              />
              <div className="flex flex-col gap-1">
                <p>
                  Angelica Rios is a licensed real-estate professional with {brokerage.legalName}.
                </p>
                {/* Only render the detail line once there is a licence or
                    phone to attach — otherwise it repeats the brokerage name
                    that the sentence above already carries. */}
                {(hasBrokerageLicense || hasBrokeragePhone) && (
                  <p>
                    {brokerage.legalName}
                    {hasBrokerageLicense ? ` — License ${brokerage.licenseNumber}` : ""}
                    {hasBrokeragePhone ? ` — ${brokerage.officePhone}` : ""}
                  </p>
                )}
                {!brokerage.address.startsWith("[") && <p>{brokerage.address}</p>}
              </div>
            </div>
          )}
          <p className="text-slate">
            Equal Housing Opportunity. Information deemed reliable but not guaranteed. © {new Date().getFullYear()} {brand.name}.
          </p>
        </Container>
      </div>
    </footer>
  );
}
