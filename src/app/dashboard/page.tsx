import React, { useState } from "react";

import { Bell, ChevronDown, FileText, Plus } from "lucide-react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/app/components/container";
import { Header } from "@/app/components/header";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="flex flex-1 gap-10">
            <nav className=" w-64 space-y-4">
              <Button variant="secondary" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                記事の管理
              </Button>
            </nav>
            <main className="flex-1">
              <div className="mb-8 flex items-center justify-between">
                <h1 className="text-2xl font-semibold">記事の管理</h1>
              </div>
              <div className="rounded-lg bg-card text-card-foreground shadow">
                <div className="flex items-center justify-between border-b p-4">
                  <Input placeholder="タイトルやトピックで検索" className="w-full max-w-md" />
                  <Button variant="outline" className="ml-2">
                    <Plus className="mr-2 h-4 w-4" /> 新規作成
                  </Button>
                </div>
                <div>
                  {[
                    {
                      title: "僕もZennのようなサービスが作りたい",
                      status: "下書き",
                      updated: "6日前に本文更新",
                      words: "389字",
                    },
                    { title: "GSAPのpinを使ったときは", status: "下書き", updated: "20日前に本文更新", words: "0字" },
                    {
                      title: "Next.js × Nest.jsの環境をDockerで作成する",
                      status: "公開中",
                      updated: "1ヶ月前に本文更新",
                      words: "5477字",
                    },
                    {
                      title: "いちばんやさしい非同期処理 〜Promiseとasync/await〜",
                      status: "下書き",
                      updated: "1ヶ月前に本文更新",
                      words: "961字",
                    },
                  ].map((article, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between p-4 hover:bg-accent hover:text-accent-foreground">
                        <div>
                          <h3 className="font-medium">{article.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {article.status} • {article.updated} • {article.words}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      {index < 3 && <Separator />}
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </Container>
      </main>
    </>
  );
}
