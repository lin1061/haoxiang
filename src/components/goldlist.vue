<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">金币商城</span>-->
            <!--<router-link to="/goldrule">-->
                <!--<span class="share">编辑</span>-->
            <!--</router-link>-->

        <!--</header>-->
        <main>
            <ul class="yx">
                <router-link :to="{name:'goldgood',query:{goods_id:item.goods_id,token:header,user_id:user_id,university_id:university_id}}" v-for="item in list" :key="item.goods_id">
                <li class="yx-item">
                    <div class="box">
                        <img :src="item.goods_img" class="goodstu">
                    </div>
                    <div class="yx-ginfo">
                        <span class="yx-gname">{{item.goods_name}}</span>
                        <span class="yx-newprice">金币兑换:{{item.price}}</span>
                    </div>
                </li>
                </router-link>
            </ul>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "goldlist",
        data(){
            return{
                list:[],
                header:''
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                token:state=>state.token,
                university_id:state=>state.university_id
            }),

        },
        mounted:function () {
            this.header=this.token;
          this.$axios.get('/user/exchanges',{params:{user_id:this.user_id}}).then(res=>{
                  this.list=res.data.data;
                console.log(res)
          })
        }
    }
</script>

<style scoped>
    body{
        background: #f5f5f5;
    }
    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.88rem;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.30rem;
    }
    .share{
        font-size:0.28rem;
        color:#fff;
        display: inline-block;
        margin-right:0.38rem;
        float:right;
    }
    .yx{
        width: 100%;
        height: auto;
        float:left;
        /*margin-top: 0.08rem;*/
    }
    .yx-item{
        width: 3.745rem;
        height: 4.30rem;
        float:left;
        border-bottom: 0.02rem solid #e5e5e5;
    }
    .box{
        width: 100%;
        height: 3.07rem;

        position: relative;
    }
    .box img{
        width: 100%;
        height: 100%;
    }
    .box .goodstu2{
        width: 0.34rem;
        height: 0.29rem;
        position: absolute;
        top:0.15rem;
        right:0.18rem;
    }
    .yx-ginfo{
        width: 100%;
        height: 1.22rem;
        background: #fff;
        padding-left: 0.21rem;
        border-bottom:0.02rem solid #e5e5e5;
    }
    .yx-gname{
        font-size: 0.22rem;
        color: #2c2c2c;
        display: block;
        width: 90%;
        height: 0.75rem;
        overflow: hidden;
        padding-top: 0.12rem
    }
    .yx-newprice{
        font-size:0.26rem;
        color:#f84848;
        display: block;
        line-height: 0.26rem;
        padding-top: 0.16rem;
        float: left;
        font-weight: bold;
    }
    .yx-shen{
        font-size:0.24rem;
        color:#f84848;
        display: block;
        line-height: 0.24rem;
        padding-top: 0.16rem;
        float: left;
        padding-left: 0.13rem;
    }
    .yx-item1{
        float: right;
    }
    .yx-oldprice{
        font-size:0.24rem;
        color:#8a959e;
        display: block;
        float: right;
        padding-top: 0.13rem;
        margin-right: 0.12rem;
    }
    .yx li:nth-child(2n+1){
        float: left;
        border-left:0.02rem solid #e5e5e5;
    }
</style>