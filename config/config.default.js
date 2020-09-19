/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
const subCode = require('./subCode');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594601525909_5726';

  // add your middleware config here
  config.middleware = [ 'sayHello' ];

  // csrf
  config.security = {
    // 关闭默认开启的csrf插件
    csrf: {
      // enable: false,
    },
  };

  // mutipart，上传文件
  config.multipart = {
    mode: 'file',
  };

  // 修改启动端口
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '127.0.0.1',
    },
  };

  // 静态资源
  config.static = {
    prefix: '/public/',
    dir: [ path.join(appInfo.baseDir, 'public'), path.join(appInfo.baseDir, '..', 'upload') ],
  };
  // appInfo.baseDir是项目的根目录的绝对路径

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    subCode,
    // 上传文件的目录
    uploadDir: path.join(appInfo.baseDir, '..', 'upload'),
    // 上传图片的目录，基于上传文件的目录
    uploadImgDir: 'images',
    // 临时目录，基于上传文件的目录
    tempDir: 'temp',
    // sequelize配置
    sequelize: {
      dialect: 'mysql', // 数据库类型
      host: '127.0.0.1', // 地址
      port: 3306, // 端口
      database: 'bf_mall', // 数据库名称
      username: 'root', // 用户名
      password: '', // 密码，但是密码明文显示不好
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
