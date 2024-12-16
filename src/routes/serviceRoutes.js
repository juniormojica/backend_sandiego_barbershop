import { Router } from 'express'
import {
  postService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
} from '../handlers/serviceHandlers.js'

const serviceRouter = Router()

serviceRouter.post('/', postService)
serviceRouter.get('/', getAllServices)
serviceRouter.get('/:id', getServiceById)
serviceRouter.put('/:id', updateService)
serviceRouter.delete('/:id', deleteService)

export default serviceRouter
