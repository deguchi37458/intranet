"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function NewPostButton() {
  const router = useRouter();

  function generateRandomId(length: number): string {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const handleNewArticle = () => {
    // ランダムなUUIDを生成
    const newId = generateRandomId(10);
    // 生成されたIDを使って /articles/[id]/edit に遷移
    router.push(`/articles/${newId}/edit`);
  };

  return <Button onClick={handleNewArticle}>投稿する</Button>;
}
