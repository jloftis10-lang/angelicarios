import { agent, brand, brokerage, serviceAreas, siteUrl, social } from "@/config/site";

export function JsonLd() {
  const isPlaceholder = (value: string) => value.startsWith("[");

  const sameAs = [social.instagram, social.facebook, social.linkedin].filter((url) => !isPlaceholder(url));

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: isPlaceholder(agent.lastName) ? undefined : agent.fullName,
    givenName: agent.firstName,
    jobTitle: agent.title,
    url: siteUrl,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    worksFor: isPlaceholder(brokerage.legalName)
      ? undefined
      : {
          "@type": "RealEstateAgent",
          name: brokerage.legalName,
        },
  };

  const realEstateAgent = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: brand.name,
    areaServed: [serviceAreas.primary, serviceAreas.secondary],
    url: siteUrl,
    telephone: isPlaceholder(agent.phone) ? undefined : agent.phone,
    email: isPlaceholder(agent.email) ? undefined : agent.email,
    sameAs: sameAs.length > 0 ? sameAs : undefined,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand.name,
    url: siteUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgent) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    </>
  );
}
