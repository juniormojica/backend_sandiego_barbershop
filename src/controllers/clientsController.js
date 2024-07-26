import sequelize from "../database/db.js"

const { Client } = sequelize.models

export const createClient = async (name, phone) => {

  try {
    const newClient = await Client.create({ name, phone })
    return newClient
  } catch (error) {

    return error.message
  }
}