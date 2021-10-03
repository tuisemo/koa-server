const Router = require('koa-router');

const router = new Router();

router.prefix('/users');

router.get('/', async (ctx, next) => {
  this.body = 'this is a users response!';
  await next();
});

router.get('/bar', async (ctx, next) => {
  this.body = 'this is a users/bar response!';
  await next();
});

module.exports = router;
