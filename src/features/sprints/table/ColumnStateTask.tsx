import { FC } from "react";
import TaskSprint from "./TaskSprint";
import { Task } from "../../../types/ITask";

interface PropsColumn {
  title: string;
  tasks: Task[] | undefined;
}

const ColumnStateTask: FC<PropsColumn> = ({ title, tasks }) => {
  return (
    <div className="w-[30%] h-[65vh] bg-[#FAFAFA]">
      <h3 className="py-2 text-center font-semibold bg-[#F0F0F0] rounded-t-2xl">
        {title}
      </h3>
      <section className="flex flex-col mt-3 gap-5">
        {tasks && tasks.length ? (
          tasks.map((task) => <TaskSprint key={task.id} task={task} />)
        ) : (
          <p className="p-2 text-center">No hay tareas</p>
        )}
      </section>
    </div>
  );
};

export default ColumnStateTask;
