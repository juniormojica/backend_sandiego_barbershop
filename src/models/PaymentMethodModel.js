import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('PaymentMethod', {
    id_method: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true

    },
    method_name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    timestamps: false
  })
}
