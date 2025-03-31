import { FC } from "react";

interface PropsButton {
  text: string;
  type: "primary" | "secondary";
  event: VoidFunction;
}

const Button: FC<PropsButton> = ({ text, type, event }) => {
  const styles =
    type === "primary"
      ? " text-white bg-(--secondary-color) border-(--secondary-color)"
      : "text-(--text-color) border-(--text-color)";
  return (
    <button
      type="button"
      className={`border py-2 px-5 text-[13px] font-semibold ${styles} rounded-xl cursor-pointer`}
      onClick={event}
    >
      {text}
    </button>
  );
};

export default Button;
