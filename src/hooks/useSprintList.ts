import { useShallow } from "zustand/shallow";
import { useStoreSprint } from "../store/useStoreSprints";
import { helpHttp } from "../helpers/helpHttp";
import { Sprint } from "../types/ISprint";

export const useSprintList = () => {
  const URL_SPRINT = import.meta.env.VITE_URL_SPRINT;
  const { sprints, addSprint, editSprint, removeSprint, setAllSprints } =
    useStoreSprint(
      useShallow((state) => ({
        ...state,
      }))
    );
  const getAllSprints = async () => {
    const { getAllItems } = helpHttp<Sprint[]>(URL_SPRINT);
    const items = await getAllItems();

    if (items) {
      setAllSprints(items);
    }
  };

  const createSprint = async (sprint: Sprint) => {
    const { createItem } = helpHttp<Sprint>(URL_SPRINT);
      const isOk = await createItem(sprint);
      console.log("Hola")

    if (isOk) {
      addSprint(sprint);
    }
  };

  const modifySprint = async (sprint: Sprint) => {
    const { updateItem } = helpHttp<Sprint>(URL_SPRINT);
    const isOk = await updateItem(sprint);

    if (isOk) {
      editSprint(sprint);
    }
  };

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
