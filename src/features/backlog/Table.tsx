import { FC } from "react";
import ItemTable from "./ItemTable";
import { Task } from "../../types/task";
import Options from "../../components/common/Options";
import { useTaskList } from "../../hooks/useTaskList";

interface PropsTable {
  openModal: (state: Task) => void;
}

const Table: FC<PropsTable> = ({ openModal }) => {
  const { listTask } = useTaskList();

  return (
    <>
      <section className="w-[90%] h-[65vh] mx-15 bg-(--theme-color) rounded-t-xl overflow-hidden">
        <div className="flex items-center justify-evenly h-12 bg-[#ced6e0] font-semibold">
          <span>Titulo</span>
          <span>Descripción</span>
          <span>Fecha Incio</span>
          <span>Fecha Limite</span>
          <span>Opciones</span>
        </div>
        <div>
          {listTask.map((task: Task) => (
            <ItemTable key={task.id} task={task}>
              <Options edit={() => openModal(task)} />
            </ItemTable>
          ))}
        </div>
      </section>
    </>
  );
};

export default Table;
