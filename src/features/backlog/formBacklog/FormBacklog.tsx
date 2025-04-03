import { FC, useEffect } from "react";
import { Input } from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { useForm } from "../../../hooks/useForm";
import { Task } from "../../../types/ITask";
import { useTaskList } from "../../../hooks/useTaskList";

interface PropsForm {
  editTask: Task | null | undefined;
  closeModal: VoidFunction;
}

const initial: Task = {
  titulo: "",
  descripcion: "",
  estado: "pendiente",
  fechaLimite: "",
};

const FormBacklog: FC<PropsForm> = ({ closeModal, editTask }) => {
  const { dataForm, setDataForm, handlerDataForm } = useForm(initial);
  const { createTaskBacklog, modifyTaskBacklog } = useTaskList();

  const handlerSubmitData = () => {
    if (!("id" in dataForm)) {
      createTaskBacklog({
        ...dataForm,
        id: Date.now().toString(),
      });
    } else {
      modifyTaskBacklog(dataForm);
    }
    closeModal();
  };

  useEffect(() => {
    if (editTask) setDataForm(editTask);
  }, [editTask]);

  return (
    <div className="absolute flex justify-center items-center inset-0 bg-[#0003] z-30">
      <form className="flex flex-col gap-4 w-[25%] p-7 bg-white rounded-2xl scale-up-center">
        <h2 className="text-2xl text-center font-semibold">
          {editTask ? "Editar" : "Añadir"} Tarea
        </h2>
        <Input
          name="titulo"
          value={dataForm.titulo}
          placeholder="Nombre de la tarea"
          onChange={handlerDataForm}
        />
        <Input
          name="descripcion"
          value={dataForm.descripcion}
          placeholder="Descripción de la tarea"
          onChange={handlerDataForm}
        />

        <Input
          type="date"
          name="fechaLimite"
          value={dataForm.fechaLimite}
          text="fecha limite"
          onChange={handlerDataForm}
        />

        <div className="flex justify-center mt-3 gap-10">
          <Button event={closeModal} text="Cancelar" type="secondary" />
          <Button
            event={handlerSubmitData}
            text="Enviar Tarea"
            type="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default FormBacklog;
