'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login(account, pwd) {
    const { config } = this;
    // @todo: 查询数据库
    console.log('有效帐号、密码', account, pwd);

    return {
      ...config.subCode.adminUser_login_sucess,
      data: {
        account,
        name: '陈柄昌',
        msg: '登录成功！',
      },
    };
  }
}

module.exports = LoginService;
