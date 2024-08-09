import { Router } from 'express'
import { getUsersHandler, getUserByIdHandler, createUserHandler, deleteUserHandler } from '../handlers/userHandlers.js'

import { verifyToken } from '../middlewares/index.js'
const userRouter = Router()

userRouter
  .get('/', getUsersHandler)
  .get('/:id', getUserByIdHandler)
  .post('/', createUserHandler)
  .delete('/:id', deleteUserHandler)

export default userRouter
