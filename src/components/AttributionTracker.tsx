"use client";

import { useEffect } from "react";
import { recordLandingPage } from "@/lib/attribution";

/** Records the first page of the visit so leads carry useful attribution. */
export function AttributionTracker() {
  useEffect(() => {
    recordLandingPage();
  }, []);

  return null;
}
