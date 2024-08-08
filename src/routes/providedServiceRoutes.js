import { Router } from 'express'
import { getProvidedHandler, postProvidedHandler } from '../handlers/providedServiceHandlers.js'
const providedServiceRouter = Router()

providedServiceRouter
  .get('/', getProvidedHandler)
  .post('/', postProvidedHandler)

export default providedServiceRouter
