import { Sequelize } from "sequelize";
import definePaymentModel from "../models/PaymentModel.js"
import defineClientModel from "../models/clientModel.js"
import definePaymentMethodModel from "../models/PaymentMethodModel.js"
import defineBarberModel from '../models/barberModel.js'
import defineServiceModel from '../models/serviceModel.js'
import defineProvidedServiceModel from '../models/ProvidedServiceModel.js'
import defineUserModel from '../models/userModel.js'

const { DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PASSWORD } = process.env




const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`) // Example for postgres

definePaymentModel(sequelize)
defineClientModel(sequelize)
definePaymentMethodModel(sequelize)
defineBarberModel(sequelize)
defineServiceModel(sequelize)
defineProvidedServiceModel(sequelize)
defineUserModel(sequelize)


const { Client, Payment, PaymentMethod, Barber, Service, ProvidedService } = sequelize.models


//Relation beetween CLient and payment 
Client.hasMany(Payment, {
  foreignKey: 'id_client'
})
Payment.belongsTo(Client, { foreignKey: 'id_client' })

// intermediate table beetween payments and paymentMethod 
Payment.belongsToMany(PaymentMethod, { through: 'Payments_paymentmethod', foreignKey: 'id_payment', timestamps: false })
PaymentMethod.belongsToMany(Payment, { through: 'Payments_paymentmethod', foreignKey: 'id_paymentmethod', timestamps: false })


//intermediate table beetween serviceProvided And Services 
ProvidedService.belongsToMany(Service, { through: 'ProvidedServiceService', foreignKey: 'id_provided' })
Service.belongsToMany(ProvidedService, { through: 'ProvidedServiceService', foreignKey: 'id_service' })


//serviceProvided Relations with barber,client and payment 
Barber.hasMany(ProvidedService, { foreignKey: 'id_barber' });
ProvidedService.belongsTo(Barber, { foreignKey: 'id_barber' });

Client.hasMany(ProvidedService, { foreignKey: 'id_client' });
ProvidedService.belongsTo(Client, { foreignKey: 'id_client' });

ProvidedService.hasMany(Payment, { foreignKey: 'id_provided' });
Payment.belongsTo(ProvidedService, { foreignKey: 'id_provided' });

export default sequelize