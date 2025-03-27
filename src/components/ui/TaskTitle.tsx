import { FC } from "react";
import Button from "./Button";

interface PropsTitle {
  send?: boolean;
}

const TaskTitle: FC<PropsTitle> = ({ send = false }) => {
  return (
    <section className="flex justify-between items-center px-10 py-8">
      <h2 className="text-[25px] font-semibold">Tareas</h2>
      <div className="flex gap-3">
        {send && <Button text="Enviar a" type="secondary" />}
        <Button text="Añadir Tarea" type="primary" />
      </div>
    </section>
  );
};

export default TaskTitle;
