import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('PaymentMethod', {
    idMethod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true

    },
    methodName: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    timestamps: false
  })
}
