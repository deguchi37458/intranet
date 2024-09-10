import Link from "next/link";

import { prisma } from "@/lib/prisma";
import ArticleType from "@/types/article";

interface ArticleType {
  id: number;
  emoji: string;
  title: string;
}

export async function ArticleList() {
  const articles = await prisma.article.findMany();

  return (
    <div className="flex gap-20">
      {articles.map((article: ArticleType) => {
        return (
          <article key={article.id}>
            <Link href={{ pathname: `/articles/${article.id}/` }} className="flex items-center gap-5">
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
