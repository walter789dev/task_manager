import { FC } from "react";

interface PropsButton {
  text: string;
  type: "primary" | "secondary";
}

const Button: FC<PropsButton> = ({ text, type }) => {
  const styles =
    type === "primary"
      ? " text-white bg-(--secondary-color)"
      : "text-(--text-color) border-(--text-color)";
  return (
    <button
      className={`border py-2 px-5 text-[13px] font-semibold ${styles} rounded-2xl cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
