<template>
    <div>
        <div class="search-bar">
            <van-row>
                <van-col span="3" class="flex" style="justify-content: center;">
                     <i class="iconfont icondingwei" style="color:white;font-size:22px;"></i>
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5" class="flex" style="justify-content: center;padding-top: 5px;">
                    <van-button size="mini">
                          查找
                    </van-button>
                </van-col>
            </van-row>
        </div>
        <!-- 轮播 -->
        <div class="swiper-area">
             <van-swipe :autoplay="3000" style="height:100%">
                 <van-swipe-item v-for="(item,index) in imgList" :key="index">
                     <img v-lazy="item.imageUrl" width="100%" height="100%">
                 </van-swipe-item>
             </van-swipe>
        </div>
        <!-- 种类 -->
        <div class="type-bar flex">
             <div v-for="(item,index) in category" :key="index" class="p-10">
                   <img v-lazy="item.image" width="100%"> 
                   <div class="center">{{item.name}}</div>
             </div>
        </div>
        <!-- 广告 -->
        <div>
             <img v-lazy="'https://res.vmallres.com/pimages//pages/picImages/94352421022612425349.png'" width="100%"> 
        </div>
        <!-- 商品推荐 -->
        <div>
            <h4>
                商品推荐
            </h4>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in category" :key="index" class="p-5">
                        <img :src="item.image" width="100%">
                        <h4 class="center">{{item.name}}</h4>
                        <h4 class="center">￥:5000.00</h4>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!-- 楼层 -->
        <div class="flex" style="flex-wrap: wrap;">
            <div v-for="(item,index) in category" :key="index" style="border:1px solid #ddd;width:50%; ">
                <img src="https://res.vmallres.com/pimages//pages/picImages/49043221612612234094.png" width="100%">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
         components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                imgList:[
                    {imageUrl: require('@/assets/img/1.png')},
                    {imageUrl:require('@/assets/img/2.jpg')},
                    {imageUrl:require('@/assets/img/3.jpg')},
                ],
                category:[{image:'https://res.vmallres.com/pimages//pages/picImages/93724597641619542739.png',name:'Mate40'},
                        {image:'https://res.vmallres.com/pimages//pages/picImages/93724597641619542739.png',name:'Mate40'},
                        {image:'https://res.vmallres.com/pimages//pages/picImages/93724597641619542739.png',name:'Mate40'},
                        {image:'https://res.vmallres.com/pimages//pages/picImages/93724597641619542739.png',name:'Mate40'},
                        {image:'https://res.vmallres.com/pimages//pages/picImages/93724597641619542739.png',name:'Mate40'},
                ],
                 swiperOption: {
                    // 所有的参数同 swiper 官方 api 参数
                    slidesPerView:3,
                   // direction: 'vertical',
                    // pagination: {
                    //     el: '.swiper-pagination',
                    //     clickable: true
                    // },
                    // autoplay: {
                    //     delay: 1500,
                    //     stopOnLastSlide: false,
                    //     disableOnInteraction: true
                    // }// 可选选项，自动滑动
                }
            }
        },
        created() {
            axios({
                url:'https://www.easy-mock.com/mock/5ae2427800247c2aa1efe442/SmileVue/',
                method:'get'
            }).then((res)=>{
                console.log(res);
            })
        }
    }
</script>

<style scoped>
.search-bar{
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: #e5017d;
}
.search-input{
    width: 100%;
    height: 98%;
    border: 0px;
    border-bottom: 1px solid white;
    background-color: #e5017d;
    color: white;
}
.swiper-area{
    height: 32vh;
}
.type-bar{
     
}
</style>