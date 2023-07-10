import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function Input() {
  return (
    <div className="w-full flex justify-between px-24">
      <input type="text" placeholder="Digite a tarefa..." className="w-5/6 rounded-md p-2" />
      <PlusCircleIcon width={48} height={48} className="text-yellow-500 cursor-pointer" />
    </div>
  )
}