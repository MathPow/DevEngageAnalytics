import BackgroundGradient from "@/components/deco/BackgroundGradient";

export async function generateMetadata() {
  return {
    title: `Page - Playground`,
  };
}

export default function Home() {
  return (
    <main>
      <BackgroundGradient text="playground" isFixed />
    </main>
  );
}
