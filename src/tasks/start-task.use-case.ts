import { TaskNotFound } from "./errors/task-not-found.error.js";
import type { ITaskRepository } from "./task-repository.js";
import { createTask, transitionStatus } from "./task.entity.js";

export const startTask = async(id: string, repository: ITaskRepository) => {
    const task = await repository.findById(id)
    if(!task)  throw new TaskNotFound(id)

    const updatedTask = transitionStatus(task, "start")
    await repository.save(updatedTask)
    return updatedTask
}