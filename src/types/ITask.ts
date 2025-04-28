export interface Backlog {
    tareas: Task[]
}

export interface Task {
  id?: string;
  titulo: string;
  descripcion: string;
  fechaLimite: string;
  estado: "pendiente" | "en progreso" | "completado";
}
