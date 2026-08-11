"use client";

import { useEffect } from "react";
import { isMissingComplianceInfo } from "@/config/site";

/**
 * Console-only notice (never rendered in the page) so nobody forgets this
 * site cannot go live until real brokerage/agent info replaces the
 * placeholders in src/config/site.ts. See docs/launch-checklist.md.
 */
export function ComplianceWarning() {
  useEffect(() => {
    if (isMissingComplianceInfo()) {
      // eslint-disable-next-line no-console
      console.warn(
        "[angelicarios] NOT READY FOR PUBLIC LAUNCH — brokerage/agent compliance information in src/config/site.ts is still a placeholder. See docs/launch-checklist.md.",
      );
    }
  }, []);

  return null;
}
