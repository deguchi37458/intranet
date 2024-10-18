import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const post = await prisma.post.upsert({
      where: { id: data.postId },
      update: {
        emoji: data.emoji,
        title: data.title,
        content: data.markdown,
        username: data.username,
      },
      create: {
        id: data.postId,
        emoji: data.emoji,
        title: data.title,
        content: data.markdown,
        username: data.username,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
