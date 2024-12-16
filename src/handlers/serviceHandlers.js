import {
  createServiceCtrl,
  getAllServicesCtrl,
  getServiceByIdCtrl,
  updateServiceCtrl,
  deleteServiceCtrl
} from '../controllers/serviceControllers.js'

export const postService = async (req, res) => {
  try {
    const { serviceName, duration, category } = req.body

    const newService = await createServiceCtrl({
      serviceName,
      duration,
      category
    })

    if (!newService) {
      throw new Error('Could not create service')
    }

    res.status(201).json({ error: false, data: newService })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getAllServices = async (req, res) => {
  try {
    const services = await getAllServicesCtrl()

    if (!services || services.length === 0) {
      throw new Error('No services found')
    }

    res.status(200).json({ error: false, data: services })
  } catch (error) {
    res.status(404).json({ error: true, message: error.message })
  }
}

export const getServiceById = async (req, res) => {
  try {
    const { id } = req.params

    const service = await getServiceByIdCtrl(id)

    if (!service) {
      throw new Error(`Service with id ${id} not found`)
    }

    res.status(200).json({ error: false, data: service })
  } catch (error) {
    res.status(404).json({ error: true, message: error.message })
  }
}

export const updateService = async (req, res) => {
  try {
    const { id } = req.params
    const { serviceName, duration, category } = req.body

    const updatedService = await updateServiceCtrl(id, {
      serviceName,
      duration,
      category
    })

    res.status(200).json({ error: false, data: updatedService })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const deleteService = async (req, res) => {
  try {
    const { id } = req.params

    await deleteServiceCtrl(id)

    res.status(200).json({ error: false, message: 'Service deleted successfully' })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
