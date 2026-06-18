import type { Task } from "../tasks/task.entity.js"

export type ITaskRepository = {
    save: (task: Task) => Promise<void>
    findByTitle: (title: string) => Promise<Task | null>
}

export const taskRepositoryPostgre: ITaskRepository = {
    save: async (task: Task)=>{
        console.log('Saving task to the database...')
    },
    findByTitle: async (title: string) => {
        return {
            id: '2',
            title: 'teste',
            isCompleted: false
        } as Task
    }
}