/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

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
  config.middleware = [];

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
      port: 7001,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // 上传图片的路劲
    uploadImgUrl: path.join(__dirname, '..', '..', 'upload', 'images'),
  };

  return {
    ...config,
    ...userConfig,
  };
};
