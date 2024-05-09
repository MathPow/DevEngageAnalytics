"use client";

import { getBasicGithubInformation } from "@/lib/services/githubService";
import { GithubUserInfo } from "@/lib/types/githubInfo";
import { formatDate } from "@/lib/utils/formatUtil";
import { useRef, useState } from "react";

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
      <h1 className="font-bold text-lg mb-2 underline">GitHub</h1>
      <input placeholder="username" ref={inputRef} />
      <button className="bg-slate-200" onClick={handleBasicInformation}>
        Get User Info
      </button>
      {info ? (
        <img
          className="rounded-full w-24 h-24"
          src={info?.avatar_url}
          alt="avatar"
        />
      ) : (
        <div className="rounded-full w-24 h-24 bg-neutral-200 flex justify-center items-center">
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
