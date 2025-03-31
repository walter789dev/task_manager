import { useShallow } from "zustand/shallow";
import { useStoreBacklog } from "../store/useStore";
import { useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { Task } from "../types/task";

export const useTaskList = () => {
    const { listTask, setAllTaskBacklog } = useStoreBacklog(
        useShallow((store) => ({
            listTask: store.backlog,
            setAllTaskBacklog: store.setAllTaskBacklog,
        }))
    );

    useEffect(() => {
        async function getAll() {
            const { getAllItems } = helpHttp<Task[]>("backlog");
            const items = await getAllItems();

            if (items) {
                setAllTaskBacklog(items);
            }
        }
        getAll();
    }, []);

    return {
        listTask
    }
}