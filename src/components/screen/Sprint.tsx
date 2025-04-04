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
  const params = useParams();
  const { active, setActive } = useActiveSprint();
  const { open, editTask, setOpen } = useModal();

  const handlerSubmit = () => {};

  useEffect(() => {
    if (params) setActive(params.id!);
  }, [params]);

  return (
    <div className="grow">
      <HeaderSection title={active?.nombre!} image={FondoSprint} />
      <TaskTitle title={active?.nombre!} openModal={setOpen} />
      <TableStateTask setOpen={setOpen} />
      {open && (
        <FormBacklog
          closeModal={setOpen}
          editTask={editTask as Task}
          handlerSubmit={handlerSubmit}
        />
      )}
    </div>
  );
};

export default Sprint;
