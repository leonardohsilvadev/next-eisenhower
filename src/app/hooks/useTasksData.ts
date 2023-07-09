import { Task, TasksEnum } from "@prisma/client";
import { useEffect, useState } from "react";

type TasksDataProps = {
  userId: string | undefined
  type: TasksEnum
}

const useTasksData = ({ userId, type }: TasksDataProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/tasks/${userId}/${type}`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [userId, type]);

  return [tasks];
};

export default useTasksData;