"use client";

import { GithubUserInfo } from "@/lib/types/githubInfo";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { githubUserInfoMock } from "@/tests/mocks/GithubUserInfoMock";
import Header from "../components/allInOneDevCard/Header";
import Bio from "../components/allInOneDevCard/Bio";

interface AllInOneDevCardProps {
  githubData: GithubUserInfo;
  gitlabData: string;
  linkedinData: LinkedinUserInfo;
}

export default function AllInOneDevCard({
  githubData,
  gitlabData,
  linkedinData,
}: AllInOneDevCardProps) {
  return (
    <section className="flex gap-x-8 text-white">
      <div className="h-[500px] w-[375px] bg-_bgDarkGray rounded-3xl drop-shadow-xl">
        <div className="relative">
          <Header
            avatarUrl={githubUserInfoMock.avatar_url}
            bannerUrl={
              "https://fastly.picsum.photos/id/231/536/354.jpg?hmac=rzzjS1LwokUdh0RKK9P-8WUAnkfF_ppdelKppggUUmk"
            }
            followers={githubUserInfoMock.followers}
            following={githubUserInfoMock.following}
            connections={72}
          />
          <Bio
            name={githubUserInfoMock.name}
            alias={githubUserInfoMock.login}
            description={githubUserInfoMock.bio}
          />
        </div>
      </div>
      <div className="h-[450px] w-[325px] bg-_bgDarkGray rounded-3xl drop-shadow-xl"></div>
    </section>
  );
}
