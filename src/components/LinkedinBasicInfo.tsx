"use client";

import { getBasicLinkedinInformation } from "@/lib/services/linkedinService";
import { LinkedinUserInfo } from "@/lib/types/linkedinInfo";
import { useRef, useState } from "react";
import Image from "next/image";

export default function LinkedinBasicInfo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<LinkedinUserInfo>();

  function handleBasicInformation() {
    if (inputRef.current) {
      getBasicLinkedinInformation(inputRef.current.value)
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
      <h1 className="font-bold text-lg mb-2 underline">LinkedIn</h1>
      <input placeholder="token" ref={inputRef} />
      <button className="bg-slate-200 dark:bg-slate-800" onClick={handleBasicInformation}>
        Get User Info
      </button>
      {info ? (
        <Image className="rounded-full w-24 h-24" src={info?.picture} alt="avatar" />
      ) : (
        <div className="rounded-full w-24 h-24 bg-neutral-200 dark:bg-neutral-800 flex justify-center items-center">
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
