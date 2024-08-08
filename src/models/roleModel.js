import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('Role', {
    idRole: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    roleName: {
      type: DataTypes.ENUM('admin', 'owner', 'user', 'superAdmin', 'barber')
    },
    isActive: {
      type: DataTypes.STRING,
      defaultValue: 'active'
    }
  }, { timestamps: false })
}
