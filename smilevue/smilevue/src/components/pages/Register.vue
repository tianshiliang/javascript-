<template>
  <div>
      <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack"></van-nav-bar>
      <van-cell-group>
          <van-field label="用户名" clearable placeholder="请输入用户名" required v-model ="username">
          </van-field>
          <van-field label="密码" clearable placeholder="请输入密码" type="password" required v-model ="password">
          </van-field>
          <div class="p-10">
                <van-button type="primary" size="large" @click="register" :loading="loading">马上注册</van-button>
          </div>
         
      </van-cell-group>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/serviceAPI.config.js';
import { Toast } from "vant";
export default {
    data() {
       return {
           username:'',
           password:'',
           loading:false
       }
    },
    methods:{
        goBack() {
            this.$router.go(-1);
        },
        register() {
            this.loading = true;
            axios({
                url:url.register,
                method:'post',
                data:{
                    userName:this.username,
                    password:this.password
                }
            }).then((res)=>{
                console.log(res);
                if (res.data.code==200) {
                    Toast.success(res.data.message);
                    this.$router.push('/');
                } else {
                    Toast.fail("注册失败");
                     this.loading = false;
                }
            }).catch((error)=>{
                 Toast.fail("注册失败");
                     this.loading = false;
            })
        }
    }
}
</script>

<style>

</style>