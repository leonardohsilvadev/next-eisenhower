'use client'
import useTasksData from '@/app/hooks/useTasksData'
import { useUser } from '@clerk/nextjs'
import { Task } from '@prisma/client'
import { Input, TaskITem } from '..'

export default function NotImportantUrgent() {
  const user = useUser()
  const [tasks] = useTasksData({ userId: user.user?.id, type: 'NOT_IMPORTANT_URGENT' })

  return (
    <div className="bg-stone-600 w-full flex flex-col items-center px-24">
      {tasks && tasks.map((task: Task) => <TaskITem key={`task-${task.id}`} task={task} />)}
      <Input onAdd={() => {}} />
    </div>
  )
}