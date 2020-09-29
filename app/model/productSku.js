'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const ProductSku = app.model.define('ProductSku', {
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
  }, {
    tableName: 'product_sku',
    freezeTableName: true, // 不用给模型加s
  });

  return ProductSku;
};
