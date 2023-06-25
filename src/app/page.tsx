import { SignOutButton } from "@clerk/nextjs"
import { prisma } from "./lib/prisma"

export default async function Home() {
  const tasks = await prisma.task.findMany()

  console.log(tasks)

  return (
    <div className="flex items-center justify-center">
      <SignOutButton />
    </div>
  )
}
