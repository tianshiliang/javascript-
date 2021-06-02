const mongoose = require('mongoose');
// 24710
const db = 'mongodb://localhost:27017/tsl';
const {resolve} = require('path');
const glob = require('glob');

exports.initSchemas = () =>{
    glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require);
}
exports.connect = () =>{
    // 连接数据库
    mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true});
    return new Promise((resolve,reject)=>{
        // 增加数据库监听事件
        mongoose.connection.on('disconnected',()=>{
            console.log('断开');
            reject();
            throw new Error('数据库无法连接!');
            //mongoose.connect(db);
        })
        mongoose.connection.on('error',()=>{
            console.log('数据库异常');
            reject();
            throw new Error('数据库异常!');
            //mongoose.connect(db);
        })
        // 连接打开时
        mongoose.connection.once('open',()=>{
            console.log('连接成功!');
            resolve();
        })
    })
  
}
