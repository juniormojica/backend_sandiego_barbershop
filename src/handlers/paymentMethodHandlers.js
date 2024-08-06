import { postPaymentMethod, getPaymentMethods, deletePaymentMethod, updatePaymentMethod } from '../controllers/paymentMethodsController.js'
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
    const { methodName } = req.body

    const newMethod = await postPaymentMethod({ methodName })
    res.status(201).json({ error: false, data: newMethod })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const deletePaymentMethodHandler = async (req, res) => {
  try {
    const { idMethod } = req.body
    if (!idMethod) {
      throw Error('Se necesita el id del metodo para Eliminarlo')
    }
    const methodDeleted = await deletePaymentMethod(idMethod)
    res.status(201).json({ error: false, data: methodDeleted })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const updatePaymentMethodHandler = async (req, res) => {
  try {
    const { idMethod, newMethodName } = req.body
    if (!idMethod) {
      throw Error('Se necesita el id del metodo para Actualizarlo')
    }
    const updatedMethod = await updatePaymentMethod(idMethod, newMethodName)
    res.status(201).json({ error: false, data: updatedMethod })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
