"use client";

import GithubBasicInfo from "@/components/GithubBasicInfo";
import LinkedinBasicInfo from "@/components/LinkedinBasicInfo";
import DevCard from "@/components/cards/dev/DevCard";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import Settings from "@/components/Settings";

export default function Home() {
  return (
    <main>
      <div className="space-y-10 py-4 px-8">
        <Settings />
        <GithubBasicInfo />
        <LinkedinBasicInfo />
        <DevCard
          cardType={DevCardEnum.AllInOneCard}
          githubUsername={"MathPow"}
          gitlabUsername={"MathPow"}
          linkednUsername={"MathPow"}
        />
      </div>
    </main>
  );
}
