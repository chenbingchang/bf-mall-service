'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 属性名表
     *
     */
    await queryInterface.createTable('attr_name', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '属性名',
        field: 'name',
        unique: 'parent_name_category',
      },
      weight: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '权重，越大的排在前面，默认0',
        field: 'weight',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '属性名所属分类ID',
        field: 'category_id',
        unique: 'parent_name_category',
        references: {
          // 这是对另一个模型的参考
          model: {
            tableName: 'category',
          },
          // 这是引用模型的列名
          key: 'id',
        },
      },
      parentId: {
        type: Sequelize.INTEGER,
        comment: '父id',
        field: 'parent_id',
        unique: 'parent_name_category',
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
      tableName: 'attr_name',
      freezeTableName: true, // 不用给模型加s
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('attr_name');
  },
};
