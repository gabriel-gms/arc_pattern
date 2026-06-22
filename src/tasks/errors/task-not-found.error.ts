import { AppError } from "../../shared/app-error.js";

export class TaskNotFound extends AppError {
    constructor(id:string){
        super(`Task ${id} not found`)
    }
}