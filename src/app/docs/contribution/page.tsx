import { linkListContribution } from "@/lib/content/LinkListEnum";
import { redirect } from "next/navigation";
import { formatSlug } from "@/lib/composables/formatSlug";

export default function Home() {
  redirect(`/docs/contribution/${formatSlug(linkListContribution[0])}`);
}
