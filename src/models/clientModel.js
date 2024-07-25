import { DataTypes, } from "sequelize";
import DB from "../database/db.js";
export default (sequelize) => {
  sequelize.define('Client', {
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
} 