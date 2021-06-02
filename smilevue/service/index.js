
// 四步走
const Koa = require('koa');
const app = new Koa();
const {connect,initSchemas} = require('./database/init.js');
const mongoose = require('mongoose');
;(async()=>{
   await connect();
   initSchemas();
   const User = mongoose.model('User');
   let user = new User({userName:'dddddddddddd',password:'123456'});
   user.save().then(()=>{
       console.log('插入成功');
   })
})();
app.use(async(ctx)=>{
    ctx.body="<h1>hello</h1>"
});
app.listen(3000,()=>{
    console.log('server is running in 3000');
})