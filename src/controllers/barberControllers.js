import sequelize from '../database/db.js'
const { Barber, User } = sequelize.models
export const getAllBarbersCtrl = async () => {
  const barbers = await Barber.findAll({
    attributes: ['name', 'phone', 'state', 'idBarber'],
    include: {
      model: User,
      attributes: ['idUser', 'email']
    }
  })
  if (!barbers) throw new Error('No se encontraron los barberos')

  return barbers
}

export const getBarberByIdCtrl = async (id) => {
  const barber = Barber.findByPk(id, {
    attributes: ['name', 'phone', 'state'],
    include: {
      model: User,
      attributes: ['idUser', 'email']
    }
  })
  if (!barber) throw new Error(`No se encontro el barbero con id ${id} en la base de datos`)
  return barber
}
export const createBarberCtrl = async (barberInfo) => {
  const [barber] = await Barber.findOrCreate({
    where: { phone: barberInfo.phone },
    defaults: barberInfo
  })

  if (barber) {
    return barber
  } else {
    throw new Error('Error al crear o encontrar el barbero')
  }
}
export const deleteBarberCtrl = async (id) => {
  const barber = await Barber.findByPk(id)
  if (barber) {
    barber.state = 'inactive'
    await barber.save()
    return `Barbero con el id ${id} desactivado correctamente`
  }
  throw new Error(`No se encontró el barbero con el id ${id}, no se desactivó`)
}

export const toggleBarberStateCtrl = async (id) => {
  const barber = await Barber.findByPk(id)
  if (barber) {
    barber.state = barber.state === 'active' ? 'inactive' : 'active'
    await barber.save()
    return `Barbero con el id ${id} ahora está ${barber.state}`
  }
  throw new Error(`No se encontró el barbero con el id ${id}`)
}
