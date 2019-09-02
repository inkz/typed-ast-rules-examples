const jsonwt = require('jsonwebtoken')
const jose = require('@panva/jose')
const { JWK, JWS, JWT } = jose

const payload = {
  foo: 'bar',
  bar: 'vasya',
  num: 123,
  val: ['zxc', {asd: 'fgh'}],
  password: '1234567890'
}

const secret = 'shhhhh'

const token1 = jsonwt.sign(payload, secret)
const token2 = JWT.sign(payload, JWK.asKey(secret))
const token3 = JWS.sign(payload, JWK.asKey(secret))

const token1 = jsonwt.sign({one: 'two'}, secret)
const token2 = JWT.sign({hello: 'world'}, JWK.asKey(secret))
const token3 = JWS.sign({check: 'check'}, JWK.asKey(secret))
