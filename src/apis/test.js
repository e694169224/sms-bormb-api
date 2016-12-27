module.exports = function (router) {
  router.get('/test', async (ctx) => {
    ctx.body = '<h1>test</h1>'
  })
}
