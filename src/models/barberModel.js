import { DataTypes } from 'sequelize'
export default (sequelize) => {
  sequelize.define('Barber',
    {
      idBarber: {
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
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: 'active'
      }

    }
  )
}
