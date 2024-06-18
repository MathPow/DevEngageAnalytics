import BackgroundGradient from "@/components/deco/BackgroundGradient";
import PlaygroundPage from "@/components/playground/PlaygroundPage";

export async function generateMetadata() {
  return {
    title: `Page - Playground`,
  };
}

export default function Home() {
  return (
    <main>
      <BackgroundGradient text="playground" isFixed isDoted />
      <PlaygroundPage />
    </main>
  );
}
