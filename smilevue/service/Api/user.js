const Router = require('koa-router');
let router = new Router();
router.get('/',async(ctx)=>{
    ctx.body = '首页';
})
router.post('/user/register',async(ctx)=>{
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
})
module.exports = router;