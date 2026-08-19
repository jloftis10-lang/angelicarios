import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommunityPage, communityMetadata } from "@/components/sections/CommunityPage";
import { getCommunity } from "@/config/communities";

const SLUG = "fayetteville";

export const metadata: Metadata = communityMetadata(SLUG);

export default function Page() {
  const community = getCommunity(SLUG);
  if (!community) notFound();
  return <CommunityPage community={community} />;
}
