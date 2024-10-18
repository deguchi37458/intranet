import React from "react";

import { prisma } from "@/lib/prisma";

import { ArticleList } from "@/app/components/ArticleList";
import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { SecTitle } from "@/app/components/SecTitle";

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
