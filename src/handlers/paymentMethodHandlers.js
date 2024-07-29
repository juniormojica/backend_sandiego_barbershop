import { postPaymentMethod, getPaymentMethods } from "../controllers/paymentMethodsController.js"
export const getPaymentMethodsHanddler = async (req, res) => {
  try {


    const newMethod = await getPaymentMethods()
    res.status(201).json({ error: false, data: newMethod })

  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }

}

export const postPaymentMethodHandler = async (req, res) => {
  try {
    const { method_name } = req.body

    const newMethod = await postPaymentMethod({ method_name })
    res.status(201).json({ error: false, data: newMethod })

  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }



}



