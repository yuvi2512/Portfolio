import { profile } from "@/lib/data";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { Terrain } from "./terrain";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper">
      <div className="studio-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Terrain />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink from-30% via-ink/80 to-transparent lg:via-ink/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[76rem] flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
        <p className="rise eyebrow text-accent">Software developer · Indore</p>
        <h1 className="rise rise-delay-1 mt-4 max-w-[12ch] font-serif text-[clamp(4rem,11vw,8.4rem)] leading-[0.86] font-semibold tracking-[-0.06em]">
          Yatish
          <span className="block">Joshi</span>
        </h1>
        <p className="rise rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
          I build responsive, scalable interfaces with React and Next.js. Architecture,
          performance, and screens that stay clear when the product gets complicated.
        </p>
        <div className="rise rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            View the work
            <ArrowIcon />
          </Link>
          <a
            href={profile.resume}
            className="inline-flex items-center rounded-full border border-paper/25 px-5 py-3 font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </a>
          <a href={profile.github} className="link-underline px-2 py-3 text-sm text-paper/70" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="link-underline px-2 py-3 text-sm text-paper/70" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <dl className="rise rise-delay-4 mt-12 grid max-w-3xl grid-cols-3 gap-4 border-t border-paper/15 pt-6 text-sm">
          <div>
            <dt className="text-paper/50">Years</dt>
            <dd className="mt-1 font-serif text-xl font-semibold leading-tight sm:text-2xl">3+</dd>
          </div>
          <div>
            <dt className="text-paper/50">Focus</dt>
            <dd className="mt-1 font-serif text-base font-semibold leading-tight sm:text-2xl">React & Next</dd>
          </div>
          <div>
            <dt className="text-paper/50">Now</dt>
            <dd className="mt-1 font-serif text-xl font-semibold leading-tight sm:text-2xl">App Wizards</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
