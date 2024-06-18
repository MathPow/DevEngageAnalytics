"use client";

import { GithubUserAllInfo } from "@/lib/types/githubInfo";
import { useState } from "react";
import AllInOneDevCard from "./allInOneDev/AllInOneDevCard";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { GitlabUserInfo } from "@/lib/types/gitlabInfo";
import { ComponentFormatEnum } from "@/lib/types/componentFormat";
import BusinessCardDev from "./businessCardDev/BusinessCardDev";
import { LinkListComponentsEnum } from "@/lib/content/LinkListEnum";

interface DevCardProps {
  type: LinkListComponentsEnum;
  format: ComponentFormatEnum;
  data: any;
}

export default function DevCard({ type, format, data }: DevCardProps) {
  const [githubData, setGithubData] = useState<GithubUserAllInfo>();
  const [gitlabData, setGitlabData] = useState<GitlabUserInfo>();
  const [linkedinData, setLinkedinData] = useState<LinkedinUserInfo>();

  return (
    <>
      {type === LinkListComponentsEnum.AllInOneDev && (
        <AllInOneDevCard
          githubData={githubData as GithubUserAllInfo}
          gitlabData={gitlabData as GitlabUserInfo}
          linkedinData={linkedinData as LinkedinUserInfo}
        />
      )}
      {type === LinkListComponentsEnum.BusinessCardDev && <BusinessCardDev data={data} format={format} />}
    </>
  );
}
