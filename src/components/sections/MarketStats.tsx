import { marketData } from "@/config/site";

export function MarketStats() {
  const data = marketData.peachtreeCity;
  const hasData =
    data.medianListPrice !== null ||
    data.medianSalePrice !== null ||
    data.daysOnMarket !== null ||
    data.inventory !== null;

  if (!hasData) return null;

  const stats = [
    { label: "Median list price", value: data.medianListPrice ? `$${data.medianListPrice.toLocaleString()}` : null },
    { label: "Median sale price", value: data.medianSalePrice ? `$${data.medianSalePrice.toLocaleString()}` : null },
    { label: "Median days on market", value: data.daysOnMarket ?? null },
    { label: "Active inventory", value: data.inventory ?? null },
  ].filter((stat) => stat.value !== null);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-canvas p-6">
            <p className="text-2xl font-semibold text-navy">{stat.value}</p>
            <p className="mt-1 text-sm text-slate">{stat.label}</p>
          </div>
        ))}
      </div>
      {data.sourceName && (
        <p className="mt-4 text-xs text-slate">
          Source: {data.sourceUrl ? (
            <a href={data.sourceUrl} className="underline" target="_blank" rel="noopener noreferrer">
              {data.sourceName}
            </a>
          ) : (
            data.sourceName
          )}
          {data.dataAsOf ? ` — as of ${data.dataAsOf}` : ""}
        </p>
      )}
    </div>
  );
}
