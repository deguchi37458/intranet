import React from "react";

import { prisma } from "@/lib/prisma";
import MarkdownIt from "markdown-it";

import "zenn-content-css";

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

  const md = new MarkdownIt();

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
                <div
                  className="znc"
                  dangerouslySetInnerHTML={{ __html: post?.content ? md.render(post?.content) : "" }}
                ></div>
              </div>
            </Container>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
