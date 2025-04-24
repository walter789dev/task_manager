import { FC, ReactNode } from "react";
import { Task } from "../../../types/ITask";

interface PropsTable {
  task: Task;
  children: ReactNode;
}

// Componente visual que se encarga de definir las filas de la tabla del Backlog
const RowTableBacklog: FC<PropsTable> = ({ task, children }) => {
  return (
    <article className="flex items-center h-16 my-4 pl-20 mx-3 bg-[#E2EAF7] rounded-2xl">
      <span className="w-[300px] truncate">{task.titulo}</span>
      <span className="w-[300px] text-start truncate">{task.descripcion}</span>
      <div className="flex items-center ml-30 gap-10">{children}</div>
    </article>
  );
};

export default RowTableBacklog;
