import { useShallow } from "zustand/shallow";
import { useStoreActive } from "../store/useStoreActive";
import { Task } from "../types/ITask";
import { helpHttp } from "../helpers/helpHttp";
import { useStoreSprint } from "../store/useStoreSprints";

export const useActiveSprint = () => {
  const URL_SPRINT = import.meta.env.URL_SPRINT;
  const sprints = useStoreSprint((state) => state.sprints);
  const { active, setActiveSprint } = useStoreActive(
    useShallow((state) => ({ ...state }))
  );

  const setActive = (id: string) => {
    const activeSprint = sprints.find((sprint) => sprint.id === id);
    if (activeSprint) setActiveSprint(activeSprint);
  };

  const addTask = async (task: Task) => {
    const { createItem } = helpHttp(URL_SPRINT + active?.id);
    const newActive = structuredClone(active);
    newActive?.tareas.push(task);

    if (newActive) {
      const req = await createItem(newActive);
      if (req) setActiveSprint(newActive);
    }
  };

  return {
    active,
    setActive,
    addTask,
  };
};
