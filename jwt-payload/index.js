const jsonwt = require('jsonwebtoken')
const jose = require('jose')
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

const token4 = jsonwt.sign({one: 'two'}, secret)
const token5 = JWT.sign({hello: 'world'}, JWK.asKey(secret))
const token6 = JWS.sign({check: 'check'}, JWK.asKey(secret))

const algo = 'HS256';
const verified = jsonwt.verify(token1, secret, {algorithm: algo})

const signOpts = {algorithm: 'HS256'}
function verify(opts) {
  const verified = jsonwt.verify(token1, secret, opts)
  return verified
}
const verified2 = verify(signOpts)
const decoded = jsonwt.decode(token1)
