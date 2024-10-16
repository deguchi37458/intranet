"use client";

import Link from "next/link";

import { signIn, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/app/components/container";

export function Header(): JSX.Element {
  const { data: session } = useSession();

  return (
    <header className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1>
              <Link href="/">header</Link>
            </h1>
          </div>
          <div>
            {session ? (
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={session.user.image || "/default-avatar.png"} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button>
                  <Link href="/articles">投稿する</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <Button onClick={() => signIn("google")}>Login</Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
