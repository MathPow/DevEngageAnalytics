"use client";

import { getBasicGitlabInformation } from "@/lib/services/gitlabService";
import { GitlabUserInfo } from "@/lib/types/gitlabInfo";
import { useRef, useState } from "react";
import Image from "next/image";

export default function GitlabBasicInfo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<GitlabUserInfo>();

  function handleBasicInformation() {
    if (inputRef.current) {
      getBasicGitlabInformation(inputRef.current.value)
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
      <h1 className="mb-2 text-lg font-bold underline">GitLab</h1>
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
      <p>Id: {info?.id}</p>
      <p>Username: {info?.username}</p>
      <p>Name: {info?.name}</p>
      <p>State: {info?.state}</p>
      <p>Locked: {info?.locked}</p>
      <p>Web Url: {info?.web_url}</p>
    </section>
  );
}
