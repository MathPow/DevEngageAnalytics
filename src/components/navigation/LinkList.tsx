import { formatSlug } from "@/lib/composables/formatSlug";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkListProps {
  list: string[];
  url: string;
}

export default function LinkList({ list, url }: LinkListProps) {
  const pathname = usePathname();

  return (
    <>
      {list.map((el, index) => (
        <Link
          key={index}
          className={`hover:underline ${pathname.includes(formatSlug(el)) ? "font-semibold text-black dark:font-normal dark:text-white" : ""}`}
          href={`${url}${formatSlug(el)}`}
        >
          {el}
        </Link>
      ))}
    </>
  );
}
