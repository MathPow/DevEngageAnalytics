import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackgroundGradient from "@/components/deco/BackgroundGradient";
import DocPage from "@/components/docs/DocPage";

interface ContentProps {
  params: {
    slug: string;
  };
}

const validSlugs = ["introduction", "installation", "darkmode", "languages", "figma"];

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
      <BackgroundGradient text="docs" isFixed />
      <DocPage slug={slug} url={"/"} />
    </main>
  );
}
