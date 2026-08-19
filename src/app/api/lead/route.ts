import { NextRequest, NextResponse } from "next/server";
import { agent } from "@/config/site";
import type { LeadPayload } from "@/lib/leadTypes";

const INTENT_LABEL: Record<string, string> = {
  buyer: "Buyer",
  seller: "Seller",
  relocation: "Relocation",
  investor: "Investor",
  contact: "Contact",
  guide: "Guide",
  "area-match": "Area Match",
};

/** Turn camelCase field names into something readable in an email. */
function humanize(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill every field, real visitors never see or fill this one.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.intent || !payload.values || typeof payload.values !== "object") {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { name, email, phone } = payload.values;
  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const intentLabel = INTENT_LABEL[payload.intent] ?? payload.intent;

  const detailLines = Object.entries(payload.values)
    .filter(([key, value]) => !["name", "email", "phone"].includes(key) && value)
    .map(([key, value]) => `${humanize(key)}: ${value}`);

  const attributionLines = Object.entries(payload.attribution ?? {})
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${humanize(key)}: ${value}`);

  const summaryLines = [
    `New ${intentLabel.toLowerCase()} lead from angelicarios.com`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    detailLines.length ? ["", "— Details —", ...detailLines].join("\n") : null,
    attributionLines.length ? ["", "— Where this came from —", ...attributionLines].join("\n") : null,
    "",
    "Reply directly to this email to reach the sender.",
  ].filter(Boolean);

  const resendApiKey = process.env.RESEND_API_KEY;
  const leadToEmail = process.env.LEAD_NOTIFICATION_EMAIL ?? (agent.email.startsWith("[") ? null : agent.email);

  if (!resendApiKey || !leadToEmail) {
    // Never report success we can't back up — the form surfaces Angelica's
    // direct contact details instead so the lead isn't silently lost.
    console.error("[api/lead] delivery is not configured", {
      hasResendKey: Boolean(resendApiKey),
      hasDestination: Boolean(leadToEmail),
      intent: payload.intent,
    });
    return NextResponse.json(
      { error: "Lead delivery is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Resend only accepts a sender on a domain you've verified, or its
        // shared test sender `onboarding@resend.dev`. Anything else (e.g.
        // a made-up address @resend.dev) is rejected. Once angelicarios.com
        // is verified in Resend, set LEAD_FROM_EMAIL to something like
        // "Angelica Rios Website <leads@angelicarios.com>".
        from: process.env.LEAD_FROM_EMAIL ?? "Angelica Rios Website <onboarding@resend.dev>",
        to: leadToEmail,
        reply_to: email,
        subject: `New ${intentLabel.toLowerCase()} lead — ${name}`,
        text: summaryLines.join("\n"),
      }),
    });

    if (!response.ok) {
      // Log status/body for diagnosis but never the API key.
      const detail = await response.text();
      console.error("[api/lead] Resend rejected delivery", response.status, detail);
      return NextResponse.json(
        { error: "We could not deliver your message. Please try again shortly." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[api/lead] failed to send email", error);
    return NextResponse.json(
      { error: "We could not deliver your message. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
