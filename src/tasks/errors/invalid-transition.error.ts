import { AppError } from "../../shared/app-error.js";
import type { TaskStatus, TaskEvent } from "../task.entity.js";

export class InvalidTransitionError extends AppError {
    constructor(status: TaskStatus, event: TaskEvent){
        super(`Cannot apply ${event} to a Task with status ${status}`)
    }
}