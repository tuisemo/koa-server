const DB = require('../data/index');
const db = new DB();
console.log('db: ', db);
var router = require('koa-router')();

router.prefix('/api');

router.get('/', function*(next) {
  this.body = 'this is a apis response!';
  yield next
});

router.get('/count', function*(next) {
    console.log('next: ', next);
  const res = db.read('count');
  this.type = 'json';
  this.body = res;
  yield next
});

module.exports = router;
