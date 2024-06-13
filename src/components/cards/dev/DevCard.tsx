"use client";

import { getBasicGithubInformation, getGithubUserAllInformation } from "@/lib/services/githubService";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import { GithubUserAllInfo, GithubUserInfo } from "@/lib/types/githubInfo";
import { useEffect, useMemo, useState, useCallback } from "react";
import AllInOneDevCard from "./AllInOneDevCard";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { GitlabUserInfo } from "@/lib/types/gitlabInfo";
import BusinessDevCard from "./BusinessDevCard";

interface DevCardProps {
  cardType: DevCardEnum;
  githubUsername?: string;
  gitlabUsername?: string;
  linkedinUsername?: string;
}

export default function DevCard({ cardType, githubUsername, gitlabUsername, linkedinUsername }: DevCardProps) {
  const [githubData, setGithubData] = useState<GithubUserAllInfo>();
  const [gitlabData, setGitlabData] = useState<GitlabUserInfo>();
  const [linkedinData, setLinkedinData] = useState<LinkedinUserInfo>();

  const handleBasicGithubInformation = useCallback(() => {
    if (githubUsername) {
      getGithubUserAllInformation(githubUsername)
        .then(([basicInfo, socialsInfo, totalStarsEarned, commits, pullRequests, issues]) => {
          if (basicInfo && socialsInfo && totalStarsEarned && commits && pullRequests && issues) {
            setGithubData({
              basicInfo: basicInfo,
              socialsInfo: socialsInfo,
              totalStarsEarned: totalStarsEarned,
              contributionsInfo: { commits: commits, pullRequests: pullRequests, issues: issues },
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    }
  }, [githubUsername]);

  // const isAllDataReady: boolean = useMemo(() => {
  //   return (
  //     githubData !== undefined &&
  //     gitlabData !== undefined &&
  //     linkedinData !== undefined
  //   );
  // }, [githubData, gitlabData, linkedinData]);

  const isAllDataReady = true;
  const isGitHubDataReady = true;

  useEffect(() => {
    handleBasicGithubInformation();
  }, [handleBasicGithubInformation]);

  return (
    <>
      {isAllDataReady && (
        <>
          {cardType === DevCardEnum.AllInOneCard && (
            <AllInOneDevCard
              githubData={githubData as GithubUserAllInfo}
              gitlabData={gitlabData as GitlabUserInfo}
              linkedinData={linkedinData as LinkedinUserInfo}
            />
          )}
        </>
      )}
      {isGitHubDataReady && (
        <>{cardType === DevCardEnum.BusinessCard && <BusinessDevCard githubData={githubData as GithubUserAllInfo} />}</>
      )}
    </>
  );
}
