import { create } from "zustand";
import { Sprint } from "../types/ISprint";

interface StoreActive {
  active: Sprint | null;
  setActiveSprint: (sprint: Sprint) => void;
}

export const useStoreActive = create<StoreActive>((set) => ({
  active: null,
  setActiveSprint: (sprint) => set(() => ({ active: sprint }))
}));
