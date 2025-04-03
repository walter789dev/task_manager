import { FC, ReactNode } from "react";
import LinkNavigate from "./LinkNavigate";

interface SectionProp {
  logo: ReactNode;
  children?: ReactNode;
}

const SectionNavigate: FC<SectionProp> = ({ logo, children }) => {
  return (
    <nav className="flex flex-col items-center w-[20%] max-w-[230px] min-h-screen bg-[#F9F9F9] py-6 px-2">
      {logo}
      <ul className="w-full h-[50vh] mt-15">
        <LinkNavigate
          text="My Backlog"
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
              <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
            </svg>
          )}
        ></LinkNavigate>
        {children}
      </ul>
    </nav>
  );
};

export default SectionNavigate;
