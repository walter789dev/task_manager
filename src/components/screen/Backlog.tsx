import HeaderSection from "../ui/HeaderSection";
import fondoBacklog from "../../assets/images/fondo-backlog.webp";
import TaskTitle from "../ui/TaskTitle";
import Table from "../ui/Table";

const Backlog = () => {
  return (
    <div className="grow">
      <HeaderSection title="My Backlog" image={fondoBacklog} />
      <TaskTitle send />
      <Table />
    </div>
  );
};

export default Backlog;
