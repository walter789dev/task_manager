import ItemTable from "./ItemTable";

const Table = () => {
  return (
    <table className="w-[94%] h-[65vh] ml-10 bg-(--theme-color)">
      <thead>
        <tr className="h-10 bg-[#F0F0F0]">
          <td></td>
          <th>Titulo</th>
          <th>Descripción</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <ItemTable />
        <ItemTable />
        <ItemTable />
      </tbody>
    </table>
  );
};

export default Table;
