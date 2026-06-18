import type { Task } from "./task.entity.js";
import type { ITaskRepository } from "./task-repository.js";
import { createTask } from "./task.entity.js";

export const registerTodo = async (title: string, taskRepository: ITaskRepository) => {
    const task = createTask(title)
    await taskRepository.save(task)
    return task
}