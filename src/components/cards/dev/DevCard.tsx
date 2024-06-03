"use client";

import { getBasicGithubInformation } from "@/lib/services/githubService";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import { GithubUserInfo } from "@/lib/types/githubInfo";
import { useEffect, useMemo, useState, useCallback } from "react";
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

  const handleBasicGithubInformation = useCallback(() => {
    getBasicGithubInformation(githubUsername)
      .then((userData) => {
        if (userData) {
          setGithubData(userData);
        }
      })
      .catch((error) => {
        console.error("Error fetching user information:", error);
      });
  }, [githubUsername]);

  // const isAllDataReady: boolean = useMemo(() => {
  //   return (
  //     githubData !== undefined &&
  //     gitlabData !== undefined &&
  //     linkedinData !== undefined
  //   );
  // }, [githubData, gitlabData, linkedinData]);

  const isAllDataReady = true;

  useEffect(() => {
    handleBasicGithubInformation();
  }, [handleBasicGithubInformation]);

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
