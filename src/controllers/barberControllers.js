import sequelize from '../database/db.js'
const { Barber } = sequelize.models
export const getAllBarbers = async () => { }

export const getBarberByIdCtrl = async (id) => {
  const barber = Barber.findByPk(id)
  if (!barber) throw new Error(`No se encontro el barbero con id ${id} en la base de datos`)
  return barber
}
export const createBarber = async (barberInfo) => {
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
export const deleteBarber = async () => { }
