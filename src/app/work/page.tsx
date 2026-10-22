import { Footer } from "@/components/footer";
import { ArrowIcon } from "@/components/icons";
import { Nav } from "@/components/nav";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product work by Yatish Joshi — Learn Linker and ERP & SaaS platforms.",
};

export default function WorkIndexPage() {
  return (
    <>
      <Nav initialOnHero={false} />
      <main className="bg-paper px-5 pb-24 pt-32 sm:px-8">
        <div className="mx-auto max-w-[76rem]">
          <p className="eyebrow text-muted">Work</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">
            Selected products.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            A role-based learning platform, and the ERP and SaaS systems shipped at
            Express Solution Labs.
          </p>
          <div className="mt-12 grid gap-6">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="grid items-start overflow-hidden rounded-[1.8rem] border border-ink/10 bg-foam md:grid-cols-[0.8fr_1.2fr]"
              >
                <Link href={`/work/${project.slug}`} className="block">
                  <ProjectVisual
                    title={project.title}
                    image={project.image}
                  />
                </Link>
                <div className="flex flex-col p-7 sm:p-10">
                  <p className="eyebrow text-muted">{project.eyebrow}</p>
                  <h2 className="mt-2 font-serif text-4xl font-semibold tracking-tight">{project.title}</h2>
                  <p className="mt-2 text-ink/60">{project.place}</p>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink/80">{project.summary}</p>
                  <Link href={`/work/${project.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold">
                    Read the case study
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
