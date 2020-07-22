'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, service } = this;
    const body = ctx.request.body;

    const result = await service.login.login(body.account, body.pwd);

    ctx.status = 200;
    ctx.body = result;
  }
}

module.exports = LoginController;
