import { postProvided } from "../controllers/providedServiceControllers.js"
export const getProvidedHandler = async (req, res) => {

}

export const postProvidedHandler = async (req, res) => {
  try {
    const { total, id_barber, id_client, id_payment } = req.body

    const service = await postProvided(total, id_barber, id_client, id_payment)
    res.status(201).json({ error: false, data: service })

  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }




}