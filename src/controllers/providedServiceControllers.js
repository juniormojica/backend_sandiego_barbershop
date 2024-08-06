import sequelize from '../database/db.js'

const { ProvidedService, Barber, Client, Payment, PaymentMethod, Service } = sequelize.models

export const postProvided = async (total, idBarber, idClient, idService) => {
  const date = new Date()
  const newService = await ProvidedService.create({ total, date })
  await newService.setBarber(idBarber)
  await newService.setClient(idClient)
  await newService.addService(idService)
  console.log(newService)

  return newService
}

export const getProvidedServices = async () => {
  const services = await ProvidedService.findAll({
    attributes: ['idProvided', 'date', 'total'],
    include: [{
      model: Barber,
      attributes: ['idBarber', 'name']

    },
    {
      model: Client,
      attributes: ['idClient', 'name', 'phone']

    }, {
      model: Payment,
      attributes: ['idPayment', 'amount'],
      include: {
        model: PaymentMethod,
        attributes: ['idMethod', 'methodName'],

        through: { attributes: [] }

      }

    },
    {
      model: Service,
      attributes: ['serviceName'],
      through: {
        attributes: []
      }
    }
    ]
  })

  return services.map(service => ({
    ...service.toJSON(),
    Services: service.Services.map(service => service.serviceName)
  }))
}
