import sequelize from '../database/db.js'

const { Barber, Client, PaymentMethod, Service, User } = sequelize.models

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
const clientsData = [
  { name: 'Juan Pérez', phone: '555-1234' },
  { name: 'María Gómez', phone: '555-5678' },
  { name: 'Carlos López', phone: '555-8765' },
  { name: 'Ana Martínez', phone: '555-4321' },
  { name: 'Luis Fernández', phone: '555-6789' }]

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

const usersData = [
  {
    username: 'john_doe',
    password: 'securePassword123',
    email: 'john.doe@example.com',
    roles: ['user', 'admin', 'barber'],
    isActive: true
  },
  {
    username: 'jane_smith',
    password: 'securePassword123',
    email: 'jane.smith@example.com',
    roles: ['user', 'owner'],
    isActive: true
  },
  {
    username: 'michael_jones',
    password: 'securePassword123',
    email: 'michael.jones@example.com',
    roles: ['admin', 'barber'],
    isActive: false
  },
  {
    username: 'emily_davis',
    password: 'securePassword123',
    email: 'emily.davis@example.com',
    roles: ['user', 'admin', 'owner'],
    isActive: true
  },
  {
    username: 'david_wilson',
    password: 'securePassword123',
    email: 'david.wilson@example.com',
    roles: ['user', 'barber'],
    isActive: false
  }
]

export const injectSeeds = async () => {
  await Barber.bulkCreate(barbersData)
  await Client.bulkCreate(clientsData)
  await PaymentMethod.bulkCreate(paymentMethods)
  await Service.bulkCreate(services)
  await User.bulkCreate(usersData)

  console.log('seeds injected!')
}
