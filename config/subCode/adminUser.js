'use strict';

/**
 * 根据关键字映射唯一的subCode
 * subCode规则：
 * 8位（3、3、2）subCode，，前3位为模块，中间3位为功能，最后2位位状态，从数字和大写字母中挑选
 * 关键字规矩：
 * 模块_功能_状态
 * 当前模块标识:001
 */
module.exports = {
  // 管理用户登录成功
  adminUser_login_sucess: {
    subCode: '00100100',
    msg: '',
  },
};
