import { useShallow } from "zustand/shallow";
import { helpHttp } from "../helpers/helpHttp";
import { useStoreBacklog } from "../store/useStoreBacklog";
import { Backlog, Task } from "../types/ITask";

export const useTaskList = () => {
  const URL_BACKLOG = import.meta.env.VITE_URL_BACKLOG;
  const { getAllItems, updateItem } = helpHttp<Backlog>(URL_BACKLOG);
  // Operaciones de la Store de tareas del Backlog
  const {
    backlog,
    setAllTaskBacklog,
    addTaskBacklog,
    editTaskBacklog,
    removeTaskBacklog,
  } = useStoreBacklog(
    useShallow((state) => ({
      ...state,
    }))
  );

  // Se encarga de obtener todas las tareas del backlog
  const getAllTaskBacklog = async () => {
    const items = await getAllItems();

    if (items) {
      setAllTaskBacklog(items.tareas);
    }
  };

  // Se encarga de la creación de una tarea en el backlog
  const createTaskBacklog = async (task: Task) => {
    const isOk = await updateItem({ tareas: [...backlog, task] });

    if (isOk) {
      addTaskBacklog(task);
    }
  };

  // Se encarga de actualizar una tarea en el backlog
  const modifyTaskBacklog = async (task: Task) => {
    const cloneBacklog = backlog.map((taskOld) =>
      taskOld.id === task.id ? task : taskOld
    );
    const isOk = await updateItem({ tareas: cloneBacklog });

    if (isOk) {
      editTaskBacklog(task);
    }
  };

  // Se encarga de eliminar una tarea en el backlolg
  const deleteTaskBacklog = async (taskId: string) => {
    const cloneBacklog = backlog.filter((taskOld) => taskOld.id !== taskId);
    const isOk = await updateItem({ tareas: cloneBacklog });

    if (isOk) {
      removeTaskBacklog(taskId);
    }
  };

  return {
    taskBacklog: backlog,
    setAllTaskBacklog,
    getAllTaskBacklog,
    createTaskBacklog,
    modifyTaskBacklog,
    deleteTaskBacklog,
  };
};
