import { FC, useEffect } from "react";
import Swal from "sweetalert2";
import { Task } from "../../types/task";
import ItemTable from "./ItemTable";
import Options from "../../components/common/Options";
import { useTaskList } from "../../hooks/useTaskList";

interface PropsTable {
  openModal: VoidFunction;
  setEditTask: (task: Task) => void;
}

const Table: FC<PropsTable> = ({ openModal, setEditTask }) => {
  const { taskBacklog, getAllTaskBacklog, deleteTaskBacklog } = useTaskList();

  const handlerEditTask = (task: Task) => {
    openModal();
    setEditTask(task);
  };

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

  useEffect(() => {
    getAllTaskBacklog();
  }, []);

  return (
    <>
      <section className="w-[90%] h-[65vh] mx-auto rounded-t-xl overflow-hidden bg-[#FAFAFA]">
        <div className="flex items-center justify-evenly h-12 bg-[#F0F0F0] font-semibold">
          <span>Titulo</span>
          <span>Descripción</span>
          <span>Fecha Incio</span>
          <span>Fecha Limite</span>
          <span>Opciones</span>
        </div>
        <div>
          {taskBacklog.map((task: Task) => (
            <ItemTable key={task.id} task={task}>
              <Options
                edit={() => handlerEditTask(task)}
                remove={() => handlerDeleteTask(task.id!)}
              />
            </ItemTable>
          ))}
        </div>
      </section>
    </>
  );
};

export default Table;
