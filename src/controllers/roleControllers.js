import sequelize from '../database/db.js'

const { Role } = sequelize.models

export const createRolCtrl = async (roleNameoptions) => {
  const { roleName } = roleNameoptions

  const [userCreated] = await Role.findOrCreate({
    where: { roleName },
    defaults: roleNameoptions
  })

  if (!userCreated) {
    throw new Error('No se pudo crear el Role que asignaste')
  }
  return userCreated
}

export const getAllRolesCtrl = async () => {
  const roles = await Role.findAll()
  if (!roles) {
    throw new Error('No se pudieron Encontrar los roles ')
  }
  return roles
}

export const getRoleByIdCtrl = async (id) => {
  try {
    const role = await Role.findByPk(id)
    if (!role) {
      throw new Error('No se enconstro el usuario que consultas')
    }

    return role
  } catch (error) {
    throw Error(error.message)
  }
}
