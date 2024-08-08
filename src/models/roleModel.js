import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Rol', {
    idRol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rolName: {
      type: DataTypes.ENUM('admin', 'owner', 'user', 'superAdmin', 'barber')
    },
    isActive: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    }
  }, { timeStamps: false })
}
