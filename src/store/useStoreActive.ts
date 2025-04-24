import { create } from "zustand";
import { Sprint } from "../types/ISprint";

interface StoreActiveSprint {
  active: Sprint | null;
  setActiveSprint: (sprint?: Sprint) => void;
}

// Mantiene registro de la Sprint que se encuentra activa / en pantalla.
export const useStoreActive = create<StoreActiveSprint>((set) => ({
  active: null,
  setActiveSprint: (sprint) => set(() => ({ active: sprint })),
}));
