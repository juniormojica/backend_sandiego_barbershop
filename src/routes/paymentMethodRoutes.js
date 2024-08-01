import { Router } from "express";
import { getPaymentMethodsHanddler, postPaymentMethodHandler, deletePaymentMethodHandler, updatePaymentMethodHandler } from "../handlers/paymentMethodHandlers.js";
const paymentMethodRouter = Router()

paymentMethodRouter
  .get("/", getPaymentMethodsHanddler)
  .post("/", postPaymentMethodHandler)
  .delete("/:id", deletePaymentMethodHandler)
  .patch('/', updatePaymentMethodHandler)


export default paymentMethodRouter