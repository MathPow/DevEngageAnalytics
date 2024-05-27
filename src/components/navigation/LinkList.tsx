"use client";

import { formatSlug } from "@/lib/composables/formatSlug";
import Link from "next/link";

interface LinkListProps {
  list: string[];
  url: string;
}

export default function LinkList({ list, url }: LinkListProps) {
  return (
    <>
      {list.map((item) => (
        <Link href={url + formatSlug(item)}>{item}</Link>
      ))}
    </>
  );
}
