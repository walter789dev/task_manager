import { FC } from "react";
import Options from "../../components/common/Options";
import { Sprint } from "../../types/ISprint";
import LinkNavigate from "./LinkNavigate";

interface PropsLSprint {
  sprints: Sprint[];
  setOpen: (sprint?: Sprint) => void;
}

const ListSprintNavigate: FC<PropsLSprint> = ({ sprints, setOpen }) => {
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
          <Options size="35" edit={() => setOpen(sprint)} remove={() => {}} />
        </LinkNavigate>
      ))}
    </ul>
  );
};

export default ListSprintNavigate;
