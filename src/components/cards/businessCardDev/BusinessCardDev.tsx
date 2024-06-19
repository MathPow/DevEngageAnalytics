import { ComponentFormatEnum } from "@/lib/types/componentFormat";
import BusinessCardDevCard from "./BusinessCardDevCard";
import { useEffect } from "react";
import { useGithubUserAllInformation } from "@/lib/composables/useGithubData";

interface BusinessDevCardProps {
  data: any;
  format: ComponentFormatEnum;
  setInfo: (value: any) => void;
  editInfo: any;
}

export default function BusinessCardDev({ data, format, setInfo, editInfo }: BusinessDevCardProps) {
  const { githubData, handleBasicGithubInformation } = useGithubUserAllInformation(data.githubUsername);

  useEffect(() => {
    handleBasicGithubInformation(editInfo);
  }, [handleBasicGithubInformation, editInfo]);

  useEffect(() => {
    setInfo(githubData);
  }, [githubData]);

  return <>{format === ComponentFormatEnum.Card && githubData && <BusinessCardDevCard githubData={githubData} />}</>;
}
