import HeaderSection from "../common/Header";
import FondoSprint from "../../assets/images/post-it-notes-1284667_1280.webp";
import { useParams } from "react-router";
import { useActiveSprint } from "../../hooks/useActiveSprint";
import { useEffect } from "react";
import TaskTitle from "../common/TaskTitle";
import TableStateTask from "../../features/sprints/table/TableStateTask";
import { Task } from "../../types/ITask";
import FormBacklog from "../common/Form";
import { useModal } from "../../hooks/useModal";

const Sprint = () => {
  // Operaciones del Sprint Activo
  const { active, addTask, editTaskS, getActive } = useActiveSprint();
  // Operaciones para manejar el modal Formualrio
  const { open, editTask, setOpen } = useModal();
  const params = useParams();

  // Me permite crear / actualizar una tarea del Sprint Activo
  const handlerSubmit = (task: Task) => {
    if (!("id" in task)) {
      addTask({
        ...task,
        id: Date.now().toString(),
      });
    } else {
      editTaskS(task);
    }
    setOpen();
  };

  // Defino el Sprint activo mediante el ID pasado por la URL
  useEffect(() => {
    if (params.id) {
      getActive(params.id);
    }
  }, [params]);

  return (
    <>
      <div className="grow">
        <HeaderSection title={active?.nombre!} image={FondoSprint} />
        <TaskTitle title={active?.nombre!} openModal={setOpen} />
        <TableStateTask active={active} setOpen={setOpen} />
      </div>
      {open && (
        <FormBacklog
          closeModal={setOpen}
          editTask={editTask as Task}
          handlerSubmit={handlerSubmit}
        />
      )}
    </>
  );
};

export default Sprint;
