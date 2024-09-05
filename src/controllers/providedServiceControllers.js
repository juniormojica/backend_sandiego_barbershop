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
  if (!services) {
    throw new Error('No se encontraron los servicios ')
  }
  const formattedServices = services.map(service => {
    const { Client: client, Barber: barber, Payments: payments, ...rest } = service.toJSON()

    return {
      ...rest,
      client: client
        ? {
            id: client.idClient,
            name: client.name,
            phone: client.phone
          }
        : null,

      barber: barber
        ? {
            id: barber.idBarber,
            name: barber.name
          }
        : null,
      payments: payments.map(payment => {
        return {
          idPayment: payment.idPayment,
          amount: payment.amount,
          methods: payment.PaymentMethods.map(method => {
            return {
              id: method.idMethod,
              name: method.methodName
            }
          })
        }
      })
    }
  })
  return formattedServices
}

export const getProvidedServiceById = async (id) => {
  const service = await ProvidedService.findByPk(id, {
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
      attributes: ['serviceName', 'idService', 'duration', 'category'],
      through: {
        attributes: []
      }
    }
    ]
  })
  if (!service) {
    throw new Error(`No se pudo encontrar el servicio con el id ${id}`)
  }

  const { Client: client, Barber: barber, Payments: payments, ...rest } = await service.toJSON()

  return {
    ...rest,
    client: {
      id: client.idClient,
      name: client.name,
      phone: client.phone
    },
    barber: {
      id: barber.idBarber,
      phone: barber.phone,
      name: barber.name
    },
    payments: payments.map((payment) => {
      return {
        idPayment: payment.idPayment,
        amount: payment.amount,
        method: payment.PaymentMethods.map((method) => {
          return {
            id: method.idMethod,
            name: method.methodName
          }
        })
      }
    })
  }
  // return service
}
