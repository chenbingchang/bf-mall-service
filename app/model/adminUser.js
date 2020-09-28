'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const AdminUser = app.model.define('AdminUser', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
    tableName: 'admin_user',
    freezeTableName: true, // 不用给模型加s
  });

  return AdminUser;
};
