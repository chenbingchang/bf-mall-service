'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 分类表
     *
     */
    await queryInterface.createTable('category', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '分类名称',
        field: 'name',
      },
      parentId: {
        type: Sequelize.INTEGER,
        comment: '父类id',
        field: 'parent_id',
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
      tableName: 'category',
      freezeTableName: true, // 不用给模型加s
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('category');
  },
};
