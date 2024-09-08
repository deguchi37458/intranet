import { ArticleList } from "@/app/components/article-list";
import { Container } from "@/app/components/container";
import { SecTitle } from "@/app/components/sec-title";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-200 py-12">
        <Container>
          <SecTitle title="Rules" />
          {/* @ts-expect-error Server Component */}
          <ArticleList />
        </Container>
      </section>
      <section className="bg-gray-100 py-12">
        <Container>
          <SecTitle title="Infra" />
          {/* @ts-expect-error Server Component */}
          <ArticleList />
        </Container>
      </section>
      <section className="bg-blue-100  py-12">
        <Container>
          <SecTitle title="Notes" />
          {/* @ts-expect-error Server Component */}
          <ArticleList />
        </Container>
      </section>
    </main>
  );
}
