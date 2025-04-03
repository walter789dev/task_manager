import { useActiveSprint } from "../../../hooks/useActiveSprint";
import ColumnStateTask from "./ColumnStateTask";

const TableStateTask = () => {
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
      <ColumnStateTask title="Pendiente" tasks={taskPending} />
      <ColumnStateTask title="En Progreso" tasks={taskProcess} />
      <ColumnStateTask title="Completado" tasks={taskComplete} />
    </section>
  );
};

export default TableStateTask;
