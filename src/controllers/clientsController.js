import sequelize from "../database/db.js"

const { Client } = sequelize.models


export const getClient = async (id) => {
  try {
    if (id) {
      const findedClient = await Client.findByPk(id)
      if (!findedClient) {
        const allClients = await Client.findAll()
        return allClients
      }
      return findedClient

    }


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