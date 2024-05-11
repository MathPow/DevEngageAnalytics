"use client";

import { GithubUserInfo } from "@/lib/types/githubInfo";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { githubUserInfoMock } from "@/tests/mocks/GithubUserInfoMock";

interface HeaderProps {
  name?: string;
  alias?: string;
  description?: string;
}

export default function Bio({ name, alias, description }: HeaderProps) {
  return (
    <div className="mt-11 mx-8">
      {name && <p className="font-semibold text-lg">{name}</p>}
      {alias && <p className="text-_grayText -mt-1 text-md">@{alias}</p>}
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  );
}
