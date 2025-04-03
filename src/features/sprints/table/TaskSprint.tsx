import { FC } from "react";
import Options from "../../../components/common/Options";
import { Task } from "../../../types/ITask";

interface PropsTS {
  task: Task | undefined;
}

const TaskSprint: FC<PropsTS> = ({ task }) => {
  return (
    <div className="mx-3 px-4 py-3 text-[14px] bg-[#E2EAF7] rounded-2xl">
      <span className="block">Titulo: {task?.titulo}</span>
      <span className="block">Descripción: {task?.descripcion}</span>
      <span className="block">Fecha Limite: {task?.fechaLimite}</span>
      <div className="flex mt-3 justify-between items-center">
        <button className="px-3 py-1 border rounded-xl cursor-pointer">
          Enviar al backlog
        </button>
        <Options size="36" edit={() => {}} remove={() => {}} />
      </div>
    </div>
  );
};

export default TaskSprint;
