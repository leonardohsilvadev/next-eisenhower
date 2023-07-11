'use client'
import useTasksData from '@/app/hooks/useTasksData'
import { useUser } from '@clerk/nextjs'
import { Task, TasksEnum } from '@prisma/client'
import { Input, TaskItem } from '..'

export default function ImportantUrgent() {
  const type: TasksEnum = "IMPORTANT_URGENT"
  const user = useUser()
  const { tasks, createTask, deleteTask } = useTasksData({ authorId: user.user?.id, type })

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
      {tasks && tasks.map((task: Task) => (
        <TaskItem
          key={`task-${task.id}`}
          task={task}
          onDelete={deleteTask}
        />
      ))}
      <Input onAdd={handleAdd} />
    </div>
  )
}