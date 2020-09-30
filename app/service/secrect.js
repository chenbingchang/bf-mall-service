'use strict';

const Service = require('egg').Service;

class SecrectService extends Service {
  async get() {
    const { ctx, config } = this;
    // 加密前端登录用的加密密钥
    const encryptData = ctx.aesEncrypt(JSON.stringify(config.webAes), config.resAes.key, config.resAes.iv);

    ctx.status = 200;
    ctx.body = {
      ...config.subCode.secrect_get_sucess,
      data: encryptData,
    };
  }
}

module.exports = SecrectService;
