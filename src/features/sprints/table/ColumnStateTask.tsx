import { FC, ReactNode } from "react";

interface PropsColumn {
  title: string;
  children: ReactNode;
}

const ColumnStateTask: FC<PropsColumn> = ({ title, children }) => {
  return (
    <div className="w-[30%] h-[65vh] bg-[#FAFAFA] pb-3">
      <h3 className="py-2 text-center font-semibold bg-[#F0F0F0] rounded-t-2xl">
        {title}
      </h3>
      <section className="flex flex-col mt-3 gap-5 h-[58vh] overflow-y-auto">
        {children}
      </section>
    </div>
  );
};

export default ColumnStateTask;
