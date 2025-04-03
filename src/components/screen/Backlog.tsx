import TableBacklog from "../../features/backlog/tableBacklog/TableBacklog";
import fondoBacklog from "../../assets/images/fondo-backlog.webp";
import HeaderSection from "../common/HeaderSection";
import TaskTitle from "../common/TaskTitle";
import FormBacklog from "../../features/backlog/formBacklog/FormBacklog";
import { useState } from "react";
import Button from "../ui/Button";
import { Task } from "../../types/ITask";

const Backlog = () => {
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState<Task | null>(null);

  const showModal = () => {
    setModal((state) => !state);
  };

  const resetModal = () => {
    setEditTask(null);
    showModal();
  };

  return (
    <div className="grow">
      <HeaderSection title="My Backlog" image={fondoBacklog} />
      <TaskTitle title="Backlog">
        <Button event={() => {}} text="Enviar Tarea" type="secondary" />
        <Button event={resetModal} text="Añadir Tarea" type="primary" />
      </TaskTitle>
      <TableBacklog openModal={showModal} setEditTask={setEditTask} />
      {modal && <FormBacklog closeModal={showModal} editTask={editTask} />}
    </div>
  );
};

export default Backlog;
