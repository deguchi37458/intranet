import React from "react";

import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";

import { Container } from "@/app/components/Container";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

import { Form } from "./components/Form";

export default async function EditPage({ params }: { params: { id: string } }) {
  const session: Session | null = await getServerSession(authOptions);
  const id: string = params.id;

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Header />
      <main>
        <Container>
          <Form session={session} id={id} />
        </Container>
      </main>
    </>
  );
}
