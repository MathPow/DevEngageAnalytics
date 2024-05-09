"use client";

import { GithubUserInfo } from "@/lib/types/gitHubInfo";
import { getBasicInformation } from "@/lib/utils/gitHubUtil";
import { useRef, useState } from "react";

export default function GithubBasicInfo() {
  const axios = require("axios");
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<GithubUserInfo>();

  function formatDate(date: string | undefined) {
    if (date) {
      return new Date(date).toISOString().split("T")[0];
    }
    return "";
  }

  return (
    <section>
      <h1 className="font-bold text-lg mb-2 underline">GitHub</h1>
      <input placeholder="username" ref={inputRef} />
      <button className="bg-slate-200" onClick={getBasicInformation}>
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
