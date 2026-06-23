import type { Task } from "../domain/task.entity.js"

export const createTaskPresenter = (task: Task) => {
    return {data: {title: task.title}}
}