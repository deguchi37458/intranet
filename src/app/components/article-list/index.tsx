import Link from "next/link";

import { prisma } from "@/lib/prisma";

export async function ArticleList() {
  const articles = await prisma.Article.findMany();

  return (
    <div className="flex gap-20">
      {articles.map((article: any) => {
        return (
          <article key={article.id}>
            <Link href="/" className="flex items-center gap-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white">
                <span className="text-5xl">{article.emoji}</span>
              </div>
              <div>
                <p className="font-bold">{article.title}</p>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
