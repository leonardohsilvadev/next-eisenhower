'use client'
import useTasksData from '@/app/hooks/useTasksData'
import { useUser } from '@clerk/nextjs'
import { Task } from '@prisma/client'

export default function NotImportantNotUrgent() {
  const user = useUser()
  const [tasks] = useTasksData({ userId: user.user?.id, type: 'NOT_IMPORTANT_NOT_URGENT' })

  return (
    <div>
      {tasks && tasks.map((task: Task) => <h1 key={`task-${task.id}`}>{task.description}</h1>)}
    </div>
  )
}