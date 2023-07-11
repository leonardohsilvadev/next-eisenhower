'use client'
import useTasksData from '@/app/hooks/useTasksData'
import { useUser } from '@clerk/nextjs'
import { Task, TasksEnum } from '@prisma/client'
import { Input, TaskItem } from '..'

export default function NotImportantUrgent() {
  const type: TasksEnum = "NOT_IMPORTANT_URGENT"
  const user = useUser()
  const { tasks, createTask, deleteTask, updateTask } = useTasksData({ authorId: user.user?.id, type })

  const handleAdd = (inputValue: string) => {
    const body = {
      authorId: user.user?.id!,
      description: inputValue,
      type
    }

    createTask(body)
  }

  const handleUpdate = (task: Task) => {
    const body: Task = {
      id: task.id,
      authorId: task.authorId,
      description: task.description,
      type: task.type,
      createdAt: task.createdAt
    }

    updateTask(body)
  }

  return (
    <div className="bg-stone-600 w-full flex flex-col items-center px-24">
      {tasks && tasks.map((task: Task) => (
        <TaskItem
          key={`task-${task.id}`}
          task={task}
          onDelete={deleteTask}
          onEdit={handleUpdate}
        />
      ))}
      <Input onAdd={handleAdd} />
    </div>
  )
}