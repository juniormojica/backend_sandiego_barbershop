import { createPayment, getAllPayments } from "../controllers/paymentControllers.js"


export const getPaymentsHandler = async (req, res) => {
  try {
    const payments = await getAllPayments()
    if (!payments) {
      throw Error('No hay ningun pago creado ')
    }
    res.status(201).json({ data: payments, error: false })
  } catch (error) {
    res.status(400).json({ message: error.message, error: true })
  }
}


export const postPaymentHandler = async (req, res) => {

  try {
    const { amount, id_client, id_method } = req.body
    if (!amount || !id_client || !id_method) {
      throw Error('Falta informacion del metodo,id_client o id_method')
    }
    console.log(typeof req.body.id_client);
    const newPayment = await createPayment({ amount, id_client, id_method })
    res.status(201).json({ data: newPayment, error: false })
  } catch (error) {
    res.status(400).json({ message: error.message, error: true })

  }
}