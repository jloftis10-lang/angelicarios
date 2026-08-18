import { NextRequest, NextResponse } from "next/server";
import { agent } from "@/config/site";
import type { LeadPayload } from "@/lib/leadTypes";

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

  const summaryLines = [
    `New ${payload.intent} lead`,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    ...Object.entries(payload.values)
      .filter(([key]) => !["name", "email", "phone"].includes(key))
      .map(([key, value]) => `${key}: ${value}`),
  ].filter(Boolean);

  const resendApiKey = process.env.RESEND_API_KEY;
  const leadToEmail = process.env.LEAD_NOTIFICATION_EMAIL ?? (agent.email.startsWith("[") ? null : agent.email);

  if (!resendApiKey || !leadToEmail) {
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
        from: process.env.LEAD_FROM_EMAIL ?? "Angelica Rios Website <leads@resend.dev>",
        to: leadToEmail,
        reply_to: email,
        subject: `New ${payload.intent} lead — ${name}`,
        text: summaryLines.join("\n"),
      }),
    });

    if (!response.ok) {
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
