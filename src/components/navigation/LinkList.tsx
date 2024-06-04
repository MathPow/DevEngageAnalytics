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
      {list.map((item, index) => (
        <Link
          key={index}
          className={`hover:underline ${pathname.includes(formatSlug(item)) ? "text-white" : ""}`}
          href={`${url}${formatSlug(item)}`}
        >
          {item}
        </Link>
      ))}
    </>
  );
}
