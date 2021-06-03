/*
 * @Author: your name
 * @Date: 2021-06-03 14:22:52
 * @LastEditTime: 2021-06-03 14:22:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /smilevue/smilevue/src/serviceAPI.config.js
 */

const baseUrl = 'http://localhost:3000/'
const url = {
    register: baseUrl + 'user/register', // 用户注册接口
    login: baseUrl + 'user/login', // 用户登录接口
}
module.exports = url;