import React from "react";

import { ArticleList } from "@/app/components/article-list";
import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
import { SecTitle } from "@/app/components/sec-title";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-100 py-12">
          <Container>
            <SecTitle title="Note" />
            {/* @ts-expect-error Server Component */}
            <ArticleList />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
