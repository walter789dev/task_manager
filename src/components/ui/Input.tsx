import { ChangeEventHandler, FC } from "react";

interface PropsInput {
  type?: "text" | "date" | "number";
  placeholder?: string;
  text?: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<PropsInput> = ({
  name,
  placeholder,
  type = "text",
  text,
  value,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-gray-800 font-semibold text-sm capitalize"
      >
        {!text ? name : text}
      </label>
      <input
        type={type}
        name={name}
        className="block mt-2 w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
};
