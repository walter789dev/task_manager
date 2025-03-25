import DarkTheme from "../ui/DarkTheme";
import Logo from "../ui/Logo";
import SectionNavigate from "../ui/SectionNavigate";

const Backlog = () => {
  return (
    <>
      <SectionNavigate logo={<Logo />} dark={<DarkTheme />}></SectionNavigate>
    </>
  );
};

export default Backlog;
