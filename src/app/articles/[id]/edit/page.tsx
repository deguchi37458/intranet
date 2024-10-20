import React from "react";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ArticleType } from "@/types/article";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

import { Container } from "@/app/components/Container";
import { Header } from "@/app/components/Header";

import { Form } from "./components/Form";

export default async function EditPage({ params }: { params: { id: string } }) {
  const session: Session | null = await getServerSession(authOptions);
  const id: string = params.id;

  let post: ArticleType | null = await prisma.post.findUnique({
    where: { id: String(id) },
  });

  return (
    <>
      <Header />
      <main>
        <Container>
          <Form session={session} post={post} id={id} />
        </Container>
      </main>
    </>
  );
}
