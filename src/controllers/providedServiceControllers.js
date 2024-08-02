
import sequelize from "../database/db.js";

const { ProvidedService, Barber, Client, Payment, PaymentMethod } = sequelize.models

export const postProvided = async (total, id_barber, id_client, id_service) => {
  const date = new Date()
  const newService = await ProvidedService.create({ total, date })
  await newService.setBarber(id_barber)
  await newService.setClient(id_client)
  await newService.addService(id_service)
  console.log(newService);

  return newService
}

export const getProvidedServices = async () => {
  const services = await ProvidedService.findAll({
    attributes: ['id_provided', 'date', 'total'],
    include: [{
      model: Barber,
      attributes: ['id_barber', 'name'],

    },
    {
      model: Client,
      attributes: ['id_client', 'name', 'phone'],

    }, {
      model: Payment,
      attributes: ['id_payment', 'amount'],
      include: {
        model: PaymentMethod,
        attributes: ['id_method', 'method_name'],
        as: 'PaymentMethod',
        through: { attributes: [] }

      }

    }]
  })


  return services
}

