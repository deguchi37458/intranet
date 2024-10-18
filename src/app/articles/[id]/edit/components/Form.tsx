"use client";

import { useState } from "react";

import MarkdownIt from "markdown-it";
import { Session } from "next-auth";

import "zenn-content-css";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Props = {
  session: Session | null;
  id: string;
};

export function Form(props: Props) {
  const [title, setTitle] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const md = new MarkdownIt();

  const [preview, setPreview] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId: props.id, emoji, title, markdown, username: props.session?.user.username }),
    });

    if (res.ok) {
      alert("投稿が成功しました");
    } else {
      const errorData = await res.json();
      alert(`エラーが発生しました: ${errorData.message || "不明なエラー"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-[50px]">
      <div className="mb-4">
        <Input
          style={{ outline: "none" }}
          className="w-[700px] bg-white focus-visible:ring-0"
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-between">
        <div className="overflow-hidden">
          <div
            className="flex w-[700px] transition-transform duration-300"
            style={{
              transform: preview ? "translateX(-100%)" : "translateX(0)",
            }}
          >
            {/* Editor */}
            <div className="min-w-[700px]">
              <Textarea
                className="min-h-[500px] resize-none bg-white focus-visible:ring-0"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Enter Markdown here..."
              ></Textarea>
            </div>
            {/* Preview */}
            <div className="min-w-[700px]">
              <div
                className="znc min-h-[500px] bg-white px-3 py-2"
                dangerouslySetInnerHTML={{ __html: markdown ? md.render(markdown) : "" }}
              />
            </div>
          </div>
        </div>
        <aside className="sticky">
          <div className="relative mb-4">
            <ToggleGroup
              type="single"
              value={preview ? "b" : "a"}
              onValueChange={(value: any) => setPreview(value === "b")}
            >
              <ToggleGroupItem value="a">Editor</ToggleGroupItem>
              <ToggleGroupItem value="b">Preview</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="relative mb-4">
            <Button variant="outline" type="button" onClick={togglePicker}>
              <label>{emoji ? emoji : "🗒️"}</label>
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
          <Button variant="destructive" type="submit">
            投稿
          </Button>
        </aside>
      </div>
    </form>
  );
}
