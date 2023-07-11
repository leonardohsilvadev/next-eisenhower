'use client'
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onAdd: (value: string) => void;
}

export default function Input({ onAdd, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = () => {
    onAdd(inputRef.current!.value)
    inputRef.current!.value = ''
  }

  return (
    <div className="w-full flex justify-between">
      <input
        {...props}
        className="w-5/6 rounded-md p-2 text-md"
        ref={inputRef}
        type="text"
        placeholder="Nome da tarefa"
      />
      <PlusCircleIcon width={48} height={48} className="text-yellow-500 cursor-pointer" onClick={handleAdd} />
    </div>
  )
}