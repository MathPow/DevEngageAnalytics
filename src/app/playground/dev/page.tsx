import GithubBasicInfo from "@/components/GithubBasicInfo";
import LinkedinBasicInfo from "@/components/LinkedinBasicInfo";
import GitlabBasicInfo from "@/components/GitlabBasicInfo";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <div className="space-y-10 px-8 py-4">
        <GithubBasicInfo />
        <LinkedinBasicInfo />
        <GitlabBasicInfo />
        <Separator />
      </div>
    </main>
  );
}
