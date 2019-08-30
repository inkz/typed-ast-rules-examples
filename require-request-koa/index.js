const Koa = require('koa');
const app = new Koa();
const port = 3002

app.use(async ctx => {
  const val = ctx.request.query.val
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.request.body.val
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.request.get('val')
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.get('val')
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.request.querystring
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.request.href
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.href
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.query.val
  const data = require(val)
  ctx.body = {data}
})

app.use(async ctx => {
  const val = ctx.querystring
  const data = require(val)
  ctx.body = {data}
})

app.listen(port)
