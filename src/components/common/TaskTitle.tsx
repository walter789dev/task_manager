import { FC } from "react";
import Button from "../ui/Button";

interface PropsTitle {
  title: string;
  openModal: VoidFunction;
}

const TaskTitle: FC<PropsTitle> = ({ title, openModal }) => {
  return (
    <section className="flex justify-between items-center ml-10 mr-20 pt-8 pb-6">
      <h2 className="text-2xl font-semibold">Tareas {title}</h2>
      <div className="flex gap-3">
        <Button event={() => openModal()} text="Añadir Tarea" type="primary" />
      </div>
    </section>
  );
};

export default TaskTitle;
