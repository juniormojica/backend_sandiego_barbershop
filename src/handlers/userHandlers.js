import { getAllUsers, getUserById } from "../controllers/userController.js"
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
    let { id } = req.params

    let user = await getUserById(id)
    res.status(201).json({ error: false, data: user })



  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }


}


export const createUserHandler = async () => {

}