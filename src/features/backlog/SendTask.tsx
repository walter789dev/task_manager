import { ChangeEvent, FC, useState } from "react";
import { useSprintList } from "../../hooks/useSprintList";
import { Task } from "../../types/ITask";
import Swal from "sweetalert2";
import { useMoveTask } from "../../hooks/useMoveTask";

interface PropsSend {
  task: Task;
}

const SendTask: FC<PropsSend> = ({ task }) => {
  const [selectValue, setSelectValue] = useState("");
  const { sprints } = useSprintList();
  const { moveTaskToSprint } = useMoveTask();

  const handlerOption = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectValue(e.target.value);

  const sendInfo = () => {
    if (selectValue !== "") {
      Swal.fire({
        title: "¿Estas seguro/a de enviar esta tarea?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "¡Si, quiero enviarla!",
        cancelButtonText: "Quizas más tarde",
        confirmButtonColor: "#3a5b9d",
      }).then((result) => {
        if (result.isConfirmed) {
          const sprint = sprints.find(
            (sprint) => sprint.nombre === selectValue
          );
          moveTaskToSprint(sprint?.id!, task);
        }
        setSelectValue("");
      });
    }
  };

  return (
    <div>
      <button
        className="py-1 px-3 text-white bg-[#3A5B9D] rounded-l-xl hover:bg-[#90afee] cursor-pointer"
        onClick={sendInfo}
      >
        Enviar
      </button>
      <select
        className="w-[150px] bg-white py-1 px-3 rounded-r-xl cursor-pointer"
        value={selectValue}
        onChange={handlerOption}
      >
        <option value="">Selecciona un destino</option>
        {sprints &&
          sprints.length &&
          sprints.map((sprint) => (
            <option value={sprint.nombre}>{sprint.nombre}</option>
          ))}
      </select>
    </div>
  );
};

export default SendTask;
