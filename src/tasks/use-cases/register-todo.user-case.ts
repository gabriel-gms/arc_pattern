import type { Task } from "../domain/task.entity.js";
import type { ITaskRepository } from "../domain/task-repository.js";
import { createTask } from "../domain/task.entity.js";

export const registerTodo = async (title: string, taskRepository: ITaskRepository) => {
    const task = createTask(title)
    
    const existTodo = await taskRepository.findByTitle(title)
    if(existTodo){
        return existTodo
    }

    await taskRepository.save(task)
    return task
}