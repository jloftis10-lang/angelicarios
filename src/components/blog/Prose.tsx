import { type ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl font-semibold text-navy first:mt-0">{children}</h2>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-slate">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-slate">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 pl-1">
      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sage" />
      <span>{children}</span>
    </li>
  );
}
