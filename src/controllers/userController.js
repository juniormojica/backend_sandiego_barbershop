import sequelize from '../database/db.js'
import { Op } from 'sequelize'
const { User, Client, Role, Barber } = sequelize.models
export const getAllUsersCtrl = async () => {
  const users = await User.findAll({
    attributes:
      { exclude: ['password'] },
    include: [{
      model: Client, // Incluye el modelo Client relacionado
      attributes: ['name', 'phone'] // Selecciona los atributos específicos del modelo Client
    }, {
      model: Role,
      attributes: ['roleName'],
      through: {
        attributes: []

      }

    }, {
      model: Barber, // Incluye el modelo Client relacionado
      attributes: ['name', 'phone', 'state'] // Selecciona los atributos específicos del modelo Client
    }]
  })
  if (users.length === 0) {
    throw Error('No existen usuarios creados,Verificar base de datos ')
  }
  return users
}

export const getUserByIdCtrl = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: ['password'] // Excluye la contraseña del usuario
      },
      include: [{
        model: Client, // Incluye el modelo Client relacionado
        attributes: ['name', 'phone'] // Selecciona los atributos específicos del modelo Client
      }, {
        model: Role,
        attributes: ['roleName'],
        through: {
          attributes: []

        }

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

export const createUserCtrl = async (user) => {
  try {
    const { username, email, password, idRole, isActive } = user

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
      isActive
    })
    if (Array.isArray(idRole)) {
      await newUser.addRoles(idRole)
    } else {
      await newUser.addRole(idRole)
    }

    return newUser
  } catch (error) {
    throw new Error(error.message)
  }
}

export const deleteUserCtrl = async (id) => {
  const user = await User.findByPk(id)

  if (user) {
    await user.destroy()
    return `Usuario con el id ${id} y usuario ${user.username} eliminado correctamente`
  }
  throw new Error(`No se encotro el Usuario con la id ${id},no se eliminó`)
}
