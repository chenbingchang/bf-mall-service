'use strict';
const fs = require('fs');
const path = require('path');
const Service = require('egg').Service;

class UploadImgService extends Service {
  /**
   * 保存上传的图片
   * 先把文件保存到临时目录，后面如果该文件有用到再移到相应的目录
   */
  async save() {
    const { ctx, config } = this;
    // file包含文件名、类型、大小、路劲等信息
    const file = ctx.request.files[0];
    // 读取文件
    const fileData = fs.readFileSync(file.filepath);
    const newFileName = ctx.createUuidFileName(file);
    const savePath = path.join(config.uploadDir, config.tempDir, newFileName);

    // 将文件保存到指定位置
    fs.writeFileSync(savePath, fileData);
    // 清除上传文件的缓存文件
    ctx.cleanupRequestFiles();

    const hostname = config.cluster.listen.hostname ? config.cluster.listen.hostname : '127.0.0.1';
    const port = config.cluster.listen.port ? config.cluster.listen.port : '7001';
    const publicPreFix = config.static.prefix ? config.static.prefix : '/public/';
    const url = `http://${hostname}:${port}${publicPreFix}${config.tempDir}/${newFileName}`;

    return {
      ...config.subCode.upload_img_sucess,
      data: {
        url,
      },
    };
  }
}

module.exports = UploadImgService;
