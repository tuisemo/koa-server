const Service = require('../server/index');
var router = require('koa-router')();
const Util = require('../server/util');

router.prefix('/api');

router.get('/', function*(next) {
  this.body = 'this is a apis response!';
  yield next;
});

router.get('/getUsers', function*(next) {
  const res = Service.getUsers();
  this.type = 'json';
  this.body = Util.resFormat(res);
  yield next;
});

router.post('/addUser', function*(next) {
  const params = this.request.body;
  const res = Service.addUser(params);
  this.type = 'json';
  this.body = Util.resFormat(res);
  yield next;
});

module.exports = router;
