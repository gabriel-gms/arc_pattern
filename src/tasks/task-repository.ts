import type { Task } from "../tasks/task.entity.js"

export type ITaskRepository = {
    save: (task: Task) => Promise<void>
}

export const taskRepositoryPostgre: ITaskRepository = {
    save: async (task: Task)=>{
        console.log('Saving task to the database...')
    } 
}