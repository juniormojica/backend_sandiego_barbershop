import { Sequelize } from "sequelize";

const DB = new Sequelize('postgres://postgres:postgres@localhost:5432/registrobarberia') // Example for postgres



export default DB