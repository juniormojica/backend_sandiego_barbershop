import { DataTypes } from 'sequelize'
export default (sequelize) => {
  sequelize.define('Service',
    {
      idService: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      serviceName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }

    },
    {

      timestamps: false
    }
  )
}
