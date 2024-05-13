"use client";

import GithubBasicInfo from "@/components/GithubBasicInfo";
import LinkedinBasicInfo from "@/components/LinkedinBasicInfo";
import Settings from "@/components/Settings";

export default function Home() {
  return (
    <main>
      <div className="space-y-10 py-4 px-8">
        <Settings />
        <GithubBasicInfo />
        <LinkedinBasicInfo />
      </div>
    </main>
  );
}
