import { Router } from 'express'
import { deleteBarber, getAllBarbers, getBarberById, postBarber } from '../handlers/barberHandlers.js'
const barberRouter = Router()

barberRouter.get('/', getAllBarbers)

barberRouter.get('/:id', getBarberById)

barberRouter.post('/', postBarber)

barberRouter.delete('/:id', deleteBarber)

export default barberRouter
