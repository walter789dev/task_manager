import { useShallow } from "zustand/shallow";
import { Task } from "../types/ITask";
import { helpHttp } from "../helpers/helpHttp";
import { Sprint } from "../types/ISprint";
import { useStoreActive } from "../store/useStoreActive";

export const useActiveSprint = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  const { getItem, updateItem } = helpHttp(URL_SPRINT);

  // Operaciones de la Store del Sprint Activo
  const { active, setActiveSprint } = useStoreActive(
    useShallow((state) => ({ ...state }))
  );

  // Me permite asignar el sprint activo mediante :id obtenido de la URL
  const getActive = async (id: string) => {
    const item = await getItem(id);
    if (item) setActiveSprint(item as Sprint);
  };

  // + AddTask: Me permite añadir una tarea al Sprint activo.
  // - newActive: Creo una copia del Sprint actual para no modificar el Sprint
  const addTask = async (task: Task) => {
    const newActive = structuredClone(active);
    newActive?.tareas.push(task);

    if (newActive) {
      const req = await updateItem(newActive);
      if (req) setActiveSprint(newActive);
    }
  };

  // ediTask: Me permite actualizar una tarea del Sprint activo.
  // - newActive: Creo una copia del Sprint actual para no modificar el Sprint
  const editTaskS = async (newTask: Task) => {
    let newActive = structuredClone(active);
    // Obtengo un nuevo arreglo que actualiza la tarea que coincide con la recibida
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

  // deleteTask: Me permite eliminar una tarea del sprint activo.
  // - newActive: Creo una copia del Sprint actual para no modificar el Sprint
  const deleteTaskS = async (newTask: Task) => {
    let newActive = structuredClone(active);
    // Filtro aquella tarea que no contenga el mismo id de la tarea recibida.
    const tareas = newActive?.tareas.filter((task) => task.id !== newTask.id);

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
    addTask,
    editTaskS,
    deleteTaskS,
  };
};
