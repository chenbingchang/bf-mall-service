'use strict';
const Controller = require('egg').Controller;

/**
 * 加密密钥
 */
class Secret extends Controller {
  /**
   * AES密钥
   */
  async aes() {
    const { service } = this;

    await service.secrect.get();
  }
}

module.exports = Secret;
