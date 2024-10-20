"use client";

import { useState } from "react";
import Image from "next/image";

import Kv from "@@/public/assets/images/welcome/kv.svg";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Welcome() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, nickname, email: session?.user?.email }),
    });

    if (res.ok) {
      alert("投稿が成功しました");
    } else {
      const errorData = await res.json();
      alert(`エラーが発生しました: ${errorData.message || "不明なエラー"}`);
    }
  };

  return (
    <main>
      <div className="mx-auto my-0 w-[420px] py-20">
        <div className="mb-10 flex justify-center">
          <Image src={Kv} width={320} height={320} alt="welcome!" />
        </div>
        <h1 className="mb-10 text-center font-Inter text-5xl font-semibold">Welcome!</h1>
        <form onSubmit={handleSubmit}>
          <Input
            className="mb-5"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="mb-5"
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button type="submit">プロフィール設定</Button>
        </form>
      </div>
    </main>
  );
}
