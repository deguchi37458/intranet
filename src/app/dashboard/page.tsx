import React from "react";
import Link from "next/link";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ChevronDown, FileText, Plus } from "lucide-react";
import { getServerSession } from "next-auth/next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/app/components/container";
import { Header } from "@/app/components/header";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const post = await prisma.post.findMany({
    where: {
      username: session?.user.username,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  console.log(post);

  function formatDate(date: Date) {
    const createdAtFormatted = new Date(date).toLocaleDateString();
    return createdAtFormatted;
  }

  function formatPublished(published: boolean) {
    if (published) {
      return "公開中";
    } else {
      return "下書き";
    }
  }

  return (
    <>
      {/* @ts-expect-error Server Component */}
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
                  {post.map((article, index) => (
                    <div key={index}>
                      <Link href={`/articles/${article.id}/edit`}>
                        <div className="flex items-center justify-between p-4 hover:bg-accent hover:text-accent-foreground">
                          <div>
                            <h3 className="font-medium">{article.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatPublished(article.published)} • {formatDate(article.created_at)}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button>
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </Link>
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
