import sequelize from '../database/db.js'

const { Service } = sequelize.models

export const createServiceCtrl = async ({ serviceName, duration, category }) => {
  try {
    const newService = await Service.create({
      serviceName,
      duration,
      category
    })
    return newService
  } catch (error) {
    throw new Error(`Error creating service: ${error.message}`)
  }
}

export const getAllServicesCtrl = async () => {
  try {
    const services = await Service.findAll()
    return services
  } catch (error) {
    throw new Error(`Error fetching services: ${error.message}`)
  }
}

export const getServiceByIdCtrl = async (id) => {
  try {
    const service = await Service.findByPk(id)
    return service
  } catch (error) {
    throw new Error(`Error fetching service: ${error.message}`)
  }
}

export const updateServiceCtrl = async (id, serviceData) => {
  try {
    const [updated] = await Service.update(serviceData, {
      where: { idService: id }
    })
    if (updated) {
      return await Service.findByPk(id)
    }
    throw new Error('Service not found')
  } catch (error) {
    throw new Error(`Error updating service: ${error.message}`)
  }
}

export const deleteServiceCtrl = async (id) => {
  try {
    const deleted = await Service.destroy({
      where: { idService: id }
    })
    if (!deleted) {
      throw new Error('Service not found')
    }
    return true
  } catch (error) {
    throw new Error(`Error deleting service: ${error.message}`)
  }
}
