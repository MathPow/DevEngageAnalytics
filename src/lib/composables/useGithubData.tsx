import { useCallback, useState } from "react";
import { getGithubUserAllInformation } from "../services/githubService";
import { GithubUserAllInfo } from "../types/githubInfo";

export function useGithubUserAllInformation(githubUsername: string) {
  const [githubData, setGithubData] = useState<GithubUserAllInfo>();

  const handleBasicGithubInformation = useCallback(() => {
    if (githubUsername) {
      getGithubUserAllInformation(githubUsername)
        .then(([basicInfo, socialsInfo, totalStarsEarned, commits, pullRequests, issues]) => {
          if (
            basicInfo &&
            socialsInfo &&
            totalStarsEarned !== undefined &&
            commits !== undefined &&
            pullRequests !== undefined &&
            issues !== undefined
          ) {
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

  return { githubData, handleBasicGithubInformation };
}
