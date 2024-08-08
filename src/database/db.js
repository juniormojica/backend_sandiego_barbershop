import { Sequelize } from 'sequelize'
import {
  defineBarberModel, defineClientModel, definePaymentMethodModel,
  definePaymentModel, defineProvidedServiceModel, defineServiceModel,
  defineUserModel, defineRoleModel
} from '../models/index.js'

const { DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PASSWORD } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`) // Example for postgres

definePaymentModel(sequelize)
defineClientModel(sequelize)
definePaymentMethodModel(sequelize)
defineBarberModel(sequelize)
defineServiceModel(sequelize)
defineProvidedServiceModel(sequelize)
defineUserModel(sequelize)
defineRoleModel(sequelize)

const { Client, Payment, PaymentMethod, Barber, Service, ProvidedService, User, Role } = sequelize.models

// Relation beetween CLient and payment
Client.hasMany(Payment, { foreignKey: 'idClient' })
Payment.belongsTo(Client, { foreignKey: 'idClient' })

Barber.belongsTo(User, { foreignKey: 'idUser' })
User.hasOne(Barber, { foreignKey: 'idUser' })
User.hasOne(Client, { foreignKey: 'idUser' })
Client.belongsTo(User, { foreignKey: 'idUser' })

// intermediate table beetween payments and paymentMethod
Payment.belongsToMany(PaymentMethod, { through: 'PaymentsPaymentmethod', foreignKey: 'idPayment', timestamps: false })
PaymentMethod.belongsToMany(Payment, { through: 'PaymentsPaymentmethod', foreignKey: 'idPaymentMethod', timestamps: false })

// intermediate table beetween serviceProvided And Services
ProvidedService.belongsToMany(Service, { through: 'ProvidedServiceService', foreignKey: 'idProvided' })
Service.belongsToMany(ProvidedService, { through: 'ProvidedServiceService', foreignKey: 'idService' })

// serviceProvided Relations with barber,client and payment
Barber.hasMany(ProvidedService, { foreignKey: 'idBarber' })
ProvidedService.belongsTo(Barber, { foreignKey: 'idBarber' })

Client.hasMany(ProvidedService, { foreignKey: 'idClient' })
ProvidedService.belongsTo(Client, { foreignKey: 'idClient' })

ProvidedService.hasMany(Payment, { foreignKey: 'idProvided' })
Payment.belongsTo(ProvidedService, { foreignKey: 'idProvided' })

User.belongsToMany(Role, { through: 'UserRole', foreignKey: 'idUser', timestamps: false })
Role.belongsToMany(User, { through: 'UserRole', foreignKey: 'idRole', timestamps: false })

export default sequelize
