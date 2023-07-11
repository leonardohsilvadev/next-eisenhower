import { Task } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { authorId, description, type }: Task = await request.json()
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

export async function PUT(request: Request) {
  const req: Task = await request.json()
  const task = await prisma.task.update({
    where: {
      id: req.id
    },
    data: req
  });

  if (!task) {
    return new NextResponse("Task update failed", { status: 500 });
  }

  return NextResponse.json({ task });
}