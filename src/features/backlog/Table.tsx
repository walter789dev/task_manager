import ItemTable from "./ItemTable";

const Table = () => {
  return (
    <section className="w-[92%] h-[65vh] mx-15 bg-(--theme-color) rounded-t-2xl overflow-hidden">
      <div className="flex items-center justify-evenly h-10 font-semibold  bg-[#F0F0F0]">
        <span>Titulo</span>
        <span>Descripción</span>
        <span>Fecha Limite</span>
        <span>Opciones</span>
      </div>
      <div>
        <ItemTable />
        <ItemTable />
        <ItemTable />
      </div>
    </section>
  );
};

export default Table;
