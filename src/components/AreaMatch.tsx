"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { areaMatchQuestions, type AreaKey } from "@/config/areaMatch";
import { communities } from "@/config/communities";

type Answers = Record<string, string>;

type Result = {
  key: AreaKey;
  score: number;
  reasons: string[];
};

function scoreAnswers(answers: Answers): Result[] {
  const scores = new Map<AreaKey, { score: number; reasons: string[] }>();

  for (const question of areaMatchQuestions) {
    const chosen = answers[question.id];
    if (!chosen) continue;
    const option = question.options.find((o) => o.value === chosen);
    if (!option) continue;

    for (const [area, points] of Object.entries(option.weights) as [AreaKey, number][]) {
      const current = scores.get(area) ?? { score: 0, reasons: [] };
      current.score += points;
      // Only attach a reason where the option actually made a strong push,
      // so the explanation stays honest rather than padded.
      if (option.reason && points >= 3 && !current.reasons.includes(option.reason)) {
        current.reasons.push(option.reason);
      }
      scores.set(area, current);
    }
  }

  return [...scores.entries()]
    .map(([key, v]) => ({ key, ...v }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .filter((r) => r.score > 0);
}

export function AreaMatch() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const total = areaMatchQuestions.length;
  const allAnswered = answeredCount === total;

  const results = useMemo(() => (submitted ? scoreAnswers(answers) : []), [submitted, answers]);

  const summaryForAngelica = useMemo(() => {
    return areaMatchQuestions
      .map((q) => {
        const chosen = q.options.find((o) => o.value === answers[q.id]);
        return chosen ? `${q.question} → ${chosen.label}` : null;
      })
      .filter(Boolean)
      .join("\n");
  }, [answers]);

  if (submitted) {
    return (
      <>
        <section className="py-12">
          <Container className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold text-navy">
              Areas worth exploring based on your priorities
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              This is a starting point, not a verdict — it reflects what you told us matters, nothing more. The right
              place still depends on specific homes, specific streets, and what you find when you actually visit.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {results.map((result, index) => {
                const community = communities.find((c) => c.slug === result.key);
                if (!community) return null;
                return (
                  <article key={result.key} className="rounded-2xl border border-sand/60 bg-white p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-sage">
                          {community.county}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-navy">{community.name}</h3>
                      </div>
                      <span className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate">
                        {index === 0 ? "Closest to your answers" : "Also worth a look"}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{community.summary}</p>
                    {result.reasons.length > 0 && (
                      <p className="mt-3 text-sm leading-relaxed text-ink">
                        <span className="font-medium">Why it came up: </span>
                        {result.reasons.join("; ")}.
                      </p>
                    )}
                    <Link
                      href={community.href}
                      className="mt-4 inline-block text-sm font-medium text-navy underline underline-offset-4"
                    >
                      Read the {community.name} guide
                    </Link>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setAnswers({});
              }}
              className="mt-8 text-sm font-medium text-navy underline underline-offset-4"
            >
              Start over
            </button>
          </Container>
        </section>

        <section className="py-12 md:py-20">
          <Container className="grid gap-10 rounded-3xl bg-canvas p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy">Send my preferences to Angelica</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                Your answers go with this message, so the first reply can be specific instead of generic — including
                where she thinks this tool got it wrong for your situation.
              </p>
            </div>
            <LeadForm
              intent="area-match"
              submitLabel="Send My Preferences"
              successMessage="Thanks — Angelica has your answers and will follow up personally."
              extraValues={{
                areaMatchAnswers: summaryForAngelica,
                areasSuggested: results
                  .map((r) => communities.find((c) => c.slug === r.key)?.name ?? r.key)
                  .join(", "),
              }}
              fields={[
                { name: "name", label: "Name", type: "text", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                {
                  name: "timeline",
                  label: "Timeline",
                  type: "select",
                  options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
                },
                { name: "message", label: "Anything else worth knowing?", type: "textarea" },
              ]}
            />
          </Container>
        </section>
      </>
    );
  }

  return (
    <section className="py-12">
      <Container className="max-w-2xl">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-slate">
          <span>
            {answeredCount} of {total} answered
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sand/50">
          <div
            className="h-full rounded-full bg-sage transition-all duration-300"
            style={{ width: `${(answeredCount / total) * 100}%` }}
          />
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {areaMatchQuestions.map((question, index) => (
            <fieldset key={question.id}>
              <legend className="font-display text-xl font-semibold text-navy">
                {index + 1}. {question.question}
              </legend>
              {question.help && <p className="mt-2 text-sm text-slate">{question.help}</p>}
              <div className="mt-4 flex flex-col gap-2">
                {question.options.map((option) => {
                  const id = `${question.id}-${option.value}`;
                  const checked = answers[question.id] === option.value;
                  return (
                    <label
                      key={option.value}
                      htmlFor={id}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                        checked
                          ? "border-navy bg-navy/5 text-ink"
                          : "border-sand bg-white text-slate hover:border-navy/40"
                      }`}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={checked}
                        onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option.value }))}
                        className="h-4 w-4 accent-[#193247]"
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <button
          type="button"
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
          className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-warm-white transition-colors hover:bg-navy-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {allAnswered ? "Show areas worth exploring" : `Answer all ${total} to continue`}
        </button>
      </Container>
    </section>
  );
}
