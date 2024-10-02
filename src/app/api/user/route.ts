import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        nickname: data.nickname,
        email: data.email,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
