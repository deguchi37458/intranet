import Link from "next/link";

export function ArticleList(): JSX.Element {
  const articles = [
    {
      id: 1,
      emoji: "😷",
      title: "コロナ対応",
    },
    {
      id: 2,
      emoji: "💻",
      title: "リモートワーク",
    },
    {
      id: 3,
      emoji: "🤱",
      title: "育児休暇",
    },
  ];

  return (
    <div className="flex gap-20">
      {articles.map((article) => {
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
