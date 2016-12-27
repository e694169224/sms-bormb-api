/* global CONF */
'use strict'

/* node modules */
const Koa = require('Koa')
const router = require('Koa-router')()
const bodyParser = require('koa-bodyparser')
const kcors = require('kcors')

const app = new Koa()

/* global */
global.CONF = require('./config')()
global.DB = null

/* app and context props */
app.context.OK = function (data) {
  this.body = ({
    data,
    errcode: 0
  })
}

/* middlewares */
app.use(kcors)
app.use(bodyParser())
// log当前访问的url
app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`)
  await next()
})
app.use(async (ctx, next) => {
  if (!global.DB) global.DB = await require('./db')
  await next()
})

/* services and routes */
require('./apis/index')(router)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(CONF.app.port)
console.log('app started at port 3000')
