import { AppError } from "../../shared/app-error.js";

export class SmallTitleError extends AppError {
    constructor(){
        super(`Title must be greater than 2 characters`)
    }
}