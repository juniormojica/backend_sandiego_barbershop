import { Router } from 'express'
import { getAllRoles, getRoleById, postRole } from '../handlers/roleHandlers.js'
const roleRouter = Router()

roleRouter.post('/', postRole)
roleRouter.get('/', getAllRoles)
roleRouter.get('/:id', getRoleById)
export default roleRouter
