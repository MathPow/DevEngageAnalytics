"use client";

import { useRef, useState } from "react";

interface GithubUserInfo {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  id: number;
  login: string;
  name: string;
  bio: string;
  location: string;
  created_at: string;
}

export default function GithubBasicInfo() {
  const axios = require("axios");
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<GithubUserInfo>();

  function getBasicInformation() {
    if (inputRef.current) {
      axios
        .get("https://api.github.com/users/" + inputRef.current.value)
        .then((response: any) => {
          setInfo({
            public_repos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following,
            avatar_url: response.data.avatar_url,
            id: response.data.id,
            login: response.data.login,
            name: response.data.name,
            bio: response.data.bio,
            location: response.data.location,
            created_at: response.data.created_at,
          });
        })
        .catch((error: any) => {
          console.error("Error:", error);
        });
    }
  }

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
