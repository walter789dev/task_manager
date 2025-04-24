import { useState } from "react";
import { IModal } from "../types/IModal";
import { Sprint } from "../types/ISprint";
import { Task } from "../types/ITask";

// Hook que maneja la visualizacion del modal Formulario
export const useModal = () => {
  const [modal, setModal] = useState<IModal>({
    open: false,
    editTask: null,
  });

  // Se encarga de recibir la informacion de la tarea / sprint seleccionado.
  const setOpen = (element?: Task | Sprint) => {
    setModal((state) => ({ open: !state.open, editTask: element || null }));
  };

  return {
    open: modal.open,
    editTask: modal.editTask,
    setOpen,
  };
};
