"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LeadForm } from "@/components/forms/LeadForm";
import { readinessQuestions, stageFor } from "@/config/mortgageReadiness";

type Answers = Record<string, string>;

export function MortgageReadiness() {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // The questions are taller than the viewport, so without this the result
  // renders above the fold the visitor is currently looking at and reads as
  // nothing having happened. Focus moves too, so it isn't only a sighted fix.
  useEffect(() => {
    if (!submitted) return;
    const node = resultRef.current;
    if (!node) return;
    node.scrollIntoView({ block: "start" });
    node.focus({ preventScroll: true });
  }, [submitted]);

  const answeredCount = Object.keys(answers).length;
  const total = readinessQuestions.length;
  const allAnswered = answeredCount === total;

  const { points, guidance } = useMemo(() => {
    let points = 0;
    const guidance: string[] = [];
    for (const question of readinessQuestions) {
      const option = question.options.find((o) => o.value === answers[question.id]);
      if (!option) continue;
      points += option.points;
      if (option.guidance) guidance.push(option.guidance);
    }
    return { points, guidance };
  }, [answers]);

  const stage = stageFor(points);

  /** Plain-text transcript so Angelica sees the same picture the visitor did. */
  const summaryForAngelica = useMemo(
    () =>
      readinessQuestions
        .map((q) => {
          const chosen = q.options.find((o) => o.value === answers[q.id]);
          return chosen ? `${q.question} → ${chosen.label}` : null;
        })
        .filter(Boolean)
        .join("\n"),
    [answers],
  );

  if (submitted) {
    return (
      <section className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <div ref={resultRef} tabIndex={-1} className="scroll-mt-24 outline-none" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Where you stand</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">{stage.label}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate">{stage.summary}</p>

          {guidance.length > 0 && (
            <>
              <h3 className="mt-10 font-display text-xl font-semibold text-navy">What to do next</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {guidance.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-sand/60 bg-white p-5 text-sm leading-relaxed text-slate"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p className="mt-8 rounded-2xl bg-canvas p-5 text-sm leading-relaxed text-slate">
            This is preparation guidance, not a lending decision. Only a licensed lender can prequalify or preapprove
            you, and only they can tell you what you qualify for. Angelica is a Realtor — what she can do is make sure
            you walk into that conversation with everything in hand.
          </p>

          <div className="mt-10 rounded-2xl border border-sand/60 bg-white p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-navy">Want Angelica to look at this with you?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              Send your answers over and she&apos;ll come back with the specific next steps for your situation — and,
              if it would help, an introduction to a lender who can take it from there.
            </p>
            <div className="mt-6">
              <LeadForm
                intent="financing"
                submitLabel="Send My Answers"
                successMessage="Angelica will review your answers and follow up personally."
                extraValues={{ readinessStage: stage.label, readinessAnswers: summaryForAngelica }}
                fields={[
                  { name: "name", label: "Name", type: "text", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  {
                    name: "timeline",
                    label: "When are you hoping to buy?",
                    type: "select",
                    options: ["Just exploring", "0–3 months", "3–6 months", "6–12 months", "More than a year"],
                  },
                  {
                    name: "message",
                    label: "Anything you'd like to add?",
                    type: "textarea",
                    hint: "Please don't include account numbers, your Social Security number, or exact balances — none of that is needed here.",
                  },
                ]}
              />
            </div>
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
    );
  }

  return (
    <section className="py-12 md:py-16">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage">Readiness check</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-navy md:text-4xl">
          How ready are you for a lender conversation?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate">
          Six questions, about a minute. Nothing is sent anywhere unless you choose to send it, and none of it asks for
          a number — no income, no balances, no Social Security number.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {readinessQuestions.map((question, index) => (
            <fieldset key={question.id} className="rounded-2xl border border-sand/60 bg-white p-6">
              <legend className="px-2 text-xs font-semibold uppercase tracking-wide text-sage">
                Question {index + 1} of {total}
              </legend>
              <p className="font-display text-lg font-semibold text-navy">{question.question}</p>
              {question.help && <p className="mt-1.5 text-sm leading-relaxed text-slate">{question.help}</p>}
              <div className="mt-4 flex flex-col gap-2">
                {question.options.map((option) => {
                  const checked = answers[question.id] === option.value;
                  return (
                    <label
                      key={option.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-sm transition-colors ${
                        checked ? "border-navy bg-canvas text-ink" : "border-sand/70 text-slate hover:bg-canvas"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={checked}
                        onChange={() => setAnswers((prev) => ({ ...prev, [question.id]: option.value }))}
                        className="mt-0.5 accent-[#193247]"
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-warm-white transition-colors hover:bg-navy-dark disabled:opacity-50"
          >
            See Where I Stand
          </button>
          <p aria-live="polite" className="text-sm text-slate">
            {allAnswered ? "All set." : `${answeredCount} of ${total} answered`}
          </p>
        </div>
      </Container>
    </section>
  );
}
