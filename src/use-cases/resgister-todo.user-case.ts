import type { Task } from "../entities/task.js";
import type { ITaskRepository } from "../ports/task-repository.js";
import { createTask } from "../entities/task.js";

export const registerTodo = async ({title}: Task, taskRepository: ITaskRepository) => {
    return await taskRepository.save(createTask(title))
}