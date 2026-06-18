import { v4 } from "uuid";

export type Task = {
    id: string,
    title: string,
    isCompleted: boolean
}

export const createTask = (title: string): Task => {
    if(!title){
        throw new Error('Title is required');
    }

    return Object.freeze({
        id: v4(),
        title,
        isCompleted: false
    })
}