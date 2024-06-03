import { formatSlug } from "@/lib/composables/formatSlug";
import { linkListGettingStarted } from "@/lib/content/LinkListEnum";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/docs/${formatSlug(linkListGettingStarted[0])}`);
}
