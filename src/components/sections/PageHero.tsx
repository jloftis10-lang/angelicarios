import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-3xl">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">{title}</h1>
        {copy && <p className="mt-5 text-base leading-relaxed text-slate">{copy}</p>}
        {children}
      </Container>
    </section>
  );
}
