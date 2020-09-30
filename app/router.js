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
  router.post('/manage/login', controller.adminUser.login);
  // 上传图片
  router.post('/upload/img', controller.upload.uploadImg);
  // 新增用户
  router.post('/user/add', controller.user.add);
  // 新增管理员
  router.post('/adminUser/add', controller.adminUser.add);
  // 加密密钥
  router.get('/secrect/aes', controller.secrect.aes);
};
