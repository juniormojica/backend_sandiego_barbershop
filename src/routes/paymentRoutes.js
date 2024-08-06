import { Router } from 'express'
import { postPaymentHandler, getPaymentsHandler } from '../handlers/paymentHandler.js'
const paymentRouter = Router()

paymentRouter
  .get('/', getPaymentsHandler)
  .post('/', postPaymentHandler)
export default paymentRouter
