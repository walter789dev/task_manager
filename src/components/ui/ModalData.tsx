import { FC } from "react";
import { Sprint } from "../../types/ISprint";
import { Task } from "../../types/ITask";

interface PropsData {
  data: Omit<Task, "id"> | Omit<Sprint, "tareas">;
  close: (state: null) => void;
}

const ModalData: FC<PropsData> = ({ data, close }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-[#0002]">
      <div className="flex flex-col gap-5 w-[25vw] min-h-[30vh] bg-white rounded-xl">
        <div>
          <h2 className="p-2 text-center text-2xl font-semibold">Tarea</h2>
          {Object.entries(data).map(([key, value]) => (
            <p className="text-center capitalize">
              {key}: {value}
            </p>
          ))}
        </div>
        <button
          className="mt-2 mx-auto py-1 px-5 border rounded-xl cursor-pointer"
          onClick={() => close(null)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalData;
