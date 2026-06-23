import type { Task } from "../tasks/task.entity.js"

export type ITaskRepository = {
    save: (task: Task) => Promise<void>
    findById: (id: string) => Promise<Task | null>
    findByTitle: (title: string) => Promise<Task | null>
}