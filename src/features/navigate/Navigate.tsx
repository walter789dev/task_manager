import DarkTheme from "../../components/ui/DarkTheme";
import ItemNavigate from "./ItemNavigate";
import Logo from "../../components/ui/Logo";
import SectionNavigate from "./SectionNavigate";
import folder from "../../assets/svg/folder.svg";
import run from "../../assets/svg/run.svg";
import square from "../../assets/svg/square-rounded-plus.svg";

const Navigate = () => {
  return (
    <SectionNavigate logo={<Logo />} dark={<DarkTheme />}>
      <ul className="mt-10">
        <ItemNavigate link svg={folder} text="My Backlog" />
        <ItemNavigate svg={run} text="Sprints">
          <img src={square} alt="Añadir Sprint" />
        </ItemNavigate>
      </ul>
      <ul></ul>
    </SectionNavigate>
  );
};

export default Navigate;
