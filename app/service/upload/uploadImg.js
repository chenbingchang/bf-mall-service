'use strict';
const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;

class UploadImgService extends Service {
  async save() {
    const { ctx, config } = this;
    // file包含文件名、类型、大小、路劲等信息
    const file = ctx.request.files[0];
    // 读取文件
    const tempFile = fs.readFileSync(file.filepath);
    const savePath = path.join(config.uploadImgUrl, file.filename);
    // 将文件保存到指定位置
    fs.writeFileSync(savePath, tempFile);
    // 清除上传文件的缓存文件
    ctx.cleanupRequestFiles();

    return {
      subCode: '00000100',
      msg: '',
      data: {
        url: savePath,
      },
    };
  }
}

module.exports = UploadImgService;
