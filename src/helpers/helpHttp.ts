export const helpHttp = <T extends object>(API_URL: string) => {
  const getItem = async (id: string) => {
    try {
      const preResult = await fetch(API_URL + "/" + id);
      if (!preResult.ok) {
        throw new Error("No se han podido obtener los datos solicitados");
      }
      const item: T = await preResult.json();
      return item;
    } catch (e) {
      console.error(e);
    }
  };

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

  const createItem = async (item: T) => {
    try {
      const preResult = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!preResult.ok) {
        throw new Error("No se han podido crear el elemento solicitado");
      }

      return preResult.ok;
    } catch (e) {
      console.error(e);
    }
  };

  const updateItem = async (item: T) => {
    try {
      if ("id" in item) {
        const preResult = await fetch(`${API_URL}/${item.id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(item),
        });

        if (!preResult.ok) {
          throw new Error("No se han podido actualizar el elemento solicitado");
        }

        return preResult.ok;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deleteItem = async (itemId: string) => {
    try {
      const preResult = await fetch(`${API_URL}/${itemId}`, {
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
    getItem,
    getAllItems,
    createItem,
    updateItem,
    deleteItem,
  };
};
