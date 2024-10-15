"use client";

import React, { useState } from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";

export default function Home() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  function generateRandomId(length: number): string {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    const postId = generateRandomId(10);
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId, title, emoji, username: session?.user.username }),
    });

    if (res.ok) {
      alert("投稿が成功しました");
    } else {
      const errorData = await res.json();
      alert(`エラーが発生しました: ${errorData.message || "不明なエラー"}`);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-100">
        <Container>
          <form onSubmit={handleSubmit} className="py-[50px]">
            <div className="mb-4">
              <Input
                type="text"
                id="title"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Textarea className="min-h-[500px]" placeholder="Type your message here."></Textarea>
            </div>
            <div className="relative mb-4">
              <Button type="button" onClick={togglePicker}>
                <label>{emoji ? emoji : "アイキャッチを選択してください"}</label>
                <Input
                  className="invisible absolute"
                  type="text"
                  id="emoji"
                  placeholder="Emoji"
                  value={emoji}
                  onChange={(e) => setEmoji(e.target.value)}
                  required
                />
              </Button>
              <div className="absolute">
                {showPicker && (
                  <Picker data={data} onEmojiSelect={(selectedEmoji: any) => setEmoji(selectedEmoji.native)} />
                )}
              </div>
            </div>
            <Button type="submit">投稿</Button>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
