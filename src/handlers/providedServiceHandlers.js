import { postProvided, getProvidedServices } from '../controllers/providedServiceControllers.js'
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
    const { total, idBarber, idClient, idService } = req.body

    console.log(total, idBarber, idClient, idService)

    if (!total || !idBarber || !idClient || !idService) {
      throw new Error('No se puede crear el servicio faltan datos ')
    }

    const service = await postProvided(total, idBarber, idClient, idService)
    res.status(201).json({ error: false, data: service })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
