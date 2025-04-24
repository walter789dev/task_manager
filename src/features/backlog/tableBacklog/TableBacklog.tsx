import { FC, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Task } from "../../../types/ITask";
import RowTableBacklog from "./RowTableBacklog";
import Options from "../../../components/common/Options";
import { useTaskList } from "../../../hooks/useTaskList";
import ModalData from "../../../components/ui/ModalData";
import SendTask from "../SendTask";

interface PropsTable {
  setOpen: (task?: Task) => void;
}

const TableBacklog: FC<PropsTable> = ({ setOpen }) => {
  // Visualizacion de la informacion de la tarea
  const [showData, setShowData] = useState<Task | null>(null);
  // Opeaciones de las tareas del Backlog
  const { taskBacklog, getAllTaskBacklog, deleteTaskBacklog } = useTaskList();

  // Modal de SweetAlert que se encarga de elimninar una tarea
  const handlerDeleteTask = (id: string) => {
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
        deleteTaskBacklog(id);
      }
    });
  };

  // Obtengo todas las tareas del Backlog al montarse el componente
  useEffect(() => {
    getAllTaskBacklog();
  }, []);

  return (
    <>
      <section className="w-[90%] h-[65vh] mx-auto rounded-t-xl overflow-hidden bg-[#FAFAFA]">
        <div className="flex items-center h-12 bg-[#F0F0F0] font-semibold">
          <span className="block pl-15 grow text-start">Titulo</span>
          <span className="block pl-15 grow text-start">Descripción</span>
          <span className="block pl-20 grow-2 text-start">Opciones</span>
        </div>
        <div>
          {taskBacklog.length &&
            taskBacklog.map((task: Task) => (
              <RowTableBacklog key={task.id} task={task}>
                <SendTask task={task} />
                <Options
                  size="40"
                  see={() => setShowData(task)}
                  edit={() => setOpen(task)}
                  remove={() => handlerDeleteTask(task.id!)}
                />
              </RowTableBacklog>
            ))}
        </div>
      </section>
      {showData && (
        <ModalData title="Tarea" data={showData} close={setShowData} />
      )}
    </>
  );
};

export default TableBacklog;
