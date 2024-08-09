import { createBarber, getBarberByIdCtrl, getAllBarbersCtrl, deleteBarberCtrl } from '../controllers/barberControllers.js'
export const getAllBarbers = async (req, res) => {
  try {
    const barbers = await getAllBarbersCtrl()
    if (!barbers) throw new Error('No Existen barberos en la db')

    res.status(200).json({ error: false, data: barbers })
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
    const newBarber = await createBarberCtrl({ name, phone, idUser })
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
    const { id } = req.params

    console.log(id)

    if (!id) {
      return res.status(400).json({ error: true, message: 'ID del barbero es requerido' })
    }

    const barber = await deleteBarberCtrl(id)

    if (!barber) {
      return res.status(404).json({ error: true, message: 'Barbero no encontrado' })
    }

    res.status(200).json({ error: false, message: barber })
  } catch (error) {
    // Enviar respuesta de error
    res.status(500).json({ error: true, message: error.message })
  }
}
