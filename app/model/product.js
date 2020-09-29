'use strict';

module.exports = app => {
  const Sequelize = app.Sequelize;

  const Product = app.model.define('Product', {
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
      comment: '商品名称',
      field: 'name',
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: false,
      comment: '商品标题',
      field: 'title',
    },
    poster: {
      type: Sequelize.STRING(200),
      allowNull: false,
      comment: '封面图',
      field: 'poster',
    },
    wheel: {
      type: Sequelize.TEXT,
      comment: '详情轮播图[{type: 1, order: 1, url: ""}],type:1-图片；2-视频；',
      field: 'wheel',
    },
    desc: {
      type: Sequelize.STRING(100),
      allowNull: false,
      comment: '商品详情页描述',
      field: 'desc',
    },
    detail: {
      type: Sequelize.TEXT,
      comment: '商品详情，富文本',
      field: 'detail',
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: '商品所属分类ID',
      field: 'category_id',
      references: {
        // 这是对另一个模型的参考
        model: {
          tableName: 'category',
        },
        // 这是引用模型的列名
        key: 'id',
      },
    },
  }, {
    tableName: 'product',
    freezeTableName: true, // 不用给模型加s
  });

  return Product;
};
