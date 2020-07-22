'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  /**
   * 返回csrfToken，啥也不干
   */
  async csrfToken() {
    this.ctx.body = '';
  }
}

module.exports = HomeController;
