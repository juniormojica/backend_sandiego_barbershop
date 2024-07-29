import { Router } from "express";
import { postPaymentHandler } from "../handlers/paymentHandler.js";
const paymentRouter = Router();

paymentRouter
  .post('/', postPaymentHandler)
export default paymentRouter