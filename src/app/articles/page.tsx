"use client";

import { useState } from "react";

import { useSession } from "next-auth/react";

import { Container } from "@/app/components/container";

export default function Home() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, emoji, username: session?.user.username }),
    });

    if (res.ok) {
      alert("投稿が成功しました");
    } else {
      const errorData = await res.json();
      alert(`エラーが発生しました: ${errorData.message || "不明なエラー"}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">タイトル:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="emoji">絵文字:</label>
          <input type="text" id="emoji" value={emoji} onChange={(e) => setEmoji(e.target.value)} required />
        </div>
        <button type="submit">投稿</button>
      </form>
    </Container>
  );
}
