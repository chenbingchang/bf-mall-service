'use strict';

const path = require('path');
const fs = require('fs');

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async configDidLoad() {
    // 配置文件加载完成
    // 初始化上传文件需要的目录
    const config = this.app.config;

    fs.mkdirSync(path.join(config.uploadDir, config.tempDir), { recursive: true });
    fs.mkdirSync(path.join(config.uploadDir, config.uploadImgDir), { recursive: true });
    console.log('创建初始化目录完成');
  }
}

module.exports = AppBootHook;
