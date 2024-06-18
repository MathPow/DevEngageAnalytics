import { GithubUserAllInfo } from "@/lib/types/githubInfo";
import { Header, Bio, Footer, Info } from "../components/businessDevCard/index";
import { ComponentFormatEnum } from "@/lib/types/componentFormat";
import BusinessCardDevCard from "./BusinessCardDevCard";
import { useCallback, useEffect, useState } from "react";
import { useGithubUserAllInformation } from "@/lib/composables/useGithubData";

interface BusinessDevCardProps {
  data: any;
  format: ComponentFormatEnum;
}

export default function BusinessCardDev({ data, format }: BusinessDevCardProps) {
  const { githubData, handleBasicGithubInformation } = useGithubUserAllInformation(data.githubUsername);

  useEffect(() => {
    handleBasicGithubInformation();
  }, [handleBasicGithubInformation]);

  return <>{format === ComponentFormatEnum.Card && githubData && <BusinessCardDevCard githubData={githubData} />}</>;
}
