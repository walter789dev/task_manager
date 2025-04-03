import HeaderSection from "../common/HeaderSection";
import FondoSprint from "../../assets/images/post-it-notes-1284667_1280.webp";
import { useParams } from "react-router";
import { useActiveSprint } from "../../hooks/useActiveSprint";
import { useEffect } from "react";
import TaskTitle from "../common/TaskTitle";
import Button from "../ui/Button";
import TableStateTask from "../../features/sprints/table/TableStateTask";

const Sprint = () => {
  const params = useParams();
  const { active, setActive } = useActiveSprint();

  useEffect(() => {
    if (params) setActive(params.id!);
  }, []);

  return (
    <div className="grow">
      <HeaderSection title={active?.nombre!} image={FondoSprint} />
      <TaskTitle title={active?.nombre!}>
        <Button event={() => {}} text="Añadir Tarea" type="primary" />
      </TaskTitle>
      <TableStateTask />
    </div>
  );
};

export default Sprint;
