'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
  async uploadImg() {
    const { ctx, service } = this;
    const result = await service.upload.uploadImg.save();

    ctx.status = 200;
    ctx.body = result;
  }
}

module.exports = UploadController;
