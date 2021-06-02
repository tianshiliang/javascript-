const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
// 创建users
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createDate:{type:Date,default:Date.now()}
})
// 发布模型
// 生成数组User
const User = mongoose.model('User', userSchema);
