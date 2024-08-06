import { Router } from "express";
import { signInHandler, signUpHandler, getUsersHandler, getUserByIdHandler } from "../handlers/authHandlers.js";

import { verifyToken } from '../middlewares/index.js';
const autRouter = Router()

autRouter
  .get('/user', getUsersHandler)
  .get('/user/:id', verifyToken, getUserByIdHandler)

autRouter.post('/signin', signInHandler)

autRouter.post('/signup', signUpHandler)
export default autRouter