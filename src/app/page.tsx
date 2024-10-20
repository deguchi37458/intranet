import React from "react";

import { prisma } from "@/lib/prisma";

import { ArticleList } from "@/app/components/ArticleList";
import { Container } from "@/app/components/Container";
import { Header } from "@/app/components/Header";

export default async function Home() {
  const post = await prisma.post.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-100 py-12">
          <Container>
            {/* @ts-expect-error Server Component */}
            <ArticleList post={post} />
          </Container>
        </section>
      </main>
    </>
  );
}
