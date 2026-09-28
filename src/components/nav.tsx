"use client";

import { nav, profile } from "@/lib/data";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Mark } from "./icons";

export function Nav() {
  const [onHero, setOnHero] = useState(true);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting && entry.intersectionRatio > 0.45),
      { threshold: [0, 0.45, 1] },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const light = onHero && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-300 ${
        light ? "text-paper" : "border-b border-ink/10 bg-paper/85 text-ink backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[76rem] items-center justify-between px-5 sm:px-8">
        <Link href="/#top" className="flex items-center gap-2 font-serif text-lg tracking-tight">
          <Mark />
          <span>Yatish Joshi</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-underline">
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              light ? "bg-accent text-ink" : "bg-ink text-paper"
            }`}
          >
            Resume
          </a>
        </nav>
        <button
          type="button"
          className="relative z-[70] rounded-full border border-current/20 px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="fixed inset-0 z-[65] flex flex-col bg-paper px-6 pb-10 pt-8 text-ink md:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-4 font-serif text-4xl"
              >
                {item.label}
              </Link>
            ))}
            <a href={profile.resume} className="mt-8 inline-flex w-fit rounded-full bg-accent px-5 py-3 font-semibold text-ink">
              Resume
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
