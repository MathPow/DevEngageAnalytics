"use client";

import { GithubUserInfo } from "@/lib/types/githubInfo";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { githubUserInfoMock } from "@/tests/mocks/GithubUserInfoMock";

interface HeaderProps {
  avatarUrl?: string;
  bannerUrl?: string;
  followers?: number;
  following?: number;
  connections?: number;
}

export default function Header({
  avatarUrl,
  bannerUrl,
  followers,
  following,
  connections,
}: HeaderProps) {
  return (
    <>
      {bannerUrl ? (
        <img
          className="opacity-40 rounded-3xl w-full h-28"
          src={bannerUrl}
          alt="banner"
        />
      ) : (
        <div className="w-full h-28 bg-gradient-to-tr from-amber-200 via-amber-200 to-red-400"></div>
      )}
      <div className="absolute -translate-y-1/2 left-8 flex items-center w-[calc(100%-64px)]">
        {avatarUrl ? (
          <img
            className="w-20 h-20 rounded-full"
            src={avatarUrl}
            alt="avatar"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-slate-600"></div>
        )}
        <div className="flex-grow flex justify-around mt-11">
          {followers && (
            <div className="text-center">
              <p className="font-semibold text-sm">{followers}</p>
              <p className="text-xs">followers</p>
            </div>
          )}
          {following && (
            <div className="text-center">
              <p className="font-semibold text-sm">{following}</p>
              <p className="text-xs">following</p>
            </div>
          )}
          {connections && (
            <div className="text-center">
              <p className="font-semibold text-sm">{connections}</p>
              <p className="text-xs">connections</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
