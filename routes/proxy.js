const router = require('koa-router')()
const k2c = require('koa2-connect')
const {
	createProxyMiddleware
} = require('http-proxy-middleware')

router.prefix('/proxy')

router.get('*', k2c(createProxyMiddleware({
	target: 'https://dict.youdao.com/suggest',
	changeOrigin: true
})))

module.exports = router
