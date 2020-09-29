'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const AttrValue = app.model.define('AttrValue', {
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
  }, {
    tableName: 'attr_value',
    freezeTableName: true, // 不用给模型加s
  });

  return AttrValue;
};
