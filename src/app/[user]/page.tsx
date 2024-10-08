import React from "react";

import { prisma } from "@/lib/prisma";

import { ArticleList } from "@/app/components/article-list";
import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";

export default async function Page({ params }: { params: { user: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      username: params.user,
    },
  });

  const post = await prisma.post.findMany({
    where: {
      username: params.user,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-100 py-12">
          <Container>
            <h1>{user?.username}</h1>
            {/* @ts-expect-error Server Component */}
            <ArticleList post={post} />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
