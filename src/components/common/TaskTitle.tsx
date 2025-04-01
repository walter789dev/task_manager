import { FC, ReactNode } from "react";

interface PropsTitle {
  title: string;
  children: ReactNode;
}

const TaskTitle: FC<PropsTitle> = ({ title, children }) => {
  return (
    <section className="flex justify-between items-center ml-10 mr-20 pt-8 pb-6">
      <h2 className="text-2xl font-semibold">Tareas del {title}</h2>
      <div className="flex gap-3">{children}</div>
    </section>
  );
};

export default TaskTitle;
