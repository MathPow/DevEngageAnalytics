"use client";

import { getBasicGithubInformation } from "@/lib/services/githubService";
import { GithubUserInfo } from "@/lib/types/githubInfo";
import { formatDate } from "@/lib/utils/formatUtil";
import { useRef, useState } from "react";
import Image from "next/image";

export default function GithubBasicInfo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<GithubUserInfo>();

  function handleBasicInformation() {
    if (inputRef.current) {
      getBasicGithubInformation(inputRef.current.value)
        .then((userData) => {
          if (userData) {
            setInfo(userData);
          }
        })
        .catch((error) => {
          console.error("Error fetching user information:", error);
        });
    }
  }

  return (
    <section>
      <h1 className="mb-2 text-lg font-bold underline">GitHub</h1>
      <input placeholder="username" ref={inputRef} />
      <button className="bg-slate-200 dark:bg-slate-800" onClick={handleBasicInformation}>
        Get User Info
      </button>
      {info ? (
        <img className="h-24 w-24 rounded-full" src={info?.avatar_url} alt="avatar" />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
          Avatar
        </div>
      )}
      <p>Name: {info?.name}</p>
      <p>Bio: {info?.bio}</p>
      <p>Followers: {info?.followers}</p>
      <p>Following: {info?.following}</p>
      <p>Public repos: {info?.public_repos}</p>
      <p>Location: {info?.location}</p>
      <p>Created date: {formatDate(info?.created_at)}</p>
    </section>
  );
}
