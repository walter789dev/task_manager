import { FC, ReactNode } from "react";

interface SectionProp {
  logo?: ReactNode;
  dark?: ReactNode;
  children?: ReactNode;
}

const SectionNavigate: FC<SectionProp> = ({ logo, dark, children }) => {
  return (
    <section className="flex flex-col justify-between items-center w-[20%] max-w-[230px] min-h-screen bg-(--theme-color) py-7 px-5">
      {logo}
      <div className="w-full h-[65vh]">
        <div className="flex justify-between">
          <h3 className="text-(--text-color) font-semibold">Proyect</h3>
          <svg
            width="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#969090"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </div>
        {children}
      </div>
      {dark}
    </section>
  );
};

export default SectionNavigate;
