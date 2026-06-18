import type { Task } from "../tasks/task.entity.js"

export const createTaskPresenter = (task: Task) => {
    return {data: {title: task.title}}
}