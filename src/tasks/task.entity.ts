import { v4 } from "uuid";

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "DONE" | "CANCELLED"

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