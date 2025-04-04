import { ChangeEvent, FC, useEffect, useState } from "react";
import { Input } from "../ui/Input";
import Button from "../ui/Button";
import { Task } from "../../types/ITask";

interface PropsForm {
  editTask: Task | null;
  closeModal: VoidFunction;
  handlerSubmit: (task: Task) => void;
}

const initial: Task = {
  titulo: "",
  descripcion: "",
  estado: "pendiente",
  fechaLimite: "",
};

const Form: FC<PropsForm> = ({ closeModal, editTask, handlerSubmit }) => {
  const [dataForm, setDataForm] = useState<Task>(initial);

  const handlerDataForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((state) => ({
      ...state,
      [name]: value,
    }));
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
          <Button event={() => closeModal()} text="Cancelar" type="secondary" />
          <Button
            event={() => handlerSubmit(dataForm)}
            text="Enviar Tarea"
            type="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
