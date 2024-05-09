"use client";

import { useRef, useState } from "react";

interface LinkedinUserInfo {
  country: number;
  language: number;
  name: string;
  email: string;
  picture: string;
  email_verified: boolean;
}

export default function LinkedinBasicInfo() {
  const axios = require("axios");
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<LinkedinUserInfo>();

  function getBasicInformation() {
    if (inputRef.current) {
      const headers = {
        Authorization: `Bearer ${inputRef.current}`,
        "Content-Type": "application/json",
      };
      axios
        .get("https://api.linkedin.com/v2/userinfo", { headers })
        .then((response: any) => {
          setInfo({
            country: response.data.locale.country,
            language: response.data.locale.language,
            name: response.data.name,
            email: response.data.email,
            picture: response.data.picture,
            email_verified: response.data.email_verified,
          });
        })
        .catch((error: any) => {
          console.error("Error:", error);
        });
    }
  }

  return (
    <section>
      <h1 className="font-bold text-lg mb-2 underline">LinkedIn</h1>
      <input placeholder="token" ref={inputRef} />
      <button className="bg-slate-200" onClick={getBasicInformation}>
        Get User Info
      </button>
      {info ? (
        <img
          className="rounded-full w-24 h-24"
          src={info?.picture}
          alt="avatar"
        />
      ) : (
        <div className="rounded-full w-24 h-24 bg-neutral-200 flex justify-center items-center">
          Avatar
        </div>
      )}
      <p>Name: {info?.name}</p>
      <p>Email: {info?.email}</p>
      <p>Email Verified: {info?.email_verified}</p>
      <p>Language: {info?.language}</p>
      <p>Country: {info?.country}</p>
    </section>
  );
}
