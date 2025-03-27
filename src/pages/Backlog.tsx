import HeaderSection from "../components/common/HeaderSection";
import fondoBacklog from "../../assets/images/fondo-backlog.webp";
import TaskTitle from "../components/common/TaskTitle";
import Table from "../features/backlog/Table";

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
