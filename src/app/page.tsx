import { ArticleList } from "@/app/components/article-list";
import { Container } from "@/app/components/container";
import { SecTitle } from "@/app/components/sec-title";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-100 py-12">
        <Container>
          <SecTitle title="Note" />
          {/* @ts-expect-error Server Component */}
          <ArticleList />
        </Container>
      </section>
    </main>
  );
}
