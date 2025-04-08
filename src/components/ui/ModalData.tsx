import { FC } from "react";
import { Sprint } from "../../types/ISprint";
import { Task } from "../../types/ITask";

interface PropsData {
  title: string;
  data: Omit<Task, "id"> | Omit<Sprint, "tareas">;
  close: (state: null) => void;
}

const ModalData: FC<PropsData> = ({ title, data, close }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-[#0002]">
      <div className="flex flex-col gap-5 w-[25vw] min-h-[30vh] py-5 bg-white rounded-xl scale-up-center">
        <div className="flex flex-col items-center justify-center grow">
          <h2 className="pb-4 text-center text-2xl font-semibold">{title}</h2>
          {Object.entries(data).map(([key, value]) => {
            if (key !== "id" && key !== "tareas")
              return (
                <p className="text-center capitalize">
                  <span>{key}:</span> {value}
                </p>
              );
          })}
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
