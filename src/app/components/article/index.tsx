import Link from "next/link";

export function Article(): JSX.Element {
  return (
    <article>
      <Link href="/" className="flex items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-white">
          <span className="text-5xl">😷</span>
        </div>
        <div>
          <p className="font-bold">コロナ対策</p>
        </div>
      </Link>
    </article>
  );
}
