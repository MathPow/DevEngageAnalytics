import BackgroundGradient from "@/components/deco/BackgroundGradient";
import DocPage from "@/components/docs/DocPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ContentProps {
  params: {
    slug: string;
  };
}

const validSlugs = [
  "appstructure",
  "commonlyusedcomponents",
  "firstpullrequest",
  "i18n",
  "kanban",
  "contributors",
  "primarygoal",
  "standard",
  "writingdocs",
  "definitionofdone",
];

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ContentProps): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Page - ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
  };
}

export default function Page({ params }: ContentProps) {
  const { slug } = params;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <main>
      <BackgroundGradient text="contribution" isFixed />
      <DocPage slug={slug} url={"/contribution/"} />
    </main>
  );
}
