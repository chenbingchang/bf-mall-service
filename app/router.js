'use strict';

/**
 * 路由配置
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 首页，后面可以去掉
  router.get('/', controller.home.index);
  // 随意的请求，只是为了第一次能够获得csrfToken
  router.get('/csrfToken', controller.home.csrfToken);
  // 后台管理登录
  router.post('/manage/login', controller.adminLogin.login);
  // 上传图片
  router.post('/upload/img', controller.upload.uploadImg);
};
