import { Footer } from "@/components/footer";
import { ArrowIcon } from "@/components/icons";
import { Nav } from "@/components/nav";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Nav />
      <main className="bg-paper pb-24">
        <article>
          <header className="px-5 pb-10 pt-32 sm:px-8">
            <div className="mx-auto max-w-[76rem]">
              <p className="text-sm text-ink/60">
                <Link href="/" className="link-underline">
                  Home
                </Link>
                <span aria-hidden> / </span>
                <Link href="/work" className="link-underline">
                  Work
                </Link>
              </p>
              <p className="eyebrow mt-8 text-muted">{project.eyebrow}</p>
              <h1 className="mt-3 max-w-4xl font-serif text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink/75">
                {project.summary}
              </p>
              <p className="mt-3 text-ink/55">{project.place}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-paper"
                  >
                    Open the live product
                    <ArrowIcon />
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-ink/15 px-5 py-3 font-semibold"
                  >
                    Source
                  </a>
                ) : null}
              </div>
            </div>
          </header>


          <div className="mx-auto mt-14 grid max-w-[76rem] gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_0.6fr]">
            <ol className="space-y-8">
              {project.points.map((point, pointIndex) => (
                <li key={point} className="grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-serif text-3xl font-semibold text-accent">
                    {String(pointIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-lg leading-relaxed text-ink/85">{point}</p>
                </li>
              ))}
            </ol>
            <aside className="h-fit rounded-[1.6rem] bg-ink p-6 text-paper lg:sticky lg:top-28">
              <p className="eyebrow text-accent">Stack</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item} className="rounded-full bg-paper/10 px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </article>

        {next && next.slug !== project.slug ? (
          <div className="mx-auto mt-20 max-w-[76rem] px-5 sm:px-8">
            <Link
              href={`/work/${next.slug}`}
              className="flex items-end justify-between gap-6 border-t border-ink/10 pt-8"
            >
              <span>
                <span className="eyebrow text-muted">Next</span>
                <span className="mt-2 block font-serif text-4xl font-semibold tracking-tight">{next.title}</span>
              </span>
              <ArrowIcon className="mb-2 h-6 w-6" />
            </Link>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
