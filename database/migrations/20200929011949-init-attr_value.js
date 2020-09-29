'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 属性值表
     *
     */
    await queryInterface.createTable('attr_value', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      value: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '属性值',
        field: 'name',
        unique: 'name_value',
      },
      attrNameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '所属属性名id',
        field: 'attr_name_id',
        unique: 'name_value',
        references: {
          // 这是对另一个模型的参考
          model: {
            tableName: 'attr_name',
          },
          // 这是引用模型的列名
          key: 'id',
        },
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
      tableName: 'attr_value',
      freezeTableName: true, // 不用给模型加s
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('attr_value');
  },
};
