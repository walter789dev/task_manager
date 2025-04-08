import { useShallow } from "zustand/shallow";
import { Task } from "../types/ITask";
import { helpHttp } from "../helpers/helpHttp";
import { useStoreSprint } from "../store/useStoreSprints";
import { useParams } from "react-router";
import { Sprint } from "../types/ISprint";
import { useStoreActive } from "../store/useStoreActive";

export const useActiveSprint = () => {
  const params = useParams();
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;

  const { active, setActiveSprint } = useStoreActive(
    useShallow((state) => ({ ...state }))
  );
  const sprints = useStoreSprint((state) => state.sprints);

  const getActive = async () => {
    const { getItem } = helpHttp<Sprint>(URL_SPRINT);

    if (params.id) {
      const item = await getItem(params.id);
      if (item) setActiveSprint(item);
    }
  };

  const setActive = (id: string) => {
    const activeSprint = sprints.find((sprint) => sprint.id === id);
    if (activeSprint) setActiveSprint(activeSprint);
  };

  const addTask = async (task: Task) => {
    const { updateItem } = helpHttp(URL_SPRINT);
    const newActive = structuredClone(active);
    newActive?.tareas.push(task);

    if (newActive) {
      const req = await updateItem(newActive);
      if (req) setActiveSprint(newActive);
    }
  };

  const editTaskS = async (newTask: Task) => {
    const { updateItem } = helpHttp(URL_SPRINT);
    let newActive = structuredClone(active);
    const tareas = newActive?.tareas.map((task) =>
      task.id === newTask.id ? newTask : task
    );

    if (newActive) {
      const req = await updateItem({
        ...newActive,
        tareas,
      });
      if (req) setActiveSprint(newActive);
    }
  };

  return {
    active,
    getActive,
    setActive,
    addTask,
    editTaskS,
  };
};
