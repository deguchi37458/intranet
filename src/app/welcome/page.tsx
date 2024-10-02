"use client";

import { useState } from "react";

import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/app/components/container";

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
      <Container>
        <h2>Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="text" placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <Button type="submit">プロフィール設定</Button>
        </form>
      </Container>
    </main>
  );
}
