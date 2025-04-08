import { FC } from "react";
import MoveRight from "../../assets/svg/arrow-right.svg";
import MoveLeft from "../../assets/svg/arrow-left.svg";
import { Task } from "../../types/ITask";
import { useMoveTask } from "../../hooks/useMoveTask";

interface PropsMove {
  title: string;
  task: Task;
}

const MoveTask: FC<PropsMove> = ({ task, title }) => {
  const { moveTaskState } = useMoveTask();

  return (
    <div className="flex gap-5">
      {title !== "Pendiente" && (
        <img
          className="size-8 cursor-pointer"
          src={MoveLeft}
          alt="Mover al anterior"
          onClick={() => moveTaskState(task.id!, task.estado, "Left")}
        />
      )}

      {title !== "Completado" && (
        <img
          className="size-8 cursor-pointer"
          src={MoveRight}
          alt="Mover al siguiente"
          onClick={() => moveTaskState(task.id!, task.estado, "Right")}
        />
      )}
    </div>
  );
};

export default MoveTask;
