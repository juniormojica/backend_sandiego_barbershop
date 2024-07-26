import { createClient } from "../controllers/clientsController.js"
export const getClientsHandler = async (req, res) => {
  try {
    res.json('Está ruta trae todos los usuarios cuando existan')
  } catch (error) {

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