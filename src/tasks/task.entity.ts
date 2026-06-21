import { v4 } from "uuid";

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "DONE" | "CANCELLED"

const TRANSITIONS: Record<TaskStatus, Partial<Record<TaskEvent, TaskStatus>>> = {
    PENDING: { start: "IN_PROGRESS", cancel: "CANCELLED" },
    IN_PROGRESS: { complete: "DONE", cancel: "CANCELLED" },
    DONE: {},
    CANCELLED: {}
}

type TaskEvent = "start" | "complete" | "cancel"

export type Task = {
    id: string,
    title: string,
    status: TaskStatus
}

export const createTask = (title: string): Task => {
    if(!title){
        throw new Error('Title is required');
    }

    return Object.freeze({
        id: v4(),
        title,
        status: "PENDING"
    })
}

export const transitionStatus = (task: Task, event: TaskEvent) => {
    const nextStatus = TRANSITIONS[task.status][event]

    if(!nextStatus) throw new Error("Invalid transition error")
    return {...task, status: nextStatus}
}