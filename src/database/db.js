import { Sequelize } from "sequelize";
import definePaymentModel from "../models/PaymentModel.js"
import defineClientModel from "../models/clientModel.js"
import definePaymentMethodModel from "../models/PaymentMethodModel.js"
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/registrobarberia') // Example for postgres

definePaymentModel(sequelize)
defineClientModel(sequelize)
definePaymentMethodModel(sequelize)
console.log(sequelize.models);


const { Client, Payment, PaymentMethod } = sequelize.models
//Relations
Client.hasMany(Payment, {
  foreignKey: 'id_cliente'
})
Payment.belongsTo(Client, { foreignKey: 'id_cliente' })

Payment.belongsToMany(PaymentMethod, { through: 'Payments_paymentmethod', foreignKey: 'id_payment', timestamps: false })
PaymentMethod.belongsToMany(Payment, { through: 'Payments_paymentmethod', foreignKey: 'id_paymentmethod', timestamps: false })

export default sequelize