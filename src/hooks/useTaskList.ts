import { useShallow } from "zustand/shallow";
import { URL_BACKLOG } from "../helpers/constantes";
import { helpHttp } from "../helpers/helpHttp";
import { useStoreBacklog } from "../store/useStore";
import { Task } from "../types/task";

export const useTaskList = () => {
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
  const getAllTaskBacklog = async () => {
    const { getAllItems } = helpHttp<Task[]>(URL_BACKLOG);
    const items = await getAllItems();

    if (items) {
      setAllTaskBacklog(items);
    }
  };

  const createTaskBacklog = async (task: Task) => {
    const { createItem } = helpHttp<Task>(URL_BACKLOG);
    const isOk = await createItem(task);

    if (isOk) {
      addTaskBacklog(task);
    }
  };

  const modifyTaskBacklog = async (task: Task) => {
    const { updateItem } = helpHttp<Task>(URL_BACKLOG);
    const isOk = await updateItem(task);

    if (isOk) {
      editTaskBacklog(task);
    }
  };

  const deleteTaskBacklog = async (taskId: string) => {
    const { deleteItem } = helpHttp<Task>(URL_BACKLOG);
    const isOk = await deleteItem(taskId);

    if (isOk) {
      removeTaskBacklog(taskId);
    }
  };

  return {
    taskBacklog: backlog,
    getAllTaskBacklog,
    createTaskBacklog,
    modifyTaskBacklog,
    deleteTaskBacklog,
  };
};
