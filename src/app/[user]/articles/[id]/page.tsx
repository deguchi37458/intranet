import React from "react";

import { prisma } from "@/lib/prisma";

import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";

export default async function Page() {
  const articles = await prisma.post.findMany();
  return (
    <>
      <Header />
      <main>
        <section>
          <article className="bg-gray-100 py-12">
            <Container>
              <div className="mb-12 text-center">
                <span className="text-6xl">😷</span>
                <h1 className="my-5 text-4xl font-bold">コロナ対応</h1>
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
