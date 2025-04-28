import { helpHttp } from "../helpers/helpHttp";
import { useStoreBacklog } from "../store/useStoreBacklog";
import { useStoreSprint } from "../store/useStoreSprints";
import { Sprint, SprintList } from "../types/ISprint";
import { Backlog, Task } from "../types/ITask";
import { useActiveSprint } from "./useActiveSprint";
import { useTaskList } from "./useTaskList";

export const useMoveTask = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  const URL_BACKLOG = import.meta.env.VITE_URL_BACKLOG;

  const { updateItem } = helpHttp<SprintList>(URL_SPRINT);
  const { updateItem: updateBacklog, getAllItems } =
    helpHttp<Backlog>(URL_BACKLOG);
  // Operaciones para tareas del Backlog
  const { setAllTaskBacklog } = useTaskList();
  const { active, setActiveSprint } = useActiveSprint();

  const sprints = useStoreSprint((state) => state.sprints);
  const backlog = useStoreBacklog((state) => state.backlog);

  // ---------- Operaciones -------------- //

  // A partir del id obtengo la Sprint seleccionada
  // Elimino la tarea recibida del Backlog y la añado al Sprint seleccionado
  const moveTaskToSprint = async (id: string, task: Task) => {
    const backlogList = backlog.filter((taskOld) => taskOld.id !== task.id);
    setAllTaskBacklog(backlogList);

    const isOK = await updateBacklog({ tareas: backlogList });

    if (isOK) {
      const sprintList = sprints.map((sprint) =>
        sprint.id === id
          ? { ...sprint, tareas: [...sprint.tareas, task] }
          : sprint
      );

      if (sprintList) {
        await updateItem({ sprints: sprintList });
      }
    }
  };

  // Elimino la tarea del Sprint activo y la envio al Backlog
  const moveTaskToBacklog = async (task: Task) => {
    const cloneBacklog = await getAllItems();

    if (cloneBacklog) {
      cloneBacklog.tareas.push(task);
      await updateBacklog({ tareas: cloneBacklog.tareas });
    }

    const sprintActive = structuredClone(active);

    const newTareas = sprintActive?.tareas.filter(
      (tarea) => tarea.id !== task.id
    );

    setActiveSprint({ ...sprintActive, tareas: newTareas } as Sprint);

    const newSprints = sprints.map((sprint) =>
      sprint.id === active?.id ? { ...active, tareas: newTareas } : sprint
    );

    await updateItem({ sprints: newSprints } as SprintList);
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

    const newSprints = sprints.map((sprint) =>
      sprint.id === active?.id ? { ...active, tareas: newTasks } : sprint
    );

    if (newTasks) {
      updateItem({ sprints: newSprints } as SprintList);
    }
  };

  return {
    moveTaskToSprint,
    moveTaskState,
    moveTaskToBacklog,
  };
};
