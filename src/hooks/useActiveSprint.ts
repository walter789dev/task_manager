import { useShallow } from "zustand/shallow";
import { Task } from "../types/ITask";
import { helpHttp } from "../helpers/helpHttp";
import { useStoreActive } from "../store/useStoreActive";
import { SprintList } from "../types/ISprint";
import { useStoreSprint } from "../store/useStoreSprints";

export const useActiveSprint = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  const { getAllItems, updateItem } = helpHttp<SprintList>(URL_SPRINT);

  // Operaciones de la Store del Sprint Activo
  const sprintsList = useStoreSprint((state) => state.sprints);
  const { active, setActiveSprint } = useStoreActive(
    useShallow((state) => ({ ...state }))
  );

  // Me permite asignar el sprint activo mediante :id obtenido de la URL
  const getActive = async (id: string) => {
    const sprintList = await getAllItems();
    const sprints = sprintList?.sprints;

    if (sprints) {
      const sprintActive = sprints.find((sprint) => sprint.id === id);
      if (sprintActive) setActiveSprint(sprintActive);
    }
  };

  // + AddTask: Me permite añadir una tarea al Sprint activo.
  // - newActive: Creo una copia del Sprint actual para no modificar el Sprint
  const addTask = async (task: Task) => {
    const newActive = structuredClone(active);
    newActive?.tareas.push(task);

    const newSprints = sprintsList.map((sprint) =>
      sprint.id === newActive?.id ? newActive : sprint
    );

    if (newSprints && newActive) {
      const req = await updateItem({ sprints: newSprints } as SprintList);
      if (req) setActiveSprint(newActive);
    }
  };

  // ediTask: Me permite actualizar una tarea del Sprint activo.
  // - newActive: Creo una copia del Sprint actual para no modificar el Sprint
  const editTaskS = async (newTask: Task) => {
    let newActive = structuredClone(active);

    const tareas = newActive?.tareas.map((task) =>
      task.id === newTask.id ? newTask : task
    );

    const newSprints = sprintsList.map((sprint) =>
      sprint.id === newActive?.id ? { ...newActive, tareas } : sprint
    );

    if (newActive && tareas) {
      const req = await updateItem({ sprints: newSprints } as SprintList);
      if (req) setActiveSprint({ ...newActive, tareas });
    }
  };

  // deleteTask: Me permite eliminar una tarea del sprint activo.
  // - newActive: Creo una copia del Sprint actual para no modificar el Sprint
  const deleteTaskS = async (newTask: Task) => {
    let newActive = structuredClone(active);
    // Filtro aquella tarea que no contenga el mismo id de la tarea recibida.
    const tareas = newActive?.tareas.filter((task) => task.id !== newTask.id);
    const newSprints = sprintsList.map((sprint) =>
      sprint.id === newActive?.id ? { ...newActive, tareas } : sprint
    );

    if (newActive && tareas) {
      const req = await updateItem({ sprints: newSprints } as SprintList);
      if (req) setActiveSprint({ ...newActive, tareas });
    }
  };

  return {
    active,
    setActiveSprint,
    getActive,
    addTask,
    editTaskS,
    deleteTaskS,
  };
};
