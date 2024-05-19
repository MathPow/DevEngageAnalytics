"use client";

import { getBasicGithubInformation } from "@/lib/services/githubService";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import { GithubUserInfo } from "@/lib/types/githubInfo";
import { useEffect, useMemo, useState } from "react";
import AllInOneDevCard from "./AllInOneDevCard";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { GitlabUserInfo } from "@/lib/types/gitlabInfo";

interface DevCardProps {
  cardType: DevCardEnum;
  githubUsername: string;
  gitlabUsername: string;
  linkedinUsername: string;
}

export default function DevCard({ cardType, githubUsername, gitlabUsername, linkedinUsername }: DevCardProps) {
  const [githubData, setGithubData] = useState<GithubUserInfo>();
  const [gitlabData, setGitlabData] = useState<GitlabUserInfo>();
  const [linkedinData, setLinkedinData] = useState<LinkedinUserInfo>();

  function handleBasicGithubInformation() {
    getBasicGithubInformation(githubUsername)
      .then((userData) => {
        if (userData) {
          setGithubData(userData);
        }
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }

  const isAllDataReady: boolean = useMemo(() => {
    // return (
    //   githubData !== undefined &&
    //   gitlabData !== undefined &&
    //   linkedinData !== undefined
    // );
    return true;
  }, [githubData, gitlabData, linkedinData]);

  useEffect(() => {
    handleBasicGithubInformation();
  }, []);

  return (
    <>
      {isAllDataReady && (
        <>
          {cardType === DevCardEnum.AllInOneCard && (
            <AllInOneDevCard
              githubData={githubData as GithubUserInfo}
              gitlabData={gitlabData as GitlabUserInfo}
              linkedinData={linkedinData as LinkedinUserInfo}
            />
          )}
        </>
      )}
    </>
  );
}
