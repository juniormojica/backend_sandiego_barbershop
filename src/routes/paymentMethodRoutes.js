import { Router } from "express";
import { getPaymentMethodsHanddler, postPaymentMethodHandler, deletePaymentMethodHandler } from "../handlers/paymentMethodHandlers.js";
const paymentMethodRouter = Router()

paymentMethodRouter
  .get("/", getPaymentMethodsHanddler)
  .post("/", postPaymentMethodHandler)
  .delete("/:id", deletePaymentMethodHandler)


export default paymentMethodRouter