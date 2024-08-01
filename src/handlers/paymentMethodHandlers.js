import { postPaymentMethod, getPaymentMethods, deletePaymentMethod } from "../controllers/paymentMethodsController.js"
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

export const deletePaymentMethodHandler = async (req, res) => {
  try {
    const { id_method } = req.body
    if (!id_method) {
      throw Error('Se necesita el id del metodo para Eliminarlo')
    }
    const methodDeleted = await deletePaymentMethod(id_method)
    res.status(201).json({ error: false, data: methodDeleted })

  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }



}
