'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const User = app.model.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'id',
    },
    tell: {
      type: Sequelize.STRING(11),
      unique: true,
      allowNull: false,
      comment: '电话号码',
      field: 'tell',
    },
    pwd: {
      type: Sequelize.TEXT,
      allowNull: false,
      comment: '密码',
      field: 'pwd',
    },
  }, {
    tableName: 'user',
    freezeTableName: true, // 不用给模型加s
  });

  return User;
};
