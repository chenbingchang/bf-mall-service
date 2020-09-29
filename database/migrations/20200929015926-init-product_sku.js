'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * 产品库存表(SKU)
     *
     */
    await queryInterface.createTable('product_sku', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'id',
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '产品id',
        field: 'product_id',
        unique: 'product_sku_unique',
        references: {
          // 这是对另一个模型的参考
          model: {
            tableName: 'product',
          },
          // 这是引用模型的列名
          key: 'id',
        },
      },
      skuAttr: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: 'SKU属性，格式: 属性名id:属性值id，多个之间用英文逗号隔开',
        field: 'sku_attr',
        unique: 'product_sku_unique',
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comment: '价格',
        field: 'price',
      },
      discountPrice: {
        type: Sequelize.DOUBLE,
        comment: '打折之后的价格',
        field: 'discount_price',
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '库存数量',
        field: 'stock',
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
      tableName: 'product_sku',
      freezeTableName: true, // 不用给模型加s
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('product_sku');
  },
};
