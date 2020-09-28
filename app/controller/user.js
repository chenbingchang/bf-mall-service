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
    if (!body.tell || !body.pwd) {
      // 参数不正确
      ctx.status = 200;
      ctx.body = '新增用户失败：参数不正确';
      return;
    }

    let user;
    const param = {
      tell: body.tell,
      pwd: body.pwd,
    };
    try {
      user = await ctx.model.User.create(param);
    } catch (e) {
      console.log(e);
      ctx.status = 200;
      ctx.body = '新增用户失败：' + e;
      return;
    }

    ctx.status = 200;
    ctx.body = '新增用户成功' + user;
  }
}

module.exports = User;
