export const helpHttp = <T>(path: string) => {
    const API_URL = "http://localhost:3000/" + path

    const getAllItems = async () => {
        try {
            const preResult = await fetch(API_URL)
            if (!preResult.ok) {
                throw new Error("No se han podido obtener los datos solicitados")
            }
            const allItems: T = await preResult.json()
            return allItems

        } catch (e) {
            console.error(e)
        }
    }


    return {
        getAllItems
    }
}