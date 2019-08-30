const express = require('express')
const app = express()
const port = 3001

// false
app.get('/test1', (req, res) => {
  res.send('Hello World!')
})

// false
app.get('/test2', () => {
  const val2 = 'smth'
  const data2 = require(val2)
  res.send('ok')
})

// false
app.get('/test3', (req, res) => {
  const data3 = req.body.val3
  res.send('ok' + data3)
})

// false
app.get('/test4', (req, res) => {
  const data4 = req.body.val4
  const obj4 = `smth ${data4}`
  res.send('ok' + obj4)
})

// false
app.get('/test5', (req, res) => {
  const data5 = req.body.val5
  const obj5 = 'smth' + data5
  res.send('ok' + obj5)
})

// true
app.get('/test6', (req, res) => {
  const data6 = require(req.query.page6)
  res.send('ok')
})

// true
app.get('/test7', (req, res) => {
  const data7 = req.query.page7
  const obj = require(data7)
  res.send('ok')
})

// true
app.get('/test8', (req, res) => {
  const data8 = req.query.page8
  const obj8 = require('smth' + data8)
  res.send('ok')
})

// true
app.get('/test9', (req, res) => {
  const data9 = req.query.page9
  const asd9 = require(`smth ${data9}`)
  res.send('ok')
})

// true
app.get('/test10', (req, res) => {
  const data10 = req.query.page10
  const obj10 = require('smth' + data10)
  res.send('ok')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
