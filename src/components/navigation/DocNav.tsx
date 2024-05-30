import { linkListComponents, linkListContribution, linkListGettingStarted } from "@/lib/content/LinkListEnum";
import LinkList from "./LinkList";

export default function DocNav() {
  return (
    <>
      <h2 className="font-bold mb-3">Getting Started</h2>
      <span className="text-sm text-_darkGrayText dark:text-_lightGrayText flex flex-col gap-y-3">
        <LinkList list={linkListGettingStarted} url={"/docs/"} />
      </span>
      <h2 className="font-bold mt-4 mb-3">Components</h2>
      <span className="text-sm text-_darkGrayText dark:text-_lightGrayText flex flex-col gap-y-3">
        <LinkList list={linkListComponents} url={"/docs/components/"} />
      </span>
      <h2 className="font-bold mt-4 mb-3">Contribution</h2>
      <span className="text-sm text-_darkGrayText dark:text-_lightGrayText flex flex-col gap-y-3">
        <LinkList list={linkListContribution} url={"/docs/contribution/"} />
      </span>
    </>
  );
}
