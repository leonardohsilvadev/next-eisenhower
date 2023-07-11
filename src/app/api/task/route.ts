import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { authorId, description, type } = await request.json()
  const task = await prisma.task.create({
    data: {
      authorId,
      description,
      type
    }
  });

  if (!task) {
    return new NextResponse("Task not created", { status: 500 });
  }

  return NextResponse.json({ task });
}
