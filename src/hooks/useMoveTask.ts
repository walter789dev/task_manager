import { helpHttp } from "../helpers/helpHttp";
import { Sprint } from "../types/ISprint";
import { Task } from "../types/ITask";
import { useActiveSprint } from "./useActiveSprint";
import { useTaskList } from "./useTaskList";

export const useMoveTask = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  const { getItem, updateItem } = helpHttp<Sprint>(URL_SPRINT);
  // Operaciones para tareas del Backlog
  const { deleteTaskBacklog, createTaskBacklog } = useTaskList();
  // Operaciones del Sprint Activo
  const { active, deleteTaskS } = useActiveSprint();

  // ---------- Operaciones -------------- //

  // A partir del id obtengo la Sprint seleccionada
  // Elimino la tarea recibida del Backlog y la añado al Sprint seleccionado
  const moveTaskToSprint = async (id: string, task: Task) => {
    const sprint = await getItem(id);

    if (sprint) {
      sprint?.tareas.push(task);
      const sendInfo = await updateItem(sprint);
      if (sendInfo) {
        deleteTaskBacklog(task.id!);
      }
    }
  };

  // Elimino la tarea del Sprint activo y la envio al Backlog
  const moveTaskToBacklog = async (task: Task) => {
    await deleteTaskS(task);
    await createTaskBacklog(task);
  };

  // Dependiendo la direccion recibida modifico el state de la tarea.
  const moveTaskState = async (
    id: string,
    status: string,
    direction: "Left" | "Right"
  ) => {
    let state = "";

    if (status === "pendiente" || status === "completo") {
      state = "en progreso";
    } else {
      state = direction === "Left" ? "pendiente" : "completado";
    }
    // Mapeo para modificar el estado de la tarea
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
    moveTaskToBacklog,
  };
};
