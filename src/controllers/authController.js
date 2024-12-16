import sequelize from '../database/db.js'
const { User, Role } = sequelize.models
export const signUpController = async (user) => {
  // Verificar si el correo electrónico ya existe
  const existingEmailUser = await User.findOne({
    where: { email: user.email }
  })

  if (existingEmailUser) {
    throw new Error('El correo electrónico ya está registrado.')
  }

  // Crear el nuevo usuario
  const newUser = await User.create({
    email: user.email,
    password: user.password,
    isActive: user.isActive
  })

  // Manejar la asignación de roles
  if (user.roles) {
    // Si se proporciona un string, convertirlo a array
    const roleNames = Array.isArray(user.roles) ? user.roles : [user.roles]

    // Buscar los roles en la base de datos
    const roles = await Role.findAll({
      where: { roleName: roleNames }
    })

    // Si no se encuentra el rol, crear uno por defecto
    if (roles.length === 0) {
      const defaultRole = await Role.findOne({ where: { name: 'user' } })
      if (defaultRole) {
        await newUser.addRole(defaultRole)
      }
    } else {
      // Asociar los roles encontrados al usuario
      await newUser.addRoles(roles)
    }
  } else {
    // Si no se proporcionan roles, buscar y asignar el rol por defecto
    const defaultRole = await Role.findOne({ where: { name: 'user' } })
    if (defaultRole) {
      await newUser.addRole(defaultRole)
    }
  }

  // Devolver el usuario con sus roles
  return await User.findByPk(newUser.idUser, {
    include: [Role]
  })
}
