import { FC } from "react";
import { useActiveSprint } from "../../../hooks/useActiveSprint";
import { Task } from "../../../types/ITask";
import ColumnStateTask from "./ColumnStateTask";
import TaskSprint from "./TaskSprint";
import Options from "../../../components/common/Options";

interface PropsSTask {
  setOpen: (task?: Task) => void;
}

const TableStateTask: FC<PropsSTask> = ({ setOpen }) => {
  const { active } = useActiveSprint();

  const taskPending = active?.tareas.filter(
    (task) => task.estado === "pendiente"
  );
  const taskProcess = active?.tareas.filter(
    (task) => task.estado === "en progreso"
  );
  const taskComplete = active?.tareas.filter(
    (task) => task.estado === "completado"
  );

  return (
    <section className="flex justify-around w-[90%] mx-auto">
      <ColumnStateTask title="Pendiente">
        {taskPending && taskPending.length ? (
          taskPending.map((task) => (
            <TaskSprint key={task.id} task={task}>
              <Options size="36" edit={() => setOpen(task)} remove={() => {}} />
            </TaskSprint>
          ))
        ) : (
          <p className="p-2 text-center">No hay tareas</p>
        )}
      </ColumnStateTask>
      <ColumnStateTask title="En Progreso">
        {taskProcess && taskProcess.length ? (
          taskProcess.map((task) => (
            <TaskSprint key={task.id} task={task}>
              <Options size="36" edit={() => setOpen(task)} remove={() => {}} />
            </TaskSprint>
          ))
        ) : (
          <p className="p-2 text-center">No hay tareas</p>
        )}
      </ColumnStateTask>
      <ColumnStateTask title="Completado">
        {taskComplete && taskComplete.length ? (
          taskComplete.map((task) => (
            <TaskSprint key={task.id} task={task}>
              <Options size="36" edit={() => setOpen(task)} remove={() => {}} />
            </TaskSprint>
          ))
        ) : (
          <p className="p-2 text-center">No hay tareas</p>
        )}
      </ColumnStateTask>
    </section>
  );
};

export default TableStateTask;
