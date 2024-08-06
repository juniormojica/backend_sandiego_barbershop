import { createClient, getClient, updateClient, deleteClient } from '../controllers/clientsController.js'
export const getClientsHandler = async (req, res) => {
  try {
    const { id } = req.params

    const user = await getClient(id)
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

export const patchClientHandler = async (req, res) => {
  const { name, phone } = req.body
  const { id } = req.params
  console.log(name, phone, id)
  try {
    if (id && (name || phone)) {
      const client = await updateClient(id, name, phone)
      res.status(200).json({ data: client, error: false })
    }
  } catch (error) {
    res.status(400).json({ message: 'No se pudo crear el cliente', error: true })
  }
}

export const deleteClientHandler = async (req, res) => {
  const { id } = req.params

  console.log(id)

  try {
    if (!id) {
      throw Error('Debes proporcionar el id del cliente que quieres eliminar')
    }
    const deletedClient = await deleteClient(id)
    res.status(200).json({ data: deletedClient, error: false })
  } catch (error) {
    res.status(400).json({ message: error.message, error: true })
  }
}
