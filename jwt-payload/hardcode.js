const jsonwt = require('jsonwebtoken')
const jose = require('jose')
const { JWK, JWT } = jose
const config = require('./config')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const payload = {foo: 'bar'}
const secret = 'shhhhh'

const secret2 = config.secret
const secret3 = process.env.SECRET || 'fallback-secret'

//jsonwebtoken
//true
const token1 = jsonwt.sign(payload, secret)
//true
const token2 = jsonwt.sign(payload, 'some-secret')
//false
const token3 = jsonwt.sign(payload, config.secret)
//false
const token3 = jsonwt.sign(payload, secret2)
//??
const token3 = jsonwt.sign(payload, secret3)

//jose
//true
const token3 = JWT.sign(payload, JWK.asKey(secret))
//true
const token4 = JWT.sign(payload, JWK.asKey('raz-dva-tri'))
//true
const token5 = JWT.sign(payload, secret)
//true
const token6 = JWT.sign(payload, 'secret-again')

//false
const token3 = JWT.sign(payload, JWK.asKey(secret2))
//false
const token5 = JWT.sign(payload, secret2)

//passport-jwt
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';

//true
const strategy1 = new JwtStrategy(opts, () => {})
//true
const strategy1 = new JwtStrategy({secretOrKey: 'hardcoded'}, () => {})
//false
const strategy2 = new JwtStrategy({secretOrKey: secret2}, () => {})
