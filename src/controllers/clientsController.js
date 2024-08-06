import sequelize from '../database/db.js'

const { Client, Payment, PaymentMethod } = sequelize.models

export const getClient = async (id) => {
  try {
    if (id) {
      const findedClient = await Client.findByPk(id, {
        attributes: ['id_client', 'name', 'phone'],
        include: {
          model: Payment,
          attributes: ['amount', 'createdAt'],

          include: {
            model: PaymentMethod,
            attributes: ['method_name'],
            through: { attributes: [] }
          }

        }
      })

      return findedClient
    }

    const allClients = await Client.findAll()
    return allClients
  } catch (error) {
    return error.message
  }
}

export const createClient = async (name, phone) => {
  try {
    const newClient = await Client.create({ name, phone })
    return newClient
  } catch (error) {
    return error.message
  }
}
export const updateClient = async (id, name, phone) => {
  const client = await Client.findByPk(id)

  if (!client) {
    throw Error('El cliente que quieres actualizar no existe')
  }
  const updateData = {}
  if (name) updateData.name = name
  if (phone) updateData.phone = phone

  const [affectedRows] = await Client.update(updateData, {
    where: {
      id_client: id
    }
  })

  // Verificar si se actualizó algún registro
  if (affectedRows === 0) {
    throw new Error('No se pudo actualizar el cliente')
  }

  // Devolver el cliente actualizado o algún mensaje de éxito
  return client
}

export const deleteClient = async (id) => {
  const client = await Client.findByPk(id)
  if (!client) {
    throw Error('El cliente a eliminar no existe')
  }
  await Client.destroy({
    where: {
      id_client: id
    }

  })

  return `Usuario con id ${id} eliminado correctamente`
}
