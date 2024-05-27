import GithubBasicInfo from "@/components/GithubBasicInfo";
import LinkedinBasicInfo from "@/components/LinkedinBasicInfo";
import DevCard from "@/components/cards/dev/DevCard";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import GitlabBasicInfo from "@/components/GitlabBasicInfo";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <div className="space-y-10 py-4 px-8">
        <GithubBasicInfo />
        <LinkedinBasicInfo />
        <GitlabBasicInfo />
        <Separator />
        <DevCard
          cardType={DevCardEnum.AllInOneCard}
          githubUsername={"MathPow"}
          gitlabUsername={"MathPow"}
          linkedinUsername={"MathPow"}
        />
      </div>
    </main>
  );
}
