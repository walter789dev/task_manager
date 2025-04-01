import { create } from "zustand";
import { Sprint, Task } from "../types/task";

interface StoreBacklog {
  backlog: Task[] | [];
  setAllTaskBacklog: (AllTask: Task[]) => void;
  addTaskBacklog: (task: Task) => void;
  editTaskBacklog: (task: Task) => void;
  removeTaskBacklog: (id: string) => void;
}

interface StoreSprint {
  sprints: Sprint[];
}

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

export const useStoreSprint = create<StoreSprint>(() => ({
  sprints: [],
}));
