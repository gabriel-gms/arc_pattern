import { Router } from 'express'
import { createTaskController } from '../controllers/task.controller.js'

export const router = Router()

router.get('/ping', (req, res)=>{
    res.json({message: 'pong'})
})

router.post('/task', createTaskController)