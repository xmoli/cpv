const Koa = require('koa')
const router = require('./router')

const PORT = 9090

const app = new Koa();

app.use(router.routes())
app.use(async (ctx, next) => {
    await next()
    console.log(ctx.request.url)
})

app.listen(PORT)

console.log("port at,", PORT)