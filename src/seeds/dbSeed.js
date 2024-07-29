import sequelize from "../database/db.js";

const { Barber, Client, PaymentMethod, Service } = sequelize.models

const barbersData = [
  {
    name: 'Santiago',
    phone: '162165162',
    state: 'active',
  },
  {
    name: 'junior',
    phone: '323232',
    state: 'active',
  },
  {
    name: 'miguel',
    phone: '43434',
    state: 'active',
  },
]
const clientsData = [{ name: 'Juan Pérez', phone: '555-1234' },
{ name: 'María Gómez', phone: '555-5678' },
{ name: 'Carlos López', phone: '555-8765' },
{ name: 'Ana Martínez', phone: '555-4321' },
{ name: 'Luis Fernández', phone: '555-6789' }]

const paymentMethods = [
  { method_name: 'nequi' },
  { method_name: 'bancolombia' },
  { method_name: 'efectivo' },
  { method_name: 'daviPlata' },
]

const services = [
  {
    service_name: 'Corte de Cabello',
    duration: 30, // duración en minutos
    category: 'Corte'
  },
  {
    service_name: 'Barba',
    duration: 20, // duración en minutos
    category: 'Barba'
  },
  {
    service_name: 'Barba y Corte',
    duration: 45, // duración en minutos
    category: 'Barba y Corte'
  },
  {
    service_name: 'Keratina',
    duration: 60, // duración en minutos
    category: 'Tratamiento'
  },
  {
    service_name: 'Coloración',
    duration: 90, // duración en minutos
    category: 'Coloración'
  },
  {
    service_name: 'Cerquillos',
    duration: 15, // duración en minutos
    category: 'Corte'
  },
  {
    service_name: 'Cepillado',
    duration: 20, // duración en minutos
    category: 'Tratamiento'
  }
];
export const injectSeeds = async () => {
  await Barber.bulkCreate(barbersData)
  await Client.bulkCreate(clientsData);
  await PaymentMethod.bulkCreate(paymentMethods);
  await Service.bulkCreate(services)

  console.log('seeds injected!');
}

