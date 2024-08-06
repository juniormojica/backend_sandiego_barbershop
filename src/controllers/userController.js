import sequelize from "../database/db.js"
const { User } = sequelize.models
export const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } })
  if (users.length === 0) {
    throw Error('No existen usuarios creados,Verificar base de datos ')
  }
  return users
}

export const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } })
    if (!user) {
      throw new Error("No se enconstro el usuario que consultas");

    }

    return user

  }
  catch (error) {
    throw Error(error.message)
  }

} 
