import { FC, useEffect } from "react";
import { Input } from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useForm } from "../../hooks/useForm";
import { Task } from "../../types/task";
import { useTaskList } from "../../hooks/useTaskList";

interface PropsForm {
  editTask: Task | null | undefined;
  closeModal: VoidFunction;
}

const initial: Task = {
  titulo: "",
  descripcion: "",
  fechaInicio: "",
  fechaFinal: "",
};

const ModalForm: FC<PropsForm> = ({ closeModal, editTask }) => {
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
        <div className="flex gap-17">
          <Input
            type="date"
            name="fechaInicio"
            value={dataForm.fechaInicio}
            text="fecha inicial"
            onChange={handlerDataForm}
          />
          <Input
            type="date"
            name="fechaFinal"
            value={dataForm.fechaFinal}
            text="fecha final"
            onChange={handlerDataForm}
          />
        </div>
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

export default ModalForm;
