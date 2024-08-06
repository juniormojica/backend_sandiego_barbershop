import { Router } from 'express'
import { signInHandler, signUpHandler } from '../handlers/authHandlers.js'

const autRouter = Router()

autRouter.post('/signin', signInHandler)

autRouter.post('/signup', signUpHandler)
export default autRouter
