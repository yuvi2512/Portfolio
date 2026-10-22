import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { ProjectVisual } from "./project-visual";
import { Reveal } from "./reveal";
import { Tilt } from "./tilt";

export function Work() {
  const featured = projects[0];
  const rest = projects.slice(1);
  if (!featured) return null;

  return (
    <section id="work" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[76rem]">
        <Reveal>
          <p className="eyebrow text-muted">03 — Work</p>
          <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            Selected products.
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <article className="grid items-start gap-8 lg:grid-cols-12">
            <Tilt className="lg:col-span-7">
              <Link href={`/work/${featured.slug}`} className="block overflow-hidden rounded-[1.8rem]">
                <ProjectVisual
                  title={featured.title}
                  image={featured.image}
                />
              </Link>
            </Tilt>
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="eyebrow text-muted">{featured.eyebrow}</p>
                <h3 className="mt-3 font-serif text-4xl font-semibold tracking-tight">{featured.title}</h3>
                <p className="mt-2 text-sm text-muted">{featured.place}</p>
                <p className="mt-5 text-lg leading-relaxed text-ink/80">{featured.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {featured.stack.map((item) => (
                    <li key={item} className="rounded-full border border-ink/15 px-3 py-1 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={`/work/${featured.slug}`} className="inline-flex items-center gap-2 font-semibold">
                  Read the case study
                  <ArrowIcon />
                </Link>
                {featured.live ? (
                  <a href={featured.live} target="_blank" rel="noreferrer" className="link-underline text-ink/70">
                    Live product
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6">
          {rest.map((project) => (
            <Reveal key={project.slug}>
              <article className="grid items-start overflow-hidden rounded-[1.8rem] border border-ink/10 bg-foam md:grid-cols-[0.72fr_1.28fr]">
                <Link href={`/work/${project.slug}`} className="block">
                  <ProjectVisual
                    title={project.title}
                    image={project.image}
                  />
                </Link>
                <div className="flex flex-col p-7 sm:p-8">
                  <p className="eyebrow text-muted">{project.eyebrow}</p>
                  <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.place}</p>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink/80">{project.summary}</p>
                  <Link href={`/work/${project.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold">
                    Read the case study
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
