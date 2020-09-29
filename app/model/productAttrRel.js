'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const ProductAttrRel = app.model.define('ProductAttrRel', {
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
      unique: 'product_attr_unique',
      references: {
        // 这是对另一个模型的参考
        model: {
          tableName: 'product',
        },
        // 这是引用模型的列名
        key: 'id',
      },
    },
    attrNameId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: '属性名id',
      field: 'attr_name_id',
      unique: 'product_attr_unique',
      references: {
        // 这是对另一个模型的参考
        model: {
          tableName: 'attr_name',
        },
        // 这是引用模型的列名
        key: 'id',
      },
    },
    attrValueId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: '属性值id',
      field: 'attr_value_id',
      unique: 'product_attr_unique',
      references: {
        // 这是对另一个模型的参考
        model: {
          tableName: 'attr_value',
        },
        // 这是引用模型的列名
        key: 'id',
      },
    },
  }, {
    tableName: 'product_attr_rel',
    freezeTableName: true, // 不用给模型加s
  });

  return ProductAttrRel;
};
