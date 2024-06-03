import DocSections from "@/components/docs/DocSections";
import DocContent from "@/components/docs/DocContent";
import DocNav from "@/components/navigation/DocNav";

interface DocPageProps {
  slug: string;
  url: string;
}

export default function DocPage({ slug, url }: DocPageProps) {
  return (
    <div className="flex flex-row gap-x-8 mx-[12vw] 2xl:mx-auto max-w-[1300px] mt-28">
      <div className="w-56 hidden sm:block">
        <DocNav />
      </div>
      <div className="w-full">
        <DocContent slug={slug} url={url} />
      </div>
      <div className="w-56 ml-10 hidden lg:block">
        <DocSections slug={slug} url={url} />
      </div>
    </div>
  );
}
