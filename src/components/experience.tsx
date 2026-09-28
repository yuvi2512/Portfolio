import { experience } from "@/lib/data";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[76rem]">
        <Reveal>
          <p className="eyebrow text-accent">02 — Experience</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            Three roles. One continuous practice.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
            Frontend work in Indore since September 2023 — application UI, platform
            architecture, and the APIs those screens depend on.
          </p>
        </Reveal>

        <ol className="mt-16 divide-y divide-paper/10 border-y border-paper/10">
          {experience.map((job, index) => (
            <li key={job.company}>
              <Reveal delay={index * 0.05}>
                <article className="grid gap-6 py-10 md:grid-cols-[7rem_1fr] md:py-12">
                  <p className="font-serif text-3xl font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                          {job.role}
                        </h3>
                        <p className="mt-2 text-paper/65">
                          {job.company} · {job.place}
                        </p>
                      </div>
                      <p className="text-sm text-paper/55">{job.dates}</p>
                    </div>
                    {job.current ? (
                      <p className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                        Current
                      </p>
                    ) : null}
                    {"stat" in job && job.stat ? (
                      <p className="mt-6 font-serif text-5xl font-semibold text-accent">
                        {job.stat}
                        <span className="ml-3 align-middle font-sans text-base font-normal text-paper/70">
                          {job.statLabel}
                        </span>
                      </p>
                    ) : null}
                    <ul className="mt-6 space-y-3 text-[0.98rem] leading-relaxed text-paper/75">
                      {job.points.map((point) => (
                        <li key={point} className="grid grid-cols-[0.7rem_1fr] gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
