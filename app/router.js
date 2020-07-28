'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/csrfToken', controller.home.csrfToken);
  router.post('/manage/login', controller.login.login);
  router.post('/upload/img', controller.upload.uploadImg);
};
