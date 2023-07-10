'use client'
import useTasksData from '@/app/hooks/useTasksData'
import { useUser } from '@clerk/nextjs'
import { Task, TasksEnum } from '@prisma/client'
import { Input, TaskItem } from '..'

export default function ImportantNotUrgent() {
  const type: TasksEnum = "IMPORTANT_NOT_URGENT"
  const user = useUser()
  const { tasks, createTask } = useTasksData({ authorId: user.user?.id, type })

  const handleAdd = () => {
    const body = {
      authorId: user.user?.id!,
      description: 'Teste',
      type
    }

    createTask(body)
  }

  return (
    <div className="bg-stone-600 w-full flex flex-col items-center px-24">
      {tasks && tasks.map((task: Task) => <TaskItem key={`task-${task.id}`} task={task} />)}
      <Input onAdd={handleAdd} />
    </div>
  )
}