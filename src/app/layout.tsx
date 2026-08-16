import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileContact } from "@/components/layout/StickyMobileContact";
import { ComplianceWarning } from "@/components/ComplianceWarning";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { siteUrl, brand, agent } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Peachtree City GA Realtor | ${brand.name}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Personal real-estate guidance for buyers, sellers, and people relocating to Peachtree City and South Metro Atlanta.",
  openGraph: {
    siteName: brand.name,
    type: "website",
  },
  alternates: {
    types: { "application/rss+xml": `${siteUrl}/rss.xml` },
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#193247",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const hasStickyContact = !agent.phone.startsWith("[");

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-warm-white text-ink antialiased">
        <ComplianceWarning />
        <AnalyticsScripts />
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-warm-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className={`flex-1 ${hasStickyContact ? "pb-16 md:pb-0" : ""}`}>
          {children}
        </main>
        <Footer />
        <StickyMobileContact />
      </body>
    </html>
  );
}
