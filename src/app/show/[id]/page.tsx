import ShowPage from "@/components/show/ShowPage";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  const ids = ["DevEngageAnalytics"];

  return ids.map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: id,
  };
}

export default async function Page() {
  return (
    <main>
      <ShowPage />
    </main>
  );
}
