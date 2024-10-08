import { DataTypes } from 'sequelize'
export default (sequelize) => {
  sequelize.define('ProvidedService',
    {
      idProvided: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    },
    {
      timestamps: false
    }
  )
}
