
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
const bcryptjs = require('bcryptjs'); // 加盐\加密处理
// 创建users
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createDate:{type:Date,default:Date.now()}
})
// 密码加盐\加密处理
userSchema.pre('save',function(next){
    bcryptjs.genSalt(10,(err,salt)=>{
       if (err) return next(err);
       bcryptjs.hash(this.password,salt,(err,hash)=>{
          if (err) return next(err);
          this.password = hash;
          next();
       });
    })
})
// 
userSchema.methods = {
    checkPassword(loginPass,dataBasePass) {
        return new Promise((resolve,reject)=>{
            bcryptjs.compare(loginPass,dataBasePass,(err,isMatch)=>{
                if (!err) {
                    resolve(isMatch);
                }else {
                    reject(err);
                }
            })
        })
    }
}
// 发布模型
// 生成数组User
const User = mongoose.model('User', userSchema);
