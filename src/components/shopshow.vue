<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">商家详情</span>-->
        <!--&lt;!&ndash;<img src="../assets/images/fx@2x.png" class="share">&ndash;&gt;-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="shop clearfix">
                <div class="shop_jieshao">
                    <span class="shop-name">{{shop.name}}</span>
                    <!--<span class="shop-juli">320m</span>-->
                </div>

                <span class="shop-time">{{shop.start_time}}-{{shop.end_time}}</span>
                <span class="shop-time shop-jia">￥{{shop.consumption}}/人</span>


                <Swiper class="tushow" height="5.07rem"  :aspect-ratio="300/800">
                    <swiper-item class="swiper-demo-img" v-for="(item, index) in shop.banners" :key="index"><img :src="item"></swiper-item>
                </Swiper>

                <div class="tushow-addr clearfix">
                    <img class="aimg" src="../assets/images/ad@2x.png" @click="daohang">
                    <span class="diwei diwei1">{{shop.address}}</span>
                    <div class="pimg tel" @click="tel"></div>
                </div>
                <span class="shop-title1">出示好象会员卡，专享以下:</span>
                <div class="tushow-addr">
                    <span class="diwei shop-title3">{{shop.slogan}}</span>
                    <img src="../assets/images/hy@2x.png" class="pimg pimg1" @click="willmember">
                </div>
            </div>
            <!--菜品推荐-->
            <section class="caipin clearfix">
                <div class="caipin-title">菜品推荐</div>
                <div class="caipin-item" v-for="item in shop.foods">
                    <img :src="item.path" class="caipin-image">
                    <span class="caipin-name">{{item.name}}</span>
                </div>
            </section>
            <div class="imgbox" @click="willmember">
                <img src="https://static.hxyouhuo.com/member/images/background/banner@2x.png">
            </div>
        </main>
    </div>
</template>

<script>
    import { Swiper,SwiperItem,} from 'vux'
    import { mapState } from 'vuex'
    export default {
        name: "shopshow",
        data(){
            return{
                shop:[],
            }
        },
        computed: {
            ...mapState({
                business_id: state => state.business_id,
                longitude: state => state.longitude,
                latitude:state=>state.latitude,
                user_id: state => state.user_id,
                device:state =>state.device,
                token:state =>state.token,
            }),

        },
        components: {
            Swiper,
            SwiperItem,
        },
        mounted:function () {
            this.$axios.get('/business/detail',{params:{business_id:this.business_id,longitude:this.longitude,latitude:this.latitude}}).then(res=>{
                console.log(res.data.data);
                this.shop=res.data.data;
            })
        },
        methods:{
            willmember(){
                this.$router.push({name:'hxmember',query:{user_id:this.user_id,token:this.token}})
            },
            tel(){
                if(this.device){
                    wx.makePhoneCall({
                        phoneNumber:this.shop.contact
                    })
                }else{
                    jsObj.GotoCall(this.shop.contact)
                }

            },
            daohang(){
                if(this.device){
                    wx.openLocation({
                        latitude: this.latitude,
                        longitude: this.longitude,
                        scale: 28,
                        name:this.shop.address
                    });
                }else{
                    jsObj.GotoPoi(this.shop.addresss,this.latitude,this.longitude)
                }



            }
        }
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.32rem;
        position: fixed;
        left:0;
        top:0;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .share{
        width: 0.30rem;
        height: 0.33rem;
        display: block;
        margin-right:0.38rem;
        margin-top: 0.25rem;
        float:right;
    }
    main{
        width: 100%;
        /*margin-top: 0.8rem;*/
    }
    .shop{
        width: 100%;
        height:7.51rem;
        background: #fff;
        overflow: hidden;
        border-bottom:0.01rem solid #cccccc;
    }
    .shop-name{
        font-size:0.32rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.37rem 0 0 0.34rem;
    }
    .shop-juli{
        font-size:0.26rem;
        color:#a2a2a2;
        display: block;
        float:right;
        margin:0.44rem 0.47rem 0 0;
    }
    .shop_jieshao{
        width: 100%;
        height: auto;
        float:left;
    }
    .shop-time{
        font-size:0.24rem;
        color:#a2a2a2;
        float:left;
        margin:0.30rem 0 0 0.34rem;
    }
    .shop-jia{
        margin:0.30rem 0 0 0.27rem;
    }
    .tushow{
        width: 100%;
        height: 3.90rem;
        float:left;
        margin-top:0.25rem;

    }

    .tushow img{
        width: 100%;
        height: 100%;
    }
    .tushow-addr{
        width: 100%;
        height: auto;
        float:left;
    }
    .aimg{
        width: 0.25rem;
        height: 0.33rem;
        display: block;
        float:left;
        margin:0.22rem 0 0 0.36rem;
    }
    .diwei{
        font-size:0.31rem;
        line-height: 0.31rem;
        color:#e0e0e0;
        width: 70%;
        display: block;
        float:left;
        margin:0.24rem 0 0 0.36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .diwei1{
        margin-left:0.13rem;
    }
    .pimg{
        width: 0.36rem;
        height: 0.36rem;
        display: block;
        float:right;
        margin:0.21rem 0.48rem 0 0;
        background-size: 0.36rem 0.36rem;
        background: url("../assets/images/dh@2x.png") no-repeat center/cover;
    }
    .shop-title1{
        font-size:0.24rem;
        color:#555555;
        line-height: 0.24rem;
        padding:0.16rem 0 0 0.36rem;
        display: block;
        float:left;
        width: 100%;
    }
    .shop-title2{
        color:#f9444d;
    }
    .shop-title3{
        font-size:0.24rem;
        color:#f9444d;
        line-height: 0.24rem;
        margin-top:0.18rem;
    }
    .pimg1{
        width: 1.35rem;
        height: 0.37rem;
        margin-top:0.07rem;
    }
    .caipin{
        width: 100%;
        height: auto;
        float:left;
        background:#fff;
        margin:0.11rem 0 0.11rem 0;
        /*padding-bottom:0.30rem;*/
    }
    .caipin-title{
        width: 100%;
        height: 0.68rem;
        font-size:0.32rem;
        color:#323a45;
        line-height: 0.68rem;
        padding-left:0.33rem;
    }
    .caipin-item{
        width: 3.745rem;
        /*height: 4.30rem;*/
        float:left;
    }
    .caipin-item:nth-child(2n+1){
        float: right;
        border-left:0.02rem solid #e5e5e5;
    }
    .caipin-image{
        width: 3.745rem;
        height: 3.08rem;
    }
    .caipin-name{
        font-size:0.22rem;
        color:#2c2c2c;
        display: block;
        margin: 0.13rem 0 0.20rem 0.33rem;
    }
    .imgbox{
        width: 100%;
        height: 2.41rem;
    }
    .imgbox img{
        width: 100%;
        height: 2.41rem;
    }
</style>