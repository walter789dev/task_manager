import { useShallow } from "zustand/shallow";
import { useStoreSprint } from "../store/useStoreSprints";
import { helpHttp } from "../helpers/helpHttp";
import { Sprint, SprintList } from "../types/ISprint";

export const useSprintList = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  // Operaciones de la Store para la lista de Sprints
  const { getAllItems, updateItem } = helpHttp<SprintList>(URL_SPRINT);

  const { sprints, addSprint, editSprint, removeSprint, setAllSprints } =
    useStoreSprint(
      useShallow((state) => ({
        ...state,
      }))
    );

  // Obtiene todos los Sprints
  const getAllSprints = async () => {
    const items = await getAllItems();

    if (items) {
      setAllSprints(items.sprints);
    }
  };

  // Permite crear un Sprint
  const createSprint = async (sprint: Sprint) => {
    const isOk = await updateItem({ sprints: [...sprints, sprint] });

    if (isOk) {
      addSprint(sprint);
    }
  };

  // Permite actualizar un Sprint en especifico
  const modifySprint = async (sprint: Sprint) => {
    const cloneSprints = sprints.map((sprintOld) =>
      sprintOld.id === sprint.id ? sprint : sprintOld
    );
    const isOk = await updateItem({ sprints: cloneSprints });

    if (isOk) {
      editSprint(sprint);
    }
  };

  // Elimina un sprint mediante su id
  const deleteSprint = async (sprintId: string) => {
    const cloneBacklog = sprints.filter(
      (sprintOld) => sprintOld.id !== sprintId
    );
    const isOk = await updateItem({ sprints: cloneBacklog });

    if (isOk) {
      removeSprint(sprintId);
    }
  };

  return {
    sprints,
    getAllSprints,
    createSprint,
    modifySprint,
    deleteSprint,
  };
};
