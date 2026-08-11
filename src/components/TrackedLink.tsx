"use client";

import { type ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export function TrackedLink({
  href,
  event,
  params,
  className,
  children,
}: {
  href: string;
  event: AnalyticsEvent;
  params?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent(event, params)}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
