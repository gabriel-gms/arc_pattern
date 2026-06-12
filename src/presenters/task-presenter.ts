import type { Task } from "../entities/task.js"

export const createTaskPresenter = (task: Task) => {
    return {data: {title: task.title}}
}