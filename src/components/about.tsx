import { profile } from "@/lib/data";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[76rem]">
        <Reveal>
          <p className="eyebrow text-muted">01 — About</p>
          <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            Product interfaces, built to stay fast.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink/80">{profile.summary}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-ink/80">
              Most of my time goes into role-based products, business workflows, and
              interfaces that stay maintainable when the system behind them is not.
              I care about state, API integration, and frontend architecture that
              still reads clearly a year later.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12}>
          <dl className="mt-14 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="eyebrow text-muted">Based</dt>
              <dd className="mt-2 font-serif text-3xl font-semibold tracking-tight">Indore</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Now</dt>
              <dd className="mt-2 font-serif text-3xl font-semibold tracking-tight">App Wizards</dd>
            </div>
            <div>
              <dt className="eyebrow text-muted">Study</dt>
              <dd className="mt-2 font-serif text-3xl font-semibold tracking-tight">MCA, Jaipur</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
