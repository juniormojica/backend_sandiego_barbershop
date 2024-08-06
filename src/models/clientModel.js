import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false

    },
    id_client: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  })
}
