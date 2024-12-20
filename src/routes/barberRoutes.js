import { Router } from 'express'
import { toggleBarberState, getAllBarbers, getBarberById, postBarber, getBarberUserInfo } from '../handlers/barberHandlers.js'
const barberRouter = Router()

barberRouter.get('/', getAllBarbers)

barberRouter.get('/:id', getBarberById)

barberRouter.post('/', postBarber)

barberRouter.patch('/:id/toggle', toggleBarberState)
barberRouter.get('/:id/info', getBarberUserInfo)

export default barberRouter
