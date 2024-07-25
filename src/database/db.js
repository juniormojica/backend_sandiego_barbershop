import { Sequelize } from "sequelize";
import { Client } from "../models/clientModel.js";
const DB = new Sequelize('postgres://postgres:postgres@localhost:5432/registrobarberia') // Example for postgres


Client(DB)
console.log(DB.models);
export default DB