import { useShallow } from "zustand/shallow";
import { useStoreSprint } from "../store/useStoreSprints";
import { helpHttp } from "../helpers/helpHttp";
import { Sprint } from "../types/ISprint";

export const useSprintList = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  // Operaciones de la Store para la lista de Sprints
  const { sprints, addSprint, editSprint, removeSprint, setAllSprints } =
    useStoreSprint(
      useShallow((state) => ({
        ...state,
      }))
    );

  // Obtiene todos los Sprints
  const getAllSprints = async () => {
    const { getAllItems } = helpHttp<Sprint[]>(URL_SPRINT);
    const items = await getAllItems();

    if (items) {
      setAllSprints(items);
    }
  };

  // Permite crear un Sprint
  const createSprint = async (sprint: Sprint) => {
    const { createItem } = helpHttp<Sprint>(URL_SPRINT);
    const isOk = await createItem(sprint);

    if (isOk) {
      addSprint(sprint);
    }
  };

  // Permite actualizar un Sprint en especifico
  const modifySprint = async (sprint: Sprint) => {
    const { updateItem } = helpHttp<Sprint>(URL_SPRINT);
    const isOk = await updateItem(sprint);

    if (isOk) {
      editSprint(sprint);
    }
  };

  // Elimina un sprint mediante su id
  const deleteSprint = async (sprintId: string) => {
    const { deleteItem } = helpHttp<Sprint>(URL_SPRINT);
    const isOk = await deleteItem(sprintId);

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
