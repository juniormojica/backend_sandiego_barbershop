import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Client', {
    idClient: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false

    }

  })
}
