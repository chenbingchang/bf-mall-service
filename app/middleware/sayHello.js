'use strict';

// module.exports = (options, app) => {
module.exports = () => {
  return async function sayHello(ctx, next) {
    console.log('响应前的Hello----1');
    await next();
    console.log('响应的内容：', ctx.body);
    console.log('响应后的Hello----2');
  };
};
