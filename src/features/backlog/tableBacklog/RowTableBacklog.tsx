import { FC, ReactNode } from "react";
import { Task } from "../../../types/ITask";

interface PropsTable {
  task: Task;
  children: ReactNode;
}

const RowTableBacklog: FC<PropsTable> = ({ task, children }) => {
  return (
    <article className="flex items-center justify-around h-16 my-4 px-5 mx-3 bg-[#E2EAF7] rounded-2xl">
      <input
        className="block dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5 accent-(--secondary-color)"
        type="checkbox"
      />
      <span className="w-[150px] truncate">{task.titulo}</span>
      <span className="w-[200px] text-start truncate">{task.descripcion}</span>
      <span className="w-[200px]">{task.fechaLimite}</span>
      {children}
    </article>
  );
};

export default RowTableBacklog;
