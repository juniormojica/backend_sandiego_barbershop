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
    }
  }
  )
}


