import { TasksEnum } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { authorId: string, type: TasksEnum } }
) {
  const tasks = await prisma.task.findMany({
    where: {
      authorId: params.authorId,
      type: params.type
    },
  });

  if (!tasks) {
    return new NextResponse("No tasks found for this user ID", { status: 404 });
  }

  return NextResponse.json(tasks);
}

export async function DELETE(
  request: Request,
  { params }: { params: { authorId: string, type: TasksEnum } }
) {
  const tasks = await prisma.task.deleteMany({
    where: {
      authorId: params.authorId,
      type: params.type
    },
  });

  if (!tasks) {
    return new NextResponse("No tasks found for this user ID", { status: 404 });
  }

  return NextResponse.json(tasks);
}
