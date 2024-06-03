import DocSections from "@/components/docs/DocSections";
import DocContent from "@/components/docs/DocContent";
import DocNav from "@/components/navigation/DocNav";

interface DocPageProps {
  slug: string;
  url: string;
}

export default function DocPage({ slug, url }: DocPageProps) {
  return (
    <div className="mx-[12vw] mt-28 flex max-w-[1300px] flex-row gap-x-8 2xl:mx-auto">
      <div className="hidden w-56 sm:block">
        <DocNav />
      </div>
      <div className="w-full">{/* <DocContent slug={slug} url={url} /> */}</div>
      <div className="ml-10 hidden w-56 lg:block">
        <DocSections slug={slug} url={url} />
      </div>
    </div>
  );
}
