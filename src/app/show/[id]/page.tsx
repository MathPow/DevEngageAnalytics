import ShowPage from "@/components/show/ShowPage";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return "DevEngageAnalytics";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: id,
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;
  console.log(id);
  return (
    <main>
      <ShowPage />
    </main>
  );
}
