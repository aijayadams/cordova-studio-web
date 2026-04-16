import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllStagingSlugs,
  getStagingProject,
} from "@/data/staging";
import StagingGallery from "@/components/StagingGallery";

export function generateStaticParams() {
  return getAllStagingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getStagingProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} ${project.subtitle} — Cordova Studio`,
    description: `${project.title} staging services for a ${project.subtitle}.`,
  };
}

export default async function StagingProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getStagingProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-charcoal px-6 pb-16 pt-32 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#staging"
            className="text-[10px] uppercase tracking-[0.25em] text-warm-white/50 transition-colors hover:text-accent"
          >
            Back to Staging Services
          </Link>
          <h1 className="mt-10 font-serif text-5xl leading-tight text-warm-white md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm font-light uppercase tracking-[0.28em] text-accent">
            {project.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <StagingGallery project={project} />
        </div>
      </section>
    </>
  );
}
