import React from "react";

import { prisma } from "@/lib/prisma";

import { ArticleList } from "@/app/components/article-list";
import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { SecTitle } from "@/app/components/sec-title";

export default async function Home() {
  const post = await prisma.post.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header />
      <main>
        <section className="bg-gray-100 py-12">
          <Container>
            <SecTitle title="Note" />
            {/* @ts-expect-error Server Component */}
            <ArticleList post={post} />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
