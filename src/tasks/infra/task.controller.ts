import type { RequestHandler } from "express";
import { registerTodo } from "../use-cases/register-todo.user-case.js";
import { taskRepositoryPostgre } from "./postgresql-task.repository.js";
import { createTaskPresenter } from "./task-presenter.js";

export const createTaskController: RequestHandler = async (req, res) => {
    const {title} = req.body

    if(!title){
        return res.status(400).json({message: 'Title is required'})
    }
    if(typeof title !== 'string'){
        return res.status(400).json({message: 'Title must be a string'})
    }
    if(title.length < 3){
        return res.status(400).json({message: 'Title must be at least 3 characters'})
    }

    const task = await registerTodo(title, taskRepositoryPostgre)
    return res.status(201).json(createTaskPresenter(task))
}