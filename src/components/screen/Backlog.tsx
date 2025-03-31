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
  const [editTask, setEditTask] = useState<Task>();

  const showModal = (task?: Task) => {
    if (task && task.titulo) setEditTask(task);
    setModal((state) => !state);
  };

  return (
    <div className="grow bg-[#f1f2f6]">
      <HeaderSection title="My Backlog" image={fondoBacklog} />
      <TaskTitle title="backlog">
        <Button event={showModal} text="Añadir Tarea" type="primary" />
      </TaskTitle>
      <Table openModal={showModal} />
      {modal && <ModalForm openModal={showModal} editTask={editTask} />}
    </div>
  );
};

export default Backlog;
