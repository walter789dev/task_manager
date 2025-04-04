import { Sprint } from "./ISprint";
import { Task } from "./ITask";

export interface IModal {
  open: boolean;
  editTask: Task | Sprint | null;
}