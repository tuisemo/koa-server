var router = require('koa-router')();

router.prefix('/users');

router.get('/', function*(next) {
  this.body = 'this is a users response!';
  yield {};
});

router.get('/bar', function*(next) {
  this.body = 'this is a users/bar response!';
  yield {};
});

module.exports = router;
