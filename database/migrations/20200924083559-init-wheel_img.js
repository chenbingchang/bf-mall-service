'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 轮播图片表
     *
     */
    await queryInterface.createTable('wheel_img', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
      },
      group: {
        type: Sequelize.STRING(32),
        allowNull: false,
        comment: '所属组',
        field: 'group',
        unique: 'group_with_order',
      },
      url: {
        type: Sequelize.STRING(200),
        allowNull: false,
        comment: '图片地址',
        field: 'url',
      },
      order: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        comment: '轮播顺序',
        field: 'order',
        unique: 'group_with_order',
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
      tableName: 'wheel_img',
      freezeTableName: true, // 不用给模型加s
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('wheel_img');
  },
};
