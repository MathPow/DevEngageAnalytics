import { formatSlug } from "@/lib/composables/formatSlug";
import { linkListComponents } from "@/lib/content/LinkListEnum";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/docs/components/${formatSlug(linkListComponents[0])}`);
}
