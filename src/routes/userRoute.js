import { Router } from 'express'
import { getUsersHandler, getUserByIdHandler, createUserHandler } from '../handlers/userHandlers.js'

import { verifyToken } from '../middlewares/index.js'
export const userRouter = Router()

userRouter
  .get('/', getUsersHandler)
  .get('/:id', verifyToken, getUserByIdHandler)
  .post('/', createUserHandler)
