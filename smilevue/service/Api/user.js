/*
 * @Author: your name
 * @Date: 2021-06-03 12:10:47
 * @LastEditTime: 2021-06-03 15:06:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /smilevue/service/Api/user.js
 */
const Router = require('koa-router');
const mongoose = require('mongoose');

let router = new Router();
router.get('/',async(ctx)=>{
    ctx.body = '首页';
})
router.post('/user/register',async(ctx)=>{
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);
    await newUser.save().then((res)=>{
        ctx.body = {
            code:200,
            message:'注册成功!'
        };
    }).catch((err)=>{
        ctx.body = {
            code:500,
            message:err
        };
    })
    
})
router.post('/user/login',async(ctx)=>{
    let loginUser = ctx.request.body;
    const User = mongoose.model('User');
    await User.findOne({userName:loginUser.userName}).exec().then(async(res)=>{
          if (res) {
              let newUser = new User();
              await newUser.checkPassword(loginUser.password,res.password).then(isMatch=>{
                ctx.body = {code:200,message:isMatch}
              }).catch(err=>{
                ctx.body = {code:500,message:err};
            });
          } else {
              ctx.body = {code:200,message:'用户名不存在'}
          }
    }).catch(err=>{
        ctx.body = {code:500,message:err};
    })
    
})
module.exports = router;