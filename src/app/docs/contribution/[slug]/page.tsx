import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ContentProps {
  params: {
    slug: string;
  };
}

const validSlugs = ["howtocontribute", "whowearelookingfor", "contributors"];

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
      <p>{slug}</p>
    </main>
  );
}
