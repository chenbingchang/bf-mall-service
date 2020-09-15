'use strict';

const Controller = require('egg').Controller;

/**
 * 后台管理登录
 */
class AdminLoginController extends Controller {
  async login() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    const result = await service.adminLogin.login(body.account, body.pwd);

    ctx.status = 200;
    ctx.body = result;
  }
}

module.exports = AdminLoginController;
