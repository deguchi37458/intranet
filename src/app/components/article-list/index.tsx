import Link from "next/link";

import { prisma } from "@/lib/prisma";
import { Post } from "@prisma/client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  post: Post[];
};

export async function ArticleList(props: Props) {
  const posts = props.post;

  return (
    <div className="grid gap-6">
      {posts.map((article: Post) => {
        const createdAtFormatted = new Date(article.created_at).toLocaleDateString();

        return (
          <article key={article.id}>
            <Link
              href={`/${article.username}/articles/${article.id}/`}
              className="flex items-start space-x-4 rounded-lg bg-white p-4 shadow"
            >
              <Avatar className="h-20 w-20">
                <AvatarImage src={`/placeholder-jpg`} alt="Article image" />
                <AvatarFallback>{article.emoji}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-semibold">{article.title}</h3>
                <p className="mb-2 text-sm text-gray-500">
                  {article.username} • {createdAtFormatted}
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>👍 24</span>
                  <span>💬 5</span>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
