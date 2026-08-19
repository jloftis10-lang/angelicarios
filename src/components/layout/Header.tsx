"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { primaryNav, resourcesNav } from "@/config/navigation";
import { brand } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!resourcesOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setResourcesOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [resourcesOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/60 bg-warm-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label={`${brand.name} — home`} className="shrink-0">
          <Logo variant="horizontal" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}

          <div ref={resourcesRef} className="relative">
            <button
              type="button"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              onClick={() => setResourcesOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-navy"
            >
              Resources
              <ChevronDown />
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-72 rounded-2xl border border-sand/70 bg-white p-2 shadow-lg">
                {resourcesNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setResourcesOpen(false)}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-canvas"
                  >
                    <span className="block text-sm font-medium text-navy">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-slate">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
        <div id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-sand/60 bg-warm-white md:hidden">
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

            <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-wide text-slate">Resources</p>
            {resourcesNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-medium text-ink hover:bg-canvas"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Button href="/contact" variant="primary" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Talk With Angelica
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
