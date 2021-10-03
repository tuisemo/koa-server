const Service = require('../server/index');
const Router = require('koa-router');
const Util = require('../server/util');

const router = new Router();
router.prefix('/api');

router.get('/', async (ctx, next) => {
  this.body = 'this is a apis response!';
  await next();
});

router.get('/getUsers', async (ctx, next) => {
  const res = Service.getUsers();
  this.type = 'json';
  this.body = Util.resFormat(res);
  await next();
});

router.post('/addUser', async (ctx, next) => {
  const params = this.request.body;
  const res = Service.addUser(params);
  this.type = 'json';
  this.body = Util.resFormat(res);
  await next();
});

module.exports = router;
