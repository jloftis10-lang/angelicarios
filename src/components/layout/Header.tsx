"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/config/navigation";
import { brand } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/60 bg-warm-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="font-display text-lg font-semibold text-navy md:text-xl">
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Talk With Angelica
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-sand/60 bg-warm-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-canvas"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Talk With Angelica
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
