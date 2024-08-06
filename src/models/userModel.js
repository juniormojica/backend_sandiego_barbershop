import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    roles: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Usa ARRAY para almacenar múltiples roles
      allowNull: false,
      defaultValue: ['user'], // Valor por defecto (puedes cambiarlo según tus necesidades)
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  })
}