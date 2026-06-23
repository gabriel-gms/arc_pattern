import type { ITaskRepository } from "../domain/task-repository.js"
import type { Task } from "../domain/task.entity.js"

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