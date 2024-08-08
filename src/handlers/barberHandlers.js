import { createBarber, getBarberByIdCtrl } from '../controllers/barberControllers.js'
export const getAllBarbers = async (req, res) => {
  try {
    res.status(200).json({ error: false, data: 'All barbers' })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}

export const getBarberById = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) throw new Error('No se envío el id del barbero a eliminar')
    const barberFound = await getBarberByIdCtrl(id)
    if (!barberFound) throw new Error(`No se encontró el barbero con el id ${id} `)
    res.status(200).json({ error: false, data: barberFound })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
export const postBarber = async (req, res) => {
  try {
    const { name, phone, idUser } = req.body
    if (!name && !phone && !idUser) {
      res.status(400).json({ error: true, message: 'Faltan datos para crear el usuario, necesitas name,phone,idUser' })
      return
    }
    const newBarber = await createBarber({ name, phone, idUser })
    if (newBarber) {
      res.status(200).json({ error: false, data: newBarber })
    } else {
      res.status(400).json({ error: true, message: 'No se puedo crear el barbero ' })
    }
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
export const deleteBarber = async (req, res) => {
  try {
    res.status(200).json({ error: false, data: 'deleted barber' })
  } catch (error) {
    res.status(400).json({ error: true, message: error.message })
  }
}
