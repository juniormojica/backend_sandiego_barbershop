import sequelize from '../database/db.js'
import { Op } from 'sequelize'
const { User, Client } = sequelize.models
export const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } })
  if (users.length === 0) {
    throw Error('No existen usuarios creados,Verificar base de datos ')
  }
  return users
}

export const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password'] // Excluye la contraseña del usuario
      },
      include: [{
        model: Client, // Incluye el modelo Client relacionado
        attributes: ['name', 'phone'] // Selecciona los atributos específicos del modelo Client
      }]
    })
    if (!user) {
      throw new Error('No se enconstro el usuario que consultas')
    }

    return user
  } catch (error) {
    throw Error(error.message)
  }
}

export const createUserController = async (user) => {
  try {
    const { username, email, password, roles, isActive } = user

    // Verificar si el correo electrónico ya existe
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      if (existingUser.email === email) {
        throw new Error('El correo electrónico ya está registrado.')
      }
      if (existingUser.username === username) {
        throw new Error('El nombre de usuario ya está registrado.')
      }
    }

    // Si no existen registros con el correo electrónico o el nombre de usuario, crear uno nuevo
    const newUser = await User.create({
      username,
      password,
      email,
      roles,
      isActive
    })
    return newUser
  } catch (error) {
    throw new Error(error.message)
  }
}
