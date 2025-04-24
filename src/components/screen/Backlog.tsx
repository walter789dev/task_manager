import TableBacklog from "../../features/backlog/tableBacklog/TableBacklog";
import fondoBacklog from "../../assets/images/fondo-backlog.webp";
import HeaderSection from "../common/Header";
import TaskTitle from "../common/TaskTitle";
import { Task } from "../../types/ITask";
import FormBacklog from "../common/Form";
import { useTaskList } from "../../hooks/useTaskList";
import { useModal } from "../../hooks/useModal";

const Backlog = () => {
  // Operaciones para tareas del backlog
  const { createTaskBacklog, modifyTaskBacklog } = useTaskList();
  // Operaciones para manejar el modal del Formulario
  const { open, editTask, setOpen } = useModal();

  // Me permite crear / actualizar dependiendo de si encuentra un id
  const handlerSubmit = (task: Task) => {
    if (!("id" in task)) {
      createTaskBacklog({
        ...task,
        id: Date.now().toString(),
      });
    } else {
      modifyTaskBacklog(task);
    }
    setOpen();
  };

  return (
    <>
      <div className="grow">
        <HeaderSection title="My Backlog" image={fondoBacklog} />
        <TaskTitle title="Backlog" openModal={setOpen} />
        <TableBacklog setOpen={setOpen} />
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

export default Backlog;
