import { useState } from "react";
import { IModal } from "../types/IModal";
import { Sprint } from "../types/ISprint";
import { Task } from "../types/ITask";

export const useModal = () => {
  const [modal, setModal] = useState<IModal>({
    open: false,
    editTask: null,
  });

  const setOpen = (element?: Task | Sprint) => {
    setModal((state) => ({ open: !state.open, editTask: element || null }));
  };

  return {
    open: modal.open,
    editTask: modal.editTask,
    setOpen,
  };
};
