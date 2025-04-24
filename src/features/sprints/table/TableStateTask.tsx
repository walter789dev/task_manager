import { FC, useState } from "react";
import { Task } from "../../../types/ITask";
import ColumnStateTask from "./ColumnStateTask";
import TaskSprint from "./TaskSprint";
import Options from "../../../components/common/Options";
import { Sprint } from "../../../types/ISprint";
import ModalData from "../../../components/ui/ModalData";
import { useActiveSprint } from "../../../hooks/useActiveSprint";
import Swal from "sweetalert2";

interface PropsSTask {
  setOpen: (task?: Task) => void;
  active: Sprint | null;
}

// Componente visual que se encarga de mostrar las tareas del Sprint Activo.
const TableStateTask: FC<PropsSTask> = ({ setOpen, active }) => {
  // Visualizacion de la tarea del Sprint
  const [showData, setShowData] = useState<Task | null>(null);
  // Operacion del Sprint Activo
  const { deleteTaskS } = useActiveSprint();

  if (active == null) return;

  // Objeto dedicado a filtrar las tareas por el estado de la misma.
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

  // Modal de SweetAlert que se encarga de elimninar una tarea
  const handlerDeleteTask = (task: Task) => {
    Swal.fire({
      title: "¿Estas seguro/a de eliminar esta tarea?",
      text: "Una vez eliminada, no se podra recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "¡Si, quiero eliminarla!",
      cancelButtonText: "Quizas más tarde",
      confirmButtonColor: "#3a5b9d",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTaskS(task);
      }
    });
  };

  return (
    <>
      <section className="flex justify-around w-[90%] mx-auto">
        {listTask &&
          listTask.map(({ nombre, tareas }) => (
            <ColumnStateTask key={nombre} title={nombre}>
              {tareas.length ? (
                tareas.map((task) => (
                  <TaskSprint key={task.id} title={nombre} task={task}>
                    <Options
                      size="36"
                      see={() => setShowData(task)}
                      edit={() => setOpen(task)}
                      remove={() => handlerDeleteTask(task)}
                    />
                  </TaskSprint>
                ))
              ) : (
                <p className="p-2 text-center">No hay tareas</p>
              )}
            </ColumnStateTask>
          ))}
      </section>
      {showData && (
        <ModalData title="Tarea" data={showData} close={setShowData} />
      )}
    </>
  );
};

export default TableStateTask;
