const Koa = require('koa');
const app = new Koa();
const port = 3002

// false
app.use(async ctx => {
  ctx.body = 'Hello World!'
})

// false
app.use(async ctx => {
  const val22 = 'smth'
  const data22 = require(val22)
  ctx.body = 'ok'
})

// false
app.use(async ctx => {
  const data33 = ctx.request.body.val33
  ctx.body = 'ok' + data33
})

// false
app.use(async ctx => {
  const data44 = ctx.request.body.val44
  const obj44 = `smth ${data44}`
  ctx.body = 'ok' + obj44
})

// false
app.use(async ctx => {
  const data55 = ctx.request.query.val55
  const obj55 = 'smth' + data55
  ctx.body = 'ok' + obj55
})

// true
app.use(async ctx => {
  const val1 = ctx.request.query.val1
  ctx.body = {data: {
    name: require(val1)
  }}
})

// true
app.use(async ctx => {
  const val2 = ctx.request.body.val2
  const data2 = require(val2)
  ctx.body = `aaa ${data2}`
})

// true
app.use(async ctx => {
  const val3 = ctx.request.get('val')
  const data3 = require(val3)
  ctx.body = {data3}
})

// true
app.use(async ctx => {
  const val4 = ctx.get('val')
  const data4 = require(val4)
  ctx.body = {data4}
})

// true
app.use(async ctx => {
  const val5 = ctx.request.querystring
  const data5 = require(val5)
  ctx.body = {data5}
})

// true
app.use(async ctx => {
  const val6 = ctx.request.href
  const data6 = require('yo' + val6)
  ctx.body = {data6}
})

// true
app.use(async ctx => {
  const val7 = ctx.href
  const data7 = require(`asd ${val7}`)
  ctx.body = {data7}
})

// true
app.use(async ctx => {
  const data8 = require(`zxc ${ctx.query.val}`)
  ctx.body = {data8}
})

// true
app.use(async ctx => {
  const val9 = 
  const data9 = require('vbn' + ctx.querystring)
  ctx.body = {data9}
})

app.listen(port)
