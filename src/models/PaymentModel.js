import { DataTypes } from 'sequelize'

export default function (sequelize) {
  sequelize.define(
    'Payment',
    {
      idPayment: {
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
