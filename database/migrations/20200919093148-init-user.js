'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 用户表
     *
     */
    await queryInterface.createTable('user', {
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
      // 创建时间和更新时间，migrate不会自动生成要手动加
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    }, {
      tableName: 'user',
      freezeTableName: true, // 不用给模型加s

    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user');
  },
};
