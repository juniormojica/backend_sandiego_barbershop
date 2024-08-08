import sequelize from '../database/db.js'
const { Barber } = sequelize.models
export const getAllBarbers = async () => { }

export const getBarberById = async () => { }
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
