import type { Task } from "../entities/task.js"

export type TaskRespository = {
    remove: (id: string) => Promise<void>,
    deleteAll: () => Promise<void>,
    getAll: () => Promise<Task[]>,
    updateToCompleted: (id: string) => Promise<void>,
    updateToTitle: (id: string, title: string) => Promise<void>,
    deleteOne: (id: string) => Promise<void>,
    getOne: (id: string) => Promise<Task | null>,
    save: (task: Task) => Promise<void>
}