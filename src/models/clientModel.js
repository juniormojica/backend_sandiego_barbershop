import { Sequelize, DataTypes, } from "sequelize";
import database from "../database/db.js";
export const Client = database.define('cliente', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})