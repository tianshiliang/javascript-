
// 四步走
const Koa = require('koa');
const app = new Koa();
const {connect,initSchemas} = require('./database/init.js');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const Router = require('koa-router');


// 使用
app.use(bodyParser());
app.use(cors());



let user = require('./Api/user.js')
// let home = require('./Api/home.js')
// let goods = require('./Api/goods.js')



// 装载所有子路由
let router = new Router();
router.use('/user',user.routes());


;(async ()=>{
    await connect()
    initSchemas()
})()


// 加载路由中间件
app.use(user.routes());
app.use(user.allowedMethods());

app.use(async(ctx)=>{
    ctx.body="<h1>hello</h1>"
});
app.listen(3000,()=>{
    console.log('server is running in 3000');
})