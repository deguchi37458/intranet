import Link from "next/link";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/app/components/Container";
import { NewPostButton } from "@/app/components/NewPostButton";

export async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="py-4">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1>
              <Link href="/">ZennのようなWebアプリ</Link>
            </h1>
          </div>
          <div>
            {session ? (
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={session.user.image || "/default-avatar.png"} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <NewPostButton />
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
