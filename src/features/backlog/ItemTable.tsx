import Options from "../../components/common/Options";

const ItemTable = () => {
  return (
    <article className="flex items-center gap-15 h-18 w-[98%] my-4 mx-auto bg-(--primary-color) rounded-2xl">
      <input
        className="block grow dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5 accent-(--secondary-color)"
        type="checkbox"
      />
      <span className="grow">Titulo de prueba</span>
      <span className="grow">Descripcion</span>
      <span className="grow">Fecha Limite</span>
      <Options />
    </article>
  );
};

export default ItemTable;
