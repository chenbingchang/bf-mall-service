'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
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
    }, {
      tableName: 'category',
      freezeTableName: true, // 不用给模型加s
      timestamps: false, // 不用自动生成创建、更新时间
    });
  },

  down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('category');
  },
};
