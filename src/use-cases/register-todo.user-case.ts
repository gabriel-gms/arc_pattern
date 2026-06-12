import type { Task } from "../entities/task.js";
import type { ITaskRepository } from "../ports/task-repository.js";
import { createTask } from "../entities/task.js";

export const registerTodo = async (title: string, taskRepository: ITaskRepository) => {
    const task = createTask(title)
    await taskRepository.save(task)
    return task
}