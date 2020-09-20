'use strict';

const Controller = require('egg').Controller;

/**
 * 用户
 */
class User extends Controller {
  // 新增用户
  async add() {
    const { ctx } = this;
    const body = ctx.request.body;

    console.log('用户信息', body);
    ctx.status = 200;
    ctx.body = '新增用户成功';
  }
}

module.exports = User;
