import Link from "next/link";

import { Article } from "@/app/components/article";
import { Container } from "@/app/components/container";

export default function Home() {
  return (
    <main>
      <section className="bg-gray-200 py-12">
        <Container>
          <h2 className="mb-12 font-Inter text-5xl font-semibold">Rules</h2>
          <div className="flex gap-20">
            <Article />
            <Article />
          </div>
        </Container>
      </section>
      <section className="bg-gray-100 py-12">
        <Container>
          <h2 className="mb-12 font-Inter text-5xl font-semibold">Infra</h2>
          <div className="flex gap-20">
            <Article />
            <Article />
          </div>
        </Container>
      </section>
      <section className="bg-blue-100  py-12">
        <Container>
          <h2 className="mb-12 font-Inter text-5xl font-semibold">Notes</h2>
          <div className="flex gap-20">
            <Article />
            <Article />
          </div>
        </Container>
      </section>
    </main>
  );
}
