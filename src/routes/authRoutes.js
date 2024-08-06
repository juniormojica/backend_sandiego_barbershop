import { Router } from "express";
import { signInHandler, signUpHandler } from "../handlers/authHandlers.js";

import { verifyToken } from '../middlewares/index.js';
const autRouter = Router()



autRouter.post('/signin', signInHandler)

autRouter.post('/signup', signUpHandler)
export default autRouter