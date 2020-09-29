'use strict';

const Controller = require('egg').Controller;

/**
 * 管理员
 */
class AdminUser extends Controller {
  // 新增管理员
  async add() {
    const { ctx } = this;
    const body = ctx.request.body;

    console.log('管理员信息', body);
    if (!body.tell || !body.pwd) {
      // 参数不正确
      ctx.status = 200;
      ctx.body = '新增管理员失败：参数不正确';
      return;
    }

    let adminUser;
    const param = {
      tell: body.tell,
      pwd: body.pwd,
    };
    try {
      adminUser = await ctx.model.AdminUser.create(param);
    } catch (e) {
      console.log(e);
      ctx.status = 200;
      ctx.body = '新增管理员失败：' + e;
      return;
    }

    ctx.status = 200;
    ctx.body = '新增管理员成功' + adminUser;
  }
}

module.exports = AdminUser;
