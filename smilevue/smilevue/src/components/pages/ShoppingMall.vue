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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'tslsssssssssss'
            }
        },
    }
</script>

<style scoped>
.search-bar{
    height: 2.2rem;
    line-height: 2.2rem;
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
</style>