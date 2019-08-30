const Koa = require('koa');
const app = new Koa();
const port = 3002

app.use(async ctx => {
  const val = ctx.request.query.val
  const data = require(val)
  ctx.body = {data}
})

app.listen(port)
