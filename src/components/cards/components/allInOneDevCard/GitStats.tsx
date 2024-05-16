"use client";

import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/lib/types/projectType";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface GitStatsProps {
  pullRequests: number;
  commits: number;
  comments: number;
  openedIssues: number;
  projectInvolvement: Project[];
  totalStarsEarned: number;
  totalRepositories: number;
  githubContributionPercentage: number;
  gitlabContributionPercentage: number;
  className?: string;
}

export default function GitStats({
  pullRequests,
  commits,
  comments,
  openedIssues,
  projectInvolvement,
  totalStarsEarned,
  totalRepositories,
  githubContributionPercentage,
  gitlabContributionPercentage,
  className = "",
}: GitStatsProps) {
  const { t } = useTranslation();

  function getSortedProjectInvolvement() {
    return projectInvolvement.sort((a, b) => b.contributions - a.contributions);
  }

  return (
    <div className={className}>
      <div className="flex flex-col -space-y-0.5">
        <div className="flex justify-between">
          <p>{t("card.stats.pull_requests")}</p>
          <p>{pullRequests}</p>
        </div>
        <div className="flex justify-between">
          <p>{t("card.stats.commits")}</p>
          <p>{commits}</p>
        </div>
        <div className="flex justify-between">
          <p>{t("card.stats.comments")}</p>
          <p>{comments}</p>
        </div>
        <div className="flex justify-between">
          <p>{t("card.stats.opened_issues")}</p>
          <p>{openedIssues}</p>
        </div>
        <div className="flex justify-between">
          <p>{t("card.stats.total_contributions")}</p>
          <p>{pullRequests + commits + comments + openedIssues}</p>
        </div>
      </div>
      <Separator className="bg-_darkGrayText my-2" />
      <div className="flex flex-col -space-y-0.5">
        <div className="flex justify-between">
          <p>{t("card.stats.project_involvement")}</p>
          <p>{projectInvolvement.length}</p>
        </div>
        {getSortedProjectInvolvement()
          .slice(0, 4)
          .map((el, index) => (
            <div className="flex justify-between text-_lightGrayText text-sm">
              <div className="flex gap-x-0.5 items-center">
                {el.isRepoFromUser && <Icon name={"user"} size={14} />}
                <p
                  className={`truncate ${el.isRepoFromUser ? "w-36" : "w-40"}`}
                >
                  {el.title}
                </p>
              </div>
              <p>{el.contributions}</p>
            </div>
          ))}
        {projectInvolvement.length > 4 && (
          <p className="text-_lightGrayText text-sm -mt-1">...</p>
        )}
      </div>
      <Separator className="bg-_darkGrayText my-2" />
      <div className="flex flex-col -space-y-0.5">
        <div className="flex justify-between">
          <p>{t("card.stats.total_stars_earned")}</p>
          <p>{totalStarsEarned}</p>
        </div>
        <div className="flex justify-between">
          <p>{t("card.stats.total_repositiories")}</p>
          <p>{totalRepositories}</p>
        </div>
      </div>
      <Separator className="bg-_darkGrayText my-2" />
      <div className="flex flex-col -space-y-0.5">
        <div className="flex justify-between">
          <p>GitHub's</p>
          <p>{githubContributionPercentage}%</p>
        </div>
        <div className="flex justify-between">
          <p>GitLab's</p>
          <p>{gitlabContributionPercentage}%</p>
        </div>
      </div>
    </div>
  );
}
