import { Task, TasksEnum } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";

type TasksDataProps = {
  authorId: string | undefined
  type: TasksEnum
}

const useTasksData = ({ authorId, type }: TasksDataProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = useCallback(() => {
    fetch(`${process.env.API_URL}/api/tasks/${authorId}/${type}`)
    .then((res) => res.json())
    .then((data) => setTasks(data))
  }, [authorId, type])

  const createTask = (body: any) => {
    fetch(`${process.env.API_URL}/api/tasks`, { method: 'POST', body: JSON.stringify(body) })
      .then((res) => res.json())
      .then(() => getTasks())
  }

  useEffect(() => {
    if (authorId) getTasks()
  }, [authorId, type, getTasks]);

  return { tasks, getTasks, createTask };
};

export default useTasksData;