import sequelize from '../database/db.js'

const { User } = sequelize.models
export const signUpController = async (user) => {
  // Verificar si el correo electrónico ya existe
  const existingEmailUser = await User.findOne({
    where: { email: user.email }
  })

  if (existingEmailUser) {
    throw new Error('El correo electrónico ya está registrado.')
  }

  // Si no existen registros con el correo electrónico o el nombre de usuario, crear uno nuevo
  const newUser = await User.create({
    password: user.password,
    email: user.email,
    roles: user.roles,
    isActive: user.isActive
  })
  return newUser
}
