import { createRolCtrl, getAllRolesCtrl, getRoleByIdCtrl } from '../controllers/roleControllers.js'
export const postRole = async (req, res) => {
  try {
    const { roleName } = req.body
    console.log(roleName)

    const newRole = await createRolCtrl({ roleName })
    if (!newRole) {
      throw new Error('No fue posible crear el rol')
    }
    res.status(201).json({ error: false, data: newRole })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getAllRoles = async (req, res) => {
  try {
    const allRoles = await getAllRolesCtrl()
    if (!allRoles) {
      throw new Error('No Existen Roles')
    }
    res.status(201).json({ error: false, data: allRoles })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getRoleById = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)

    const role = await getRoleByIdCtrl(id)
    if (!role) {
      throw new Error(`No se encontro el role con el id ${id}`)
    }
    res.status(201).json({ error: false, data: role })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
