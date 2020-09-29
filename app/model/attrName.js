'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const AttrName = app.model.define('AttrName', {
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
  }, {
    tableName: 'attr_name',
    freezeTableName: true, // 不用给模型加s
  });

  return AttrName;
};
