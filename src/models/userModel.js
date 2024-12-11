import { DataTypes } from 'sequelize'

export default (sequelize) => {
  sequelize.define('User', {
    idUser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  })
}
