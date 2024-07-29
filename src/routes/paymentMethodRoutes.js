import { Router } from "express";
import { getPaymentMethodsHanddler, postPaymentMethodHandler } from "../handlers/paymentMethodHandlers.js";
const paymentMethodRouter = Router()

paymentMethodRouter
  .get("/", getPaymentMethodsHanddler)
  .post("/", postPaymentMethodHandler)


export default paymentMethodRouter