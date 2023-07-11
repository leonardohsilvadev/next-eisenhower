import { Task } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
  ) {
  const task = await prisma.task.delete({
    where: {
      id: params.id
    }
  });

  if (!task) {
    return new NextResponse("Task deletion failed", { status: 500 });
  }

  return NextResponse.json({ task });
}
