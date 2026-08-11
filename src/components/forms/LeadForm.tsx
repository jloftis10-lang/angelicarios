"use client";

import { useState, type FormEvent } from "react";
import type { FormFieldConfig, LeadIntent } from "@/lib/leadTypes";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { contact } from "@/config/site";

const intentEvent: Record<LeadIntent, AnalyticsEvent | null> = {
  buyer: "buyer_lead",
  seller: "seller_lead",
  relocation: "relocation_lead",
  contact: "contact_form_submit",
  guide: "guide_signup",
};

export function LeadForm({
  intent,
  fields,
  submitLabel = "Send",
}: {
  intent: LeadIntent;
  fields: FormFieldConfig[];
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const values: Record<string, string> = {};
    fields.forEach((field) => {
      values[field.name] = String(formData.get(field.name) ?? "");
    });
    const website = String(formData.get("website") ?? "");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intent, values, website }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      const event_ = intentEvent[intent];
      if (event_) trackEvent(event_, { intent });
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-sage/40 bg-sage/10 p-6 text-ink">
        <p className="font-display text-lg font-semibold text-navy">Thank you — that&apos;s on its way.</p>
        <p className="mt-1 text-sm text-slate">Angelica will follow up personally as soon as she can.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot field — hidden from real visitors, bots fill it. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field blank</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label htmlFor={field.name} className="text-sm font-medium text-ink">
            {field.label}
            {field.required && <span className="text-slate"> *</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              placeholder={field.placeholder}
              rows={4}
              className="rounded-lg border border-sand bg-warm-white px-4 py-3 text-sm text-ink outline-none focus:border-navy"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              defaultValue=""
              className="rounded-lg border border-sand bg-warm-white px-4 py-3 text-sm text-ink outline-none focus:border-navy"
            >
              <option value="" disabled>
                Select…
              </option>
              {field.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className="rounded-lg border border-sand bg-warm-white px-4 py-3 text-sm text-ink outline-none focus:border-navy"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-warm-white transition-colors hover:bg-navy-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending that. Please try again, or email{" "}
          <a href={contact.emailHref} className="underline">
            directly
          </a>
          .
        </p>
      )}
    </form>
  );
}
