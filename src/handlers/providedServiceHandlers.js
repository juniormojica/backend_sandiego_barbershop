import { postProvided, getProvidedServices } from "../controllers/providedServiceControllers.js"
export const getProvidedHandler = async (req, res) => {
  try {

    const providedServices = await getProvidedServices()

    res.status(201).json({ error: false, data: providedServices })

  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }

}

export const postProvidedHandler = async (req, res) => {
  try {
    const { total, id_barber, id_client } = req.body

    const service = await postProvided(total, id_barber, id_client)
    res.status(201).json({ error: false, data: service })

  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }




}