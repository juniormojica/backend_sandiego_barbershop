import sequelize from "../database/db.js";

import { DataTypes } from "sequelize";

export default function (sequelize) {
  sequelize.define(
    'Payment', {
    id_payment: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_client: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients', // nombre de la tabla en singular
        key: 'id_client'
      },
      allowNull: false
    }
  }
  )
}


