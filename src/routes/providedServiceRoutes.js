import { Router } from 'express'
import { getProvidedHandler, postProvidedHandler, getProvidedByIdHandler } from '../handlers/providedServiceHandlers.js'
const providedServiceRouter = Router()

providedServiceRouter
  .get('/', getProvidedHandler)
  .get('/:id', getProvidedByIdHandler)
  .post('/', postProvidedHandler)

export default providedServiceRouter
