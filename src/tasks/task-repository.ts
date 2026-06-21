import type { Task } from "../tasks/task.entity.js"

export type ITaskRepository = {
    save: (task: Task) => Promise<void>
    findById: (id: string) => Promise<Task | null>
    findByTitle: (title: string) => Promise<Task | null>
}

export const taskRepositoryPostgre: ITaskRepository = {
    save: async (task: Task)=>{
        console.log('Saving task to the database...')
    },
    findById: async (id: string) => {
        return {
            id: '2',
            title: 'teste',
            status: "PENDING"
        } as Task
    },
    findByTitle: async (title: string) => {
        return {
            id: '2',
            title: 'teste',
            status: "PENDING"
        } as Task
    }
}