import Table from "../../features/backlog/Table";
import fondoBacklog from "../../assets/images/fondo-backlog.webp";
import HeaderSection from "../common/HeaderSection";
import TaskTitle from "../common/TaskTitle";
import ModalForm from "../../features/backlog/ModalForm";
import { useState } from "react";
import Button from "../ui/Button";
import { Task } from "../../types/task";

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
      <Table openModal={showModal} setEditTask={setEditTask} />
      {modal && <ModalForm closeModal={showModal} editTask={editTask} />}
    </div>
  );
};

export default Backlog;
