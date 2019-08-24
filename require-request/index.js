const express = require('express')
const app = express()
const port = 3001

// false
app.get('/test1', (req, res) => {
  res.send('Hello World!')
})

// false
app.get('/test2', () => {
  const val = 'smth'
  const data = require(val)
  res.send('ok')
})

// false
app.get('/test3', (req, res) => {
  const data = req.body.val
  res.send('ok' + data)
})

// false
app.get('/test4', (req, res) => {
  const data = req.body.val
  const obj = `smth ${data}`
  res.send('ok' + obj)
})

// false
app.get('/test5', (req, res) => {
  const data = req.body.val
  const obj = 'smth' + data
  res.send('ok' + obj)
})

// true
app.get('/test6', (req, res) => {
  const data = require(req.query.page)
  res.send('ok')
})

// true
app.get('/test7', (req, res) => {
  const data = req.query.page
  const obj = require(data)
  res.send('ok')
})

// true
app.get('/test8', (req, res) => {
  const data = req.query.page
  const obj = require('smth' + data)
  res.send('ok')
})

// true
app.get('/test9', (req, res) => {
  const data = req.query.page
  const asd = require(`smth ${data}`)
  res.send('ok')
})

// true
app.get('/test10', (req, res) => {
  const data = req.query.page
  const obj = require('smth' + data)
  res.send('ok')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
