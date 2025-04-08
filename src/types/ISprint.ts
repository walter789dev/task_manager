import { Task } from "./ITask";

export interface Sprint {
  id?: string;
  nombre: string;
  fechaInicio: string;
  fechaFinal: string;
  tareas: Task[];
}

export interface StoreSprint {
  sprints: Sprint[] | [];
  active: Sprint | null;
  setActiveSprint: (sprint: Sprint) => void;
  setAllSprints: (allSprint: Sprint[]) => void;
  addSprint: (sprint: Sprint) => void;
  editSprint: (sprint: Sprint) => void;
  removeSprint: (id: string) => void;
}
