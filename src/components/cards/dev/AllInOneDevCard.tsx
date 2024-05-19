"use client";

import { GithubUserInfo } from "@/lib/types/githubInfo";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { githubUserInfoMock } from "@/tests/mocks/GithubUserInfoMock";
import { Header, Bio, Footer, Experience, GitStats, GitGraph } from "../components/allInOneDevCard/index";
import { useState } from "react";
import { Certificate, Experience as ExperienceType } from "@/lib/types/experienceType";
import { Project } from "@/lib/types/projectType";
import { GraphCube } from "@/lib/types/graphCubeType";
import { GitlabUserInfo } from "@/lib/types/gitlabInfo";

interface AllInOneDevCardProps {
  githubData: GithubUserInfo;
  gitlabData: GitlabUserInfo;
  linkedinData: LinkedinUserInfo;
}

export default function AllInOneDevCard({ githubData, gitlabData, linkedinData }: AllInOneDevCardProps) {
  const certificationMock: Certificate[] = [
    {
      title: "Scrum Master (PSM1)",
      issuedDate: new Date("2024-04-18"),
      compagnyName: "scrum.org",
    },
    {
      title: "SAFe",
      issuedDate: new Date("2023-12-27"),
    },
  ];

  const experienceMock: ExperienceType[] = [
    {
      title: "Développeur web",
      startDate: new Date("2024-03-01"),
      compagnyName: "Doyons Després",
    },
    {
      title: "Développeur front-end",
      startDate: new Date("2023-06-01"),
      endDate: new Date("2023-08-01"),
      compagnyName: "Desjardins",
    },
    {
      title: "Technicien",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-08-01"),
      compagnyName: "Desjardins",
    },
  ];

  const projectInvolvementMock: Project[] = [
    {
      title: "MakeRead.me",
      contributions: 12,
      isRepoFromUser: false,
    },
    {
      title: "Linux",
      contributions: 6,
      isRepoFromUser: false,
    },
    {
      title: "StoryBook",
      contributions: 16,
      isRepoFromUser: false,
    },
    {
      title: "DevEngageAnalytics",
      contributions: 69,
      isRepoFromUser: true,
    },
    {
      title: "Other repo",
      contributions: 3,
      isRepoFromUser: false,
    },
  ];

  const graphCubesMock: GraphCube[] = [
    {
      date: new Date("2024-05-14"),
      count: 5,
    },
    {
      date: new Date("2024-05-13"),
      count: 2,
    },
    {
      date: new Date("2024-05-12"),
      count: 1,
    },
    {
      date: new Date("2024-05-02"),
      count: 12,
    },
    {
      date: new Date("2024-04-12"),
      count: 4,
    },
    {
      date: new Date("2024-01-15"),
      count: 2,
    },
    {
      date: new Date("2023-05-01"),
      count: 25,
    },
    {
      date: new Date("2023-05-02"),
      count: 5,
    },
  ];

  const [isFirstPage, setIsFirstPage] = useState(true);

  function togglePage() {
    setIsFirstPage(!isFirstPage);
  }

  return (
    <section className="flex gap-x-8 text-white">
      <div className="h-[500px] w-[375px] bg-_bgDarkGray rounded-3xl drop-shadow-xl">
        <div className="relative h-full">
          {isFirstPage ? (
            <>
              <Header
                className="px-8"
                avatarUrl={githubUserInfoMock.avatar_url}
                bannerUrl={
                  "https://fastly.picsum.photos/id/231/536/354.jpg?hmac=rzzjS1LwokUdh0RKK9P-8WUAnkfF_ppdelKppggUUmk"
                }
                followers={githubUserInfoMock.followers}
                following={githubUserInfoMock.following}
                connections={72}
              />
              <Bio
                className="mt-11 mx-8"
                name={githubUserInfoMock.name}
                alias={githubUserInfoMock.login}
                description={githubUserInfoMock.bio}
              />
              <Experience className="px-8 mt-2" experience={experienceMock} certification={certificationMock} />
              <Footer
                className="absolute w-full px-8 bottom-3"
                githubUrl="https://github.com/MathPow"
                linkedinUrl="https://www.linkedin.com/in/mathys-deshaies/"
                togglePage={togglePage}
                isFirstPage={isFirstPage}
              />
            </>
          ) : (
            <>
              <div className="flex">
                <GitGraph isVertical className="pl-8 pt-4 w-40" graphCubes={graphCubesMock} />
                <GitStats
                  className="flex-1 pr-8 pt-4"
                  pullRequests={15}
                  commits={101}
                  comments={23}
                  openedIssues={6}
                  projectInvolvement={projectInvolvementMock}
                  totalStarsEarned={32}
                  totalRepositories={24}
                  githubContributionPercentage={87}
                  gitlabContributionPercentage={23}
                />
              </div>
              <Footer
                className="absolute w-full px-8 bottom-3"
                githubUrl="https://github.com/MathPow"
                linkedinUrl="https://www.linkedin.com/in/mathys-deshaies/"
                togglePage={togglePage}
                githubJoinedDate={new Date(githubData.created_at)}
                isFirstPage={isFirstPage}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
