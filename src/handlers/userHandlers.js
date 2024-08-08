import { getAllUsers, getUserById, createUserController } from '../controllers/userController.js'
import { encriptPassWord } from '../utils/bcryptUtils.js'
import jwt from 'jsonwebtoken'
const { SECRET } = process.env
export const getUsersHandler = async (req, res) => {
  try {
    const users = await getAllUsers()
    if (!users) {
      throw new Error('No Se encontraron los usuarios')
    }
    res.status(200).json({ error: false, data: users })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params

    const user = await getUserById(id)
    res.status(201).json({ error: false, data: user })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const createUserHandler = async (req, res) => {
  try {
    const { username, password, email, isActive, idRole } = req.body
    if (!username || !password || !email) {
      return res.status(400).json({ error: true, message: 'Faltan datos para crear el usuario: Username, Password, o Email' })
    }
    const user = {
      username,
      email,
      password: await encriptPassWord(password),
      idRole,
      isActive
    }
    const newUser = await createUserController(user)

    const token = jwt.sign({ id: newUser.id }, SECRET, { expiresIn: 86400 })
    const responseUser = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      roles: newUser.roles,
      isActive: newUser.isActive
    }

    res.status(201).json({ error: false, token, user: responseUser })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
