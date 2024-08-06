import sequelize from '../database/db.js'

const { User } = sequelize.models
export const signUpController = async (user) => {

  // Verificar si el correo electrónico ya existe
  const existingEmailUser = await User.findOne({
    where: { email: user.email }
  });

  if (existingEmailUser) {
    throw new Error('El correo electrónico ya está registrado.');
  }

  // Verificar si el nombre de usuario ya existe
  const existingUsernameUser = await User.findOne({
    where: { username: user.username }
  });

  if (existingUsernameUser) {
    throw new Error('El nombre de usuario ya está registrado.');
  }

  // Si no existen registros con el correo electrónico o el nombre de usuario, crear uno nuevo
  const newUser = await User.create({
    username: user.username,
    password: user.password,
    email: user.email,
    roles: user.roles,
    isActive: user.isActive,
  });
  return newUser;
}




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
