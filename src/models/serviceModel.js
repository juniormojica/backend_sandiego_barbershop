import { DataTypes } from "sequelize"
export default (sequelize) => {
  sequelize.define('Service',
    {
      id_service: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      service_name: {
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
      },



    }, {
    timestamps: false
  }
  )
}