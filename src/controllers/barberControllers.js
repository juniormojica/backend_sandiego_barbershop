import sequelize from '../database/db.js'
const { Barber, User } = sequelize.models
export const getAllBarbersCtrl = async () => {
  const barbers = await Barber.findAll({
    attributes: ['name', 'phone', 'state'],
    include: {
      model: User,
      attributes: ['username']
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
      attributes: ['username']
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
    await barber.destroy()
    return `Barbero con el id ${id} eliminado correctamente`
  }
  throw new Error(`No se encotro el barbero con la id ${id},no se eliminó`)
}
