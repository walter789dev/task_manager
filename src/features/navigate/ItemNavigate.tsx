import { FC, ReactNode } from "react";
import { NavLink } from "react-router";

interface PropsItem {
  svg: string;
  text: string;
  link?: boolean;
  url?: string;
  children?: ReactNode;
}

const ItemNavigate: FC<PropsItem> = ({
  text,
  url = "/",
  link = false,
  svg,
  children,
}) => {
  return (
    <li className={`mt-3 font-semibold ${children && "flex justify-between items-center"}`}>
      {link ? (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex gap-3 text-dark"
              : "flex gap-3 text-(--text-color)"
          }
          to={url}
        >
          <img src={svg} alt="Icono de enlace" />
          {text}
        </NavLink>
      ) : (
        <span className="flex gap-3 text-(--text-color)">
          <img src={svg} alt="Icono de enlace" />
          {text}
        </span>
      )}
      {children}
    </li>
  );
};

export default ItemNavigate;
