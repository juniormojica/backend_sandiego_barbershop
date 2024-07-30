import sequelize from "../database/db.js";

const { ProvidedService } = sequelize.models

export const postProvided = async (total, id_barber, id_client, id_payment) => {
  const date = new Date()
  const newService = await ProvidedService.create({ total, date })
  await newService.setBarber(id_barber)
  await newService.setClient(id_client)
  await newService.addPayment(id_payment)

  newService.save

  return newService
}