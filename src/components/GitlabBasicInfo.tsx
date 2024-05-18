"use client";

import { getBasicGitlabInformation } from "@/lib/services/gitlabService";
import { GitlabUserInfo } from "@/lib/types/gitlabInfo";
import { useRef, useState } from "react";

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
      <h1 className="font-bold text-lg mb-2 underline">GitLab</h1>
      <input placeholder="username" ref={inputRef} />
      <button className="bg-slate-200" onClick={handleBasicInformation}>
        Get User Info
      </button>
      {info ? (
        <img className="rounded-full w-24 h-24" src={info?.avatar_url} alt="avatar" />
      ) : (
        <div className="rounded-full w-24 h-24 bg-neutral-200 flex justify-center items-center">Avatar</div>
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
