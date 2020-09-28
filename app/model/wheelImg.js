'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const WheelImg = app.model.define('WheelImg', {
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
  }, {
    tableName: 'wheel_img',
    freezeTableName: true, // 不用给模型加s
  });

  return WheelImg;
};
