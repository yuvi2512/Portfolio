import { skillGroups } from "@/lib/data";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-ink/10 bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[76rem] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-muted">04 — Skills</p>
            <h2 className="mt-4 font-serif text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
              The stack I ship with.
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink/70">
              Frontend, APIs, and the tools I use to keep the work precise.
            </p>
          </div>
        </Reveal>

        <div>
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 0.05}>
              <div className={`border-ink/15 py-8 ${groupIndex === 0 ? "" : "border-t"}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight">{group.label}</h3>
                  <p className="text-sm text-muted">{group.note}</p>
                </div>
                <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center justify-between border-b border-ink/10 py-3 text-lg transition-colors hover:text-ink"
                    >
                      <span>{item}</span>
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-stone transition-colors group-hover:bg-accent"
                        aria-hidden
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
