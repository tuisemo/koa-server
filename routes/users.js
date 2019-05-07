var router = require('koa-router')();

router.prefix('/users');

router.get('/', function*(next) {
  this.body = 'this is a users response!';
  yield true;
});

router.get('/bar', function*(next) {
  this.body = 'this is a users/bar response!';
  yield true;
});

module.exports = router;
