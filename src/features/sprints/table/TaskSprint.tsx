import { FC, ReactNode } from "react";
import { Task } from "../../../types/ITask";
import MoveTask from '../MoveTask'
import { useMoveTask } from "../../../hooks/useMoveTask";

interface PropsTS {
  task: Task | undefined;
  title: string;
  children: ReactNode;
}

const TaskSprint: FC<PropsTS> = ({ task, children, title }) => {
    const {moveTaskToBacklog} = useMoveTask()
  return (
    <div className="mx-3 px-4 py-3 text-[14px] bg-[#E2EAF7] rounded-2xl">
      <div className="flex justify-between items-center">
        <div>
          <p className="block">
            <span className="font-semibold">Titulo: </span>
            {task?.titulo}
          </p>
          <p className="block">
            <span className="font-semibold">Descripción: </span>
            {task?.descripcion}
          </p>
          <p className="block">
            <span className="font-semibold">Fecha Limite: </span>
            {task?.fechaLimite}
          </p>
        </div>
        <MoveTask task={task!} title={title} />
      </div>
      <div className="flex mt-3 justify-between items-center">
        <button className="px-3 py-1 border rounded-xl cursor-pointer" onClick={() => moveTaskToBacklog(task!)}>
          Enviar al backlog
        </button>
        {children}
      </div>
    </div>
  );
};

export default TaskSprint;
