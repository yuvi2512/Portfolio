import { education } from "@/lib/data";
import { Reveal } from "./reveal";

export function Education() {
  return (
    <section id="education" className="bg-paper px-5 py-8 sm:px-8">
      <Reveal className="mx-auto flex max-w-[76rem] flex-col justify-between gap-6 rounded-[1.8rem] bg-ink px-8 py-10 text-paper sm:px-12 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-accent">05 — Education</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {education.degree}
          </h2>
          <p className="mt-3 text-lg text-paper/70">{education.school}</p>
        </div>
        <p className="font-serif text-3xl font-semibold text-accent">{education.dates}</p>
      </Reveal>
    </section>
  );
}
