import { TasksEnum } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { authorId: string, type: TasksEnum } }
) {
  const authorId = params.authorId;
  const type = params.type;
  console.log('author id: ', authorId)
  const tasks = await prisma.task.findMany({
    where: {
      authorId,
      type
    },
  });

  console.log('tasks: ', tasks)

  if (!tasks) {
    return new NextResponse("No tasks found for this user ID", { status: 404 });
  }

  return NextResponse.json(tasks);
}
