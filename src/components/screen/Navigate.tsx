import SectionNavigate from "../../features/navigate/SectionNavigate";
import { useSprintList } from "../../hooks/useSprintList";
import { useEffect } from "react";
import Logo from "../ui/Logo";
import ListSprintNavigate from "../../features/navigate/ListSprintNavigate";
import run from "../../assets/svg/run.svg";

const Navigate = () => {
  const { sprints, getAllSprints } = useSprintList();

  useEffect(() => {
    getAllSprints();
  }, []);
  return (
    <SectionNavigate logo={<Logo />}>
      <li className="flex items-center justify-between gap-3 text-[#969090]">
        <img src={run} alt="Icono de Sprint" />
        <span className="grow font-semibold">Lista de Sprints</span>
        <svg
          viewBox="0 0 24 24"
          stroke="#969090"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer size-8 hover:stroke-green-600 hover:stroke-2"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
        </svg>
      </li>
      <ListSprintNavigate sprints={sprints} />
    </SectionNavigate>
  );
};

export default Navigate;
