"use client";

import { useState } from "react";

import { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  session: Session | null;
};

export function Form({ session }: Props) {
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
  );
}
