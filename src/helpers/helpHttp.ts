import { Task } from "../types/task";

export const helpHttp = <T>(API_URL: string) => {
  const getAllItems = async () => {
    try {
      const preResult = await fetch(API_URL);
      if (!preResult.ok) {
        throw new Error("No se han podido obtener los datos solicitados");
      }
      const allItems: T = await preResult.json();
      return allItems;
    } catch (e) {
      console.error(e);
    }
  };

  const createItem = async (task: Task) => {
    try {
      const preResult = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!preResult.ok) {
        throw new Error("No se han podido crear el elemento solicitado");
      }

      return preResult.ok;
    } catch (e) {
      console.error(e);
    }
  };

  const updateItem = async (task: Task) => {
    try {
      const preResult = await fetch(`${API_URL}/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!preResult.ok) {
        throw new Error("No se han podido actualizar el elemento solicitado");
      }

      return preResult.ok;
    } catch (e) {
      console.error(e);
    }
  };

  const deleteItem = async (taskId: string) => {
    try {
      const preResult = await fetch(`${API_URL}/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!preResult.ok) {
        throw new Error("No se han podido eliminar el elemento solicitado");
      }

      return preResult.ok;
    } catch (e) {
      console.error(e);
    }
  };

  return {
    getAllItems,
    createItem,
    updateItem,
    deleteItem,
  };
};
