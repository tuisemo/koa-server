const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
