import { FC } from "react";

interface PropsButton {
  text: string;
  type: "primary" | "secondary";
  event: VoidFunction;
}

const Button: FC<PropsButton> = ({ text, type, event }) => {
  const styles =
    type === "primary"
      ? " text-white bg-[#3A5B9D] border-[#3A5B9D]"
      : "text-gray-400 border-gray-400";
  return (
    <button
      type="button"
      className={`border py-[9px] px-5 text-[13px] font-semibold ${styles} rounded-xl cursor-pointer`}
      onClick={event}
    >
      {text}
    </button>
  );
};

export default Button;
