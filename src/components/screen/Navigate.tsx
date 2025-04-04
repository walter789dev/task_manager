import { useEffect } from "react";
import { useSprintList } from "../../hooks/useSprintList";
import Logo from "../ui/Logo";
import ListSprintNavigate from "../../features/navigate/ListSprintNavigate";
import { useModal } from "../../hooks/useModal";
import AddImage from "../../assets/svg/library-plus.svg";
import LinkNavigate from "../../features/navigate/LinkNavigate";
import FormNavigate from "../../features/navigate/FormNavigate";
import { Sprint } from "../../types/ISprint";

const Navigate = () => {
  const { sprints, getAllSprints } = useSprintList();
  const { open, editTask, setOpen } = useModal();
  const { createSprint, modifySprint } = useSprintList();

  const handlerSubmit = (sprint: Sprint) => {
    if (!("id" in sprint)) {
      createSprint({
        ...sprint,
        id: Date.now().toString(),
      });
    } else {
      modifySprint(sprint);
    }
    setOpen();
  };

  useEffect(() => {
    getAllSprints();
  }, []);
  return (
    <nav className="flex flex-col items-center w-[20%] max-w-[230px] min-h-screen bg-[#F9F9F9] py-6 px-5">
      <Logo />
      <ul className="w-full h-[50vh] mt-15">
        <LinkNavigate text="My Backlog" />
        <li className="flex items-center justify-between mt-3 gap-3 text-[#969090]">
          <span className="grow font-semibold">Lista de Sprints</span>
          <img
            className="cursor-pointer"
            src={AddImage}
            alt="Añadir Tarea"
            onClick={() => setOpen()}
          />
        </li>
        <ListSprintNavigate sprints={sprints} setOpen={setOpen} />
      </ul>
      {open && (
        <FormNavigate
          editSprint={editTask as Sprint}
          closeModal={setOpen}
          handlerSubmit={handlerSubmit}
        />
      )}
    </nav>
  );
};

export default Navigate;
