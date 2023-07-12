'use client'
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Loader } from "..";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onAdd: (value: string) => void;
  isLoading?: boolean;
}

export default function Input({ onAdd, isLoading, ...props }: InputProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const handleAdd = () => {
    onAdd(inputValue)
    setInputValue('')
  }

  return (
    <div className="w-full flex justify-between">
      <input
        {...props}
        className="w-[90%] rounded-md p-2 text-md"
        value={inputValue}
        onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setInputValue(value)}
        type="text"
        placeholder="Nome da tarefa"
      />
      {
        inputValue !== '' && !isLoading &&
          <PlusCircleIcon
            width={36}
            height={36}
            className="text-yellow-500 cursor-pointer"
            onClick={handleAdd}
          />
      }
      {isLoading && <Loader />}
    </div>
  )
}