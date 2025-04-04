import { FC, ReactNode } from "react";
import { Task } from "../../../types/ITask";

interface PropsTS {
  task: Task | undefined;
  children: ReactNode;
}

const TaskSprint: FC<PropsTS> = ({ task, children }) => {
  return (
    <div className="mx-3 px-4 py-3 text-[14px] bg-[#E2EAF7] rounded-2xl">
      <span className="block">Titulo: {task?.titulo}</span>
      <span className="block">Descripción: {task?.descripcion}</span>
      <span className="block">Fecha Limite: {task?.fechaLimite}</span>
      <div className="flex mt-3 justify-between items-center">
        <button className="px-3 py-1 border rounded-xl cursor-pointer">
          Enviar al backlog
        </button>
        {children}
      </div>
    </div>
  );
};

export default TaskSprint;
