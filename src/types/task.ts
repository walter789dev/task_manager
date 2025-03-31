export interface Sprint {
    id: number
    nombre: string
    tareas: Task[]
}

export interface Task {
    id: number
    titulo: string
    descripcion: string
    fechaInicio: string
    fechaFinal: string
}