import sequelize from '../database/db.js'

const { Barber, PaymentMethod, Service } = sequelize.models

const barbersData = [
  {
    name: 'Santiago',
    phone: '162165162',
    state: 'active'
  },
  {
    name: 'junior',
    phone: '323232',
    state: 'active'
  },
  {
    name: 'miguel',
    phone: '43434',
    state: 'active'
  }
]

const paymentMethods = [
  { methodName: 'nequi' },
  { methodName: 'bancolombia' },
  { methodName: 'efectivo' },
  { methodName: 'daviPlata' }
]

const services = [
  {
    serviceName: 'Corte de Cabello',
    duration: 30, // duración en minutos
    category: 'Corte'
  },
  {
    serviceName: 'Barba',
    duration: 20, // duración en minutos
    category: 'Barba'
  },
  {
    serviceName: 'Barba y Corte',
    duration: 45, // duración en minutos
    category: 'Barba y Corte'
  },
  {
    serviceName: 'Keratina',
    duration: 60, // duración en minutos
    category: 'Tratamiento'
  },
  {
    serviceName: 'Coloración',
    duration: 90, // duración en minutos
    category: 'Coloración'
  },
  {
    serviceName: 'Cerquillos',
    duration: 15, // duración en minutos
    category: 'Corte'
  },
  {
    serviceName: 'Cepillado',
    duration: 20, // duración en minutos
    category: 'Tratamiento'
  }
]

export const injectSeeds = async () => {
  await Barber.bulkCreate(barbersData, { logging: false })

  await PaymentMethod.bulkCreate(paymentMethods, { logging: false })
  await Service.bulkCreate(services, { logging: false })

  console.log('seeds injected!')
}
