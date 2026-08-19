import { agent } from "@/config/site";

/**
 * Editorial guidance written in Angelica's voice. Deliberately NOT styled
 * as a testimonial or a quoted statement — it is site copy that carries her
 * perspective, so it must never be mistaken for third-party praise or an
 * attributed verbatim quote. Use sparingly, only where it adds something a
 * neutral paragraph could not.
 */
export function AngelicasTake({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-2xl border-l-4 border-sage bg-canvas p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
        {agent.firstName}&apos;s take
      </p>
      <p className="mt-3 text-base leading-relaxed text-ink">{children}</p>
    </aside>
  );
}
