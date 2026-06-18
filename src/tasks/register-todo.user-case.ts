import type { Task } from "./task.entity.js";
import type { ITaskRepository } from "./task-repository.js";
import { createTask } from "./task.entity.js";

export const registerTodo = async (title: string, taskRepository: ITaskRepository) => {
    const task = createTask(title)
    
    const existTodo = await taskRepository.findByTitle(title)
    if(existTodo){
        return existTodo
    }

    await taskRepository.save(task)
    return task
}