import { ChangeEvent, FC, useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { Sprint } from "../../types/ISprint";
import { Input } from "../../components/ui/Input";

interface PropsNForm {
  editSprint: Sprint | null;
  closeModal: () => void;
  handlerSubmit: (sprint: Sprint) => void;
}

const initial = {
  nombre: "",
  fechaInicio: "",
  fechaFinal: "",
  tareas: [],
};

const FormNavigate: FC<PropsNForm> = ({
  editSprint,
  closeModal,
  handlerSubmit,
}) => {
  const [dataForm, setDataForm] = useState<Sprint>(initial);

  const handlerDataForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (editSprint) setDataForm(editSprint);
  }, [editSprint]);
  return (
    <div className="absolute flex justify-center items-center inset-0 bg-[#0003] z-30">
      <form className="flex flex-col gap-4 w-[25%] p-7 bg-white rounded-2xl scale-up-center">
        <h2 className="text-2xl text-center font-semibold">
          {editSprint ? "Editar" : "Añadir"} Sprint
        </h2>
        <Input
          name="nombre"
          value={dataForm.nombre}
          placeholder="Nombre de la Sprint"
          onChange={handlerDataForm}
        />
        <Input
          type="date"
          name="fechaInicio"
          value={dataForm.fechaInicio}
          text="fecha de inicio"
          onChange={handlerDataForm}
        />

        <Input
          type="date"
          name="fechaFinal"
          value={dataForm.fechaFinal}
          text="fecha de fin"
          onChange={handlerDataForm}
        />

        <div className="flex justify-center mt-3 gap-10">
          <Button event={() => closeModal()} text="Cancelar" type="secondary" />
          <Button
            event={() => handlerSubmit(dataForm)}
            text="Enviar Sprint"
            type="primary"
          />
        </div>
      </form>
    </div>
  );
};

export default FormNavigate;
