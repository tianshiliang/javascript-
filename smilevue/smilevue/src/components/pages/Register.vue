<template>
  <div>
      <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack"></van-nav-bar>
      <van-cell-group>
          <van-field label="用户名" clearable placeholder="请输入用户名" required v-model ="username">
          </van-field>
          <van-field label="密码" clearable placeholder="请输入密码" type="password" required v-model ="password">
          </van-field>
          <div class="p-10">
                <van-button type="primary" size="large" @click="register">马上注册</van-button>
          </div>
         
      </van-cell-group>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/serviceAPI.config.js';
export default {
    data() {
       return {
           username:'',
           password:''
       }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        register() {
            axios({
                url:url.register,
                method:'post',
                data:{
                    username:this.username,
                    password:this.password
                }
            }).then((res)=>{
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>