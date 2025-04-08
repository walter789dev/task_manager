import { helpHttp } from "../helpers/helpHttp";
import { Sprint } from "../types/ISprint";
import { Task } from "../types/ITask";
import { useActiveSprint } from "./useActiveSprint";
import { useTaskList } from "./useTaskList";

export const useMoveTask = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  const { deleteTaskBacklog } = useTaskList();
  const { active } = useActiveSprint();

  const moveTaskToSprint = async (id: string, task: Task) => {
    const { getItem, updateItem } = helpHttp<Sprint>(URL_SPRINT);
    const sprint = await getItem(id);

    if (sprint) {
      sprint?.tareas.push(task);
      const sendInfo = await updateItem(sprint);
      if (sendInfo) {
        deleteTaskBacklog(task.id!);
      }
    }
  };

  const moveTaskState = async (
    id: string,
    status: string,
    direction: "Left" | "Right"
  ) => {
    const { updateItem } = helpHttp<Sprint>(URL_SPRINT);
    let state = "";

    if (status === "pendiente" || status === "completo") {
      state = "en progreso";
    } else {
      state = direction === "Left" ? "pendiente" : "completado";
    }

    const newTasks = active?.tareas.map((task) =>
      task.id === id ? ({ ...task, estado: state } as Task) : task
    );

    if (newTasks) {
      updateItem({ ...active, tareas: newTasks } as Sprint);
    }
  };

  return {
    moveTaskToSprint,
    moveTaskState,
  };
};
