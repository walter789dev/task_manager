import { ChangeEvent, FC, useState } from "react";
import { useSprintList } from "../../hooks/useSprintList";
import { Task } from "../../types/ITask";
import Swal from "sweetalert2";
import { useMoveTask } from "../../hooks/useMoveTask";
import { Sprint } from "../../types/ISprint";

interface PropsSend {
  task: Task;
}

// Se encarga de enviar una tarea a un Sprint seleccionado
const SendTask: FC<PropsSend> = ({ task }) => {
  const { sprints } = useSprintList();
  // Valor actual del Select (contiene el nombre del sprint a donde se enviara la tarea)
  const [selectValue, setSelectValue] = useState("");
  // Mueve la tarea del Backlog al Sprint indicado
  const { moveTaskToSprint } = useMoveTask();

  const handlerOption = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectValue(e.target.value);

  // Modal de SweetAlert que se encarga de realizar la funcionalidad.
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
            (sprint: Sprint) => sprint.nombre === selectValue
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
          sprints.map((sprint: Sprint, i: string) => (
            <option key={i} value={sprint.nombre}>
              {sprint.nombre}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SendTask;
