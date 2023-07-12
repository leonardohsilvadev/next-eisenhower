import { Task, TasksEnum } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

type TasksDataProps = {
  authorId: string | undefined
  type: TasksEnum
}

const useTasksData = ({ authorId, type }: TasksDataProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getTasks = useCallback(() => {
    setIsLoading(true)

    fetch(`api/tasks/${authorId}/${type}`)
    .then((res) => res.json())
    .then((data) => setTasks(data))
    .finally(() => setIsLoading(false))
  }, [authorId, type])

  const createTask = (body: any) => {
    setIsLoading(true)
    fetch(`api/task`, { method: 'POST', body: JSON.stringify(body) })
      .then((res) => res.json())
      .then(() => getTasks())
  }

  const deleteTasks = () => {
    setIsLoading(true)

    fetch(`api/tasks/${authorId}/${type}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then(() => getTasks())
  }

  const deleteTask = (id: string) => {
    setIsLoading(true)

    fetch(`api/task/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then(() => getTasks())
  }

  const updateTask = (body: any) => {
    setIsLoading(true)

    fetch(`api/task`, { method: 'PUT', body: JSON.stringify(body) })
    .then((res) => res.json())
    .then(() => getTasks())
  }

  useEffect(() => {
    if (authorId) getTasks()
  }, [authorId, type, getTasks]);

  return {
    tasks,
    isLoading,
    getTasks,
    createTask,
    deleteTask,
    deleteTasks,
    updateTask
  };
};

export default useTasksData;