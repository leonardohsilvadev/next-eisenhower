import { Task } from "@prisma/client";
import { cache, use } from "react";

const getData = cache(() => 
  fetch("http://localhost:3000/api/tasks/user_2RezOACDnGZ7S8a8kLbr4KQXBvo/URGENT_IMPORTANT").then((res) => res.json())
)

export default function Home() {
  let tasks = use<Task[]>(getData())
  // const tasks = await prisma.task.findMany({
  //   where: {
  //     authorId: 'user_2RezOACDnGZ7S8a8kLbr4KQXBvo'
  //   },
  // });
  // const response = await fetch("http://localhost:3000/api/tasks/user_2RezOACDnGZ7S8a8kLbr4KQXBvo")
  // const tasks = await response.json()

  // const tasks = cache(() =>
  // fetch("http://localhost:3000/api/tasks/user_2RezOACDnGZ7S8a8kLbr4KQXBvo").then((res) => console.log(res.json()))
  // );

  console.log('data: ', tasks)

  return (
    <div className="flex flex-row bg-slate-600 h-[90%]">
      <div className="w-[2%] bg-red-500 flex flex-row items-center">
        <div className="flex flex-col justify-around bg-green-500 w-full h-full">
        <h1 className="text-3xl [writing-mode:vertical-lr] rotate-180">Importante</h1>
        <h1 className="text-3xl [writing-mode:vertical-lr] rotate-180">Não Importante</h1>
        </div>
      </div>
      <div className="w-[98%] bg-blue-500">
        <div className="flex flex-row justify-around bg-red-500 w-full h-[5%]">
          <h1 className="text-3xl">Urgente</h1>
          <h1 className="text-3xl">Não Urgente</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between bg-purple-500 w-full h-[95%]">
          <div className="flex justify-center border-r-2 border-b-2">
            {/* UrgentImportant */}
            <h1>Quadrant 1</h1>
          </div>
          <div className="flex justify-center border-l-2 border-b-2">
            {/* NotUrgentImportant */}
            <h1>Quadrant 2</h1>
          </div>
          <div className="flex justify-center border-r-2 border-t-2">
            {/* UrgentNotImportant */}
            <h1>Quadrant 3</h1>
          </div>
          <div className="flex justify-center border-l-2 border-t-2">
            {/* NotUrgentNotImportant */}
            <h1>Quadrant 4</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
