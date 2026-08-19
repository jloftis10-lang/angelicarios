import { marketData } from "@/config/site";

/**
 * "Peachtree City Market Pulse".
 *
 * Renders nothing unless the data carries BOTH an as-of date and a named
 * source. That gate is deliberate: an undated or unsourced market
 * statistic on a real-estate site is a liability, not a feature. Partial
 * data is fine — individual null fields are simply omitted — but the
 * provenance is not optional.
 */
export function MarketStats() {
  const data = marketData.peachtreeCity;

  if (!data.dataAsOf || !data.sourceName) return null;

  const stats = [
    { label: "Median sale price", value: data.medianSalePrice ? `$${data.medianSalePrice.toLocaleString()}` : null },
    { label: "Median list price", value: data.medianListPrice ? `$${data.medianListPrice.toLocaleString()}` : null },
    { label: "Median days on market", value: data.daysOnMarket ?? null },
    { label: "Active inventory", value: data.inventory ?? null },
    { label: "New listings", value: data.newListings ?? null },
    { label: "Sale-to-list ratio", value: data.saleToListRatio ? `${data.saleToListRatio}%` : null },
    { label: "Year over year", value: data.yearOverYearChange ?? null },
  ].filter((stat) => stat.value !== null);

  if (stats.length === 0) return null;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-canvas p-6">
            <p className="text-2xl font-semibold text-navy">{stat.value}</p>
            <p className="mt-1 text-sm text-slate">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate">
        Source:{" "}
        {data.sourceUrl ? (
          <a href={data.sourceUrl} className="underline" target="_blank" rel="noopener noreferrer">
            {data.sourceName}
          </a>
        ) : (
          data.sourceName
        )}{" "}
        — as of {data.dataAsOf}. Figures describe the wider market and are not a valuation of any specific property.
      </p>
    </div>
  );
}
