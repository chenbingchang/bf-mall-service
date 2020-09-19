'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

  }

  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    tell: {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: '电话号码',
    },
    pwd: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '密码',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    freezeTableName: true, // 不用给模型加s
  });
  return User;
};
