import { create } from "zustand";
import { Task } from "../types/ITask";

interface StoreBacklog {
  backlog: Task[] | [];
  setAllTaskBacklog: (allTask: Task[]) => void;
  addTaskBacklog: (task: Task) => void;
  editTaskBacklog: (task: Task) => void;
  removeTaskBacklog: (id: string) => void;
}

// Manjeo de operaciones en la lista de tareas del backlog
export const useStoreBacklog = create<StoreBacklog>((set) => ({
  backlog: [],
  setAllTaskBacklog: (allTask) => set(() => ({ backlog: allTask })),
  addTaskBacklog: (task) =>
    set((state) => ({ backlog: [...state.backlog, task] })),
  editTaskBacklog: (newTask) =>
    set((state) => ({
      backlog: state.backlog.map((task) =>
        task.id === newTask.id ? newTask : task
      ),
    })),
  removeTaskBacklog: (id) =>
    set((state) => ({
      backlog: state.backlog.filter((task) => task.id !== id),
    })),
}));
