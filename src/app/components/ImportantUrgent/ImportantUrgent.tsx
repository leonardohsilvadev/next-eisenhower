'use client'
import useTasksData from '@/app/hooks/useTasksData'
import { useUser } from '@clerk/nextjs'
import { PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Task } from '@prisma/client'
import Input from '../Input/Input'

export default function ImportantUrgent() {
  const user = useUser()
  const [tasks] = useTasksData({ userId: user.user?.id, type: 'IMPORTANT_URGENT' })


  return (
    <div className="bg-stone-600 w-full flex flex-col items-center">
      {tasks && tasks.map((task: Task) => (
        <div key={`task-${task.id}`} className="w-4/5 flex items-center justify-between border-b-2 border-dashed mb-8">
          <h1 className="py-3 text-2xl text-white">{task.description}</h1>
          <div className="flex flex-row justify-between w-[10%]">
            <PencilIcon width={24} height={24} className="text-yellow-500 cursor-pointer" />
            <TrashIcon width={24} height={24} className="text-red-600 cursor-pointer" />
          </div>
        </div>
      ))}
      <Input />
    </div>
  )
}