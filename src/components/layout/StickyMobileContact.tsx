"use client";

import { agent, contact } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileContact() {
  if (agent.phone.startsWith("[")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-sand/60 bg-warm-white/95 backdrop-blur md:hidden">
      <a
        href={contact.phoneHref}
        onClick={() => trackEvent("phone_click", { location: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-navy"
      >
        Call {agent.firstName}
      </a>
      <div className="w-px bg-sand/60" />
      <a
        href={contact.smsHref}
        onClick={() => trackEvent("text_click", { location: "sticky_bar" })}
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-navy"
      >
        Text {agent.firstName}
      </a>
    </div>
  );
}
