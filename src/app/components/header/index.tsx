"use client";

import { signIn, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/app/components/container";

export function Header(): JSX.Element {
  const { data: session } = useSession();
  return (
    <header className="py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1>header</h1>
          </div>
          <div>{session ? <Button>投稿する</Button> : <Button onClick={() => signIn("google")}>Login</Button>}</div>
        </div>
      </Container>
    </header>
  );
}
