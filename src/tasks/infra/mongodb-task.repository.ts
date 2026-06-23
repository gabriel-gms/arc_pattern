import type { ITaskRepository } from "../task-repository.js";
import type { Task } from "../task.entity.js";

export const TaskRespositoryMongoDB: ITaskRepository = {
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