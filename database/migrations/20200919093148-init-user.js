'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updated_at: {
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('user');
  },
};
