import { FC, useState } from "react";
import { Task } from "../../../types/ITask";
import ColumnStateTask from "./ColumnStateTask";
import TaskSprint from "./TaskSprint";
import Options from "../../../components/common/Options";
import { Sprint } from "../../../types/ISprint";
import ModalData from "../../../components/ui/ModalData";

interface PropsSTask {
  setOpen: (task?: Task) => void;
  active: Sprint | null;
}

const TableStateTask: FC<PropsSTask> = ({ setOpen, active }) => {
  const [showData, setShowData] = useState<Task | null>(null);

  if (active == null) return;

  const listTask = [
    {
      nombre: "Pendiente",
      tareas: active?.tareas.filter((task) => task.estado === "pendiente"),
    },
    {
      nombre: "En Progreso",
      tareas: active?.tareas.filter((task) => task.estado === "en progreso"),
    },
    {
      nombre: "Completado",
      tareas: active?.tareas.filter((task) => task.estado === "completado"),
    },
  ];

  return (
    <>
      <section className="flex justify-around w-[90%] mx-auto">
        {listTask &&
          listTask.map(({ nombre, tareas }) => (
            <ColumnStateTask title={nombre}>
              {tareas.length ? (
                tareas.map((task) => (
                  <TaskSprint key={task.id} title={nombre} task={task}>
                    <Options
                      size="36"
                      see={() => setShowData(task)}
                      edit={() => setOpen(task)}
                      remove={() => {}}
                    />
                  </TaskSprint>
                ))
              ) : (
                <p className="p-2 text-center">No hay tareas</p>
              )}
            </ColumnStateTask>
          ))}
      </section>
      {showData && <ModalData title="Tarea" data={showData} close={setShowData} />}
    </>
  );
};

export default TableStateTask;
