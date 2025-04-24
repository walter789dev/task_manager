import { FC } from "react";
import Options from "../../components/common/Options";
import { Sprint } from "../../types/ISprint";
import LinkNavigate from "./LinkNavigate";
import { useSprintList } from "../../hooks/useSprintList";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

interface PropsLSprint {
  sprints: Sprint[];
  setOpen: (sprint?: Sprint) => void;
  setData: (sprint: Sprint) => void;
}

// Seccion de la Navegación que se encarga de mostrar los Sprint existentes.
const ListSprintNavigate: FC<PropsLSprint> = ({
  sprints,
  setOpen,
  setData,
}) => {
  // Operacion de la lista de Sprints
  const { deleteSprint } = useSprintList();
  // Hook para navegar por las rutas
  const navigate = useNavigate();

  // Modal de SweetAlert que se encarga de eliminar un Sprint
  const handlerDelete = (id: string) => {
    Swal.fire({
      title: "¿Estas seguro/a de eliminar este sprint?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "¡Si, quiero eliminarla!",
      cancelButtonText: "Quizas más tarde",
      confirmButtonColor: "#3a5b9d",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSprint(id);
        navigate("/");
      }
    });
  };

  return (
    <ul className="flex flex-col mt-4 gap-1">
      {sprints.map((sprint) => (
        <LinkNavigate
          key={sprint.id}
          url={"sprint/" + sprint.id}
          text={sprint.nombre}
          icon={() => (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v-10l7 10v-10" />
              <path d="M15 17h5" />
              <path d="M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" />
            </svg>
          )}
        >
          <Options
            size="35"
            see={() => setData(sprint)}
            edit={() => setOpen(sprint)}
            remove={() => handlerDelete(sprint.id!)}
          />
        </LinkNavigate>
      ))}
    </ul>
  );
};

export default ListSprintNavigate;
