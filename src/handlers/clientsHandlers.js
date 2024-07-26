import { createClient, getUsers } from "../controllers/clientsController.js"
export const getClientsHandler = async (req, res) => {
  try {
    let { id } = req.params

    let user = await getUsers(id)
    res.status(201).json({ error: false, data: user })




  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}


export const postClientHandler = async (req, res) => {
  try {
    const { name, phone } = req.body
    const user = await createClient(name, phone)
    res.status(200).json({ data: user, error: false })
  } catch (error) {
    res.status(400).json({ message: 'No se pudo crear el cliente', error: true })

  }


}