'use client';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Task } from "@prisma/client";
import { useState } from "react";
import Input from "../Input/Input";

type TasksProps = {
  task: Task
  onDelete?: (id: string) => void
  onEdit?: (task: Task) => void
}

export default function TaskItem({ task, onDelete, onEdit }: TasksProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleEdit = (value: string) => {
    onEdit!({ ...task, description: value })
    setIsEditing(false)
  }

  return (
    <div className="w-full flex items-center justify-between border-b-2 border-dashed mb-4 pb-2">
      {isEditing ? (
        <Input onAdd={handleEdit} defaultValue={task.description} />
      ) : (
      <>
        <h1 className="py-1 text-md font-semibold text-white">{task.description}</h1>
        <div className="flex flex-row justify-between items-center w-[10%]">
          <PencilIcon width={24} height={24} className="text-yellow-500 cursor-pointer" onClick={() => setIsEditing(true)} />
          <TrashIcon width={24} height={24} className="text-red-600 cursor-pointer" onClick={() => onDelete!(task.id)} />
        </div>
      </>
      )}
    </div>
  )
}