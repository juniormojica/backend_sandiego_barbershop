import { Sequelize } from "sequelize";
import definePaymentModel from "../models/PaymentModel.js"
import defineClientModel from "../models/clientModel.js"
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/registrobarberia') // Example for postgres


const Payment = definePaymentModel(sequelize)
const Client = defineClientModel(sequelize)
console.log(sequelize.models);

export default sequelize