import { FC, ReactNode } from "react";
import { NavLink } from "react-router";

interface PropsItem {
  text: string;
  url?: string;
  children?: ReactNode;
  icon?: () => ReactNode;
}

// Enlace de los Sprints existentes
const LinkNavigate: FC<PropsItem> = ({ text, url = "/", children, icon }) => {
  return (
    <li className="my-1 font-semibold">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 text-dark items-center"
            : "flex gap-3 text-[#969090] items-center"
        }
        to={url}
      >
        {icon && icon()}
        <span className="text-start truncate">{text}</span>
      </NavLink>
      {children && <div className="mx-8 mt-3">{children}</div>}
    </li>
  );
};

export default LinkNavigate;
