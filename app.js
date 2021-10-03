const Koa = require('koa');
const logger = require('koa-logger');
const json = require('koa-json');
const views = require('koa-views');
const onerror = require('koa-onerror');
const path = require('path');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

const app = new Koa();
// error handler
onerror(app);

// global middlewares
app.use(
  views(path.join(__dirname, './views'), {
    extension: 'ejs'
  })
);
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
  var start = new Date();
  await next();
  var ms = new Date() - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(api.routes(), api.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
