import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onAdd: () => void;
}

export default function Input({ onAdd, ...props }: InputProps) {
  return (
    <div className="w-full flex justify-between">
      <input type="text" placeholder="Nome da tarefa" {...props} className="w-5/6 rounded-md p-2" />
      <PlusCircleIcon width={48} height={48} className="text-yellow-500 cursor-pointer" onClick={onAdd} />
    </div>
  )
}