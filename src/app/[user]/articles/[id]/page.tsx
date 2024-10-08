import React from "react";

import { prisma } from "@/lib/prisma";

import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";

export default async function Page({ params }: { params: { user: string; id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      username: params.user,
      id: params.id,
    },
  });

  return (
    <>
      <Header />
      <main>
        <section>
          <article className="bg-gray-100 py-12">
            <Container>
              <div className="mb-12 text-center">
                <span className="text-6xl">{post?.emoji}</span>
                <h1 className="my-5 text-4xl font-bold">{post?.title}</h1>
              </div>
              <div className="bg-white p-6">
                <p>ここに内容が入る</p>
              </div>
            </Container>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
