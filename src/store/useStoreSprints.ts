import { create } from "zustand";
import { StoreSprint } from "../types/ISprint";

// Store para realizar operaciones con la lista de Sprints
export const useStoreSprint = create<StoreSprint>((set) => ({
  sprints: [],
  setAllSprints: (allSprints) =>
    set(() => ({
      sprints: allSprints,
    })),
  addSprint: (sprint) =>
    set((state) => ({
      sprints: [...state.sprints, sprint],
    })),
  editSprint: (newSprint) =>
    set((state) => ({
      sprints: state.sprints.map((sprint) =>
        sprint.id === newSprint.id ? newSprint : sprint
      ),
    })),
  removeSprint: (id) =>
    set((state) => ({
      sprints: state.sprints.filter((sprint) => sprint.id !== id),
    })),
}));
