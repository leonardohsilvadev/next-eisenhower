'use client';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Task } from "@prisma/client";
import { useState } from "react";
import Input from "../Input/Input";

type TasksProps = {
  task: Task
}

export default function TaskItem({ task }: TasksProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  return (
    <div className="w-full flex items-center justify-between border-b-2 border-dashed mb-8 py-3">
      {isEditing ? (
        <Input onAdd={() => setIsEditing(false)} value={task.description} />
      ) : (
      <>
        <h1 className="py-2 text-lg font-semibold text-white">{task.description}</h1>
        <div className="flex flex-row justify-between w-[10%]">
          <PencilIcon width={24} height={24} className="text-yellow-500 cursor-pointer" onClick={() => setIsEditing(true)} />
          <TrashIcon width={24} height={24} className="text-red-600 cursor-pointer" />
        </div>
      </>
      )}
    </div>
  )
}