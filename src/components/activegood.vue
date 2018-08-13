<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">商品详情</span>-->
        <!--&lt;!&ndash;<img src="../assets/images/fx@2x.png" class="share">&ndash;&gt;-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="good-info clearfix">
                <Swiper class="imgbox" height="5.04rem" >
                    <img :src="item" class="banner" v-for="item in active.banner_img">
                </Swiper>
                <p>
                <p class="description">{{active.name}}</p>
                </p>
                <div class="price">
                    <span class="oldprice">￥{{active.member_price}}</span>
                    <span class="newprice">已省:￥{{active.saved_price}}</span>
                </div>
                <div class="price">
                    <span class="oldprice oldprice1">原价：￥{{active.original_price}}</span>
                    <img src="../assets/images/hy@2x.png"class="anniu" >
                </div>
                <div class="price price1">
                    <span class="oldprice oldprice1">已选：</span>
                    <span class="newprice newprice1">原味，100g</span>
                    <img src="../assets/images/ddd@2x.png"class="anniu anniu1" @click="goodshow">
                </div>
                <ul class="fuwu">
                    <li><img src="../assets/images/cj@2x.png" alt=""></li>
                    <li><img src="../assets/images/xx@2x.png" alt=""></li>
                    <li><img src="../assets/images/9t@2x.png" alt=""></li>
                </ul>
            </div>
            <!--商家详情-->
            <section class="goodsmore">
                <div class="goostitle">商品详情</div>
                <div class="imgsbox" v-html="active.describe">

                </div>
            </section>
            <!--优选好货-->
            <ul class="yx clearfix">
                <div class="youxuan">优选好货</div>
                <li class="yx-item" v-for="item in active.spec">
                    <div class="box">
                        <img :src="item.goods_spec_img_path" class="goodstu">
                    </div>
                    <div class="yx-ginfo">
                        <span class="yx-gname">{{item.goods_spec_name}}</span>
                        <span class="yx-newprice">￥{{item.goods_spec_price}}</span>
                        <span class="yx-shen">库存:{{item.goods_spec_stock}}</span>

                    </div>
                </li>

            </ul>
        </main>

        <!--底部-->
        <footer>
            <div class="footbox clearfix">
                <button class="lijishop" @click="goodshow">立即参加</button>
            </div>
            <div class="zhezhao" v-show="showbox" @touchmove.prevent>
                <div class="goods">
                    <div class="goodsxtu"></div>
                    <span class="sum">共计: <span class="prices">￥65.00</span></span>
                    <span class="numbers">库存600件</span>
                    <div class="close" @click="close">x</div>
                    <span class="style">类型:</span>
                    <div class="stylebox">
                        <div class="style1">120g</div>
                        <div class="style1 style2">120g</div>
                        <div class="style1 style2">120g</div>
                    </div>

                    <span class="num">数量:</span>
                    <img src="../assets/images/jh@2x.png" class="jh" @click="reduce">
                    <span class="numadd">{{goodsnum}}</span>
                    <img src="../assets/images/jhh@2x.png" class="jh jhh" @click="add">
                    <div class="ok">立即参加</div>
                </div>
            </div>

        </footer>
    </div>
</template>

<script>
    import { Swiper } from 'vux'
    export default {
        name: "activegood",
        data () {
            return {
                showbox:false,
                goodsnum:0,
                active:[]
            }
        },
        mounted:function () {
            this.$axios.get('/find/activity_detail?activity_id=5&user_id=1').then(res=>{
                console.log(res);
                this.active=res.data.data;
                console.log(this.active.banner_img[0]);
            })
        },
        methods:{
            goodshow(){
                this.showbox=!this.showbox;

            },
            close(){
                this.showbox=false;

            },
            add(){
                this.goodsnum++
            },
            reduce(){
                this.goodsnum--;
                if(this.goodsnum<=0){
                    this.goodsnum=0;
                }
            },

        },
        components: {
            Swiper
        }
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.50rem;
        position:fixed;
        top:0;
        left:0;
        z-index:99;
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
    /*main{*/
    /*width: 100%;*/
    /*margin-top:0.8rem;*/
    /*}*/
    .good-info{
        width: 100%;
        height: auto;
        background: #fff;
        float:left;
    }
    .imgbox{
        width: 100%;
        height: 5.04rem;
        position: relative;
    }
    .banner{
        width: 100%;
        height: 5.04rem;
    }
    .love{
        width: 0.35rem;
        height: 0.31rem;
        position: absolute;
        top:0.42rem;
        right:0.40rem;
    }
    .good-form{
        font-size:0.32rem;
        color:#fa3d58;
        padding-left:0.34rem;
        padding-top:0.34rem;
        display: block;
        float:left;
    }
    .description{
        font-size:0.32rem;
        color:#555555;
        display: block;
        padding-left:0.34rem;
        padding-top:0.34rem;
        width: 7.0rem;
    }
    .oldprice{
        font-size:0.28rem;
        color:#f84848;
        display: block;
        float:left;
        padding-left: 0.36rem;
        padding-top:0.28rem;
        font-weight: bold;
    }
    .newprice{
        display: block;
        float:left;
        font-size:0.28rem;
        color:#555555;
        padding-left: 0.19rem;
        padding-top:0.28rem;
    }
    .number{
        font-size:0.24rem;
        color:#a2a2a2;
        float:right;
        padding-top:0.28rem;
        padding-right: 0.43rem;
        display: block;
    }
    .price{
        width: 100%;
        float:left;
    }
    .oldprice1{
        color:#a2a2a2;
        font-weight: normal;
    }
    .anniu{
        width: 1.35rem;
        height: 0.37rem;
        float:right;
        margin-top:0.19rem;
        margin-right: 0.44rem;
        display: block;
    }
    .price1{

        padding-bottom: 0.16rem;
        border-bottom: 0.01rem solid #cccccc;
    }
    .newprice1{
        font-weight: 600;
    }
    .anniu1{
        width: 0.33rem;
        height: 0.07rem;
        margin-top:0.42rem;
        margin-right: 0.44rem;
    }
    .fuwu{
        width: 100%;
        height: 0.72rem;
        border-bottom:0.01rem solid #e0e0e0;
        float:left;
    }
    .fuwu li{
        width: 33.333333333%;
        height: 100%;
        float:left;
    }
    .fuwu li img{
        width: 2.11rem;
        /*height: 0.26rem;*/
        display: block;
        margin:0 auto;
        margin-top: 0.23rem;
    }
    .goodsmore{
        width: 100%;
        height: auto;
        float: left;
        margin-top: 0.07rem;
    }
    .goostitle{
        width: 100%;
        height: 0.82rem;
        font-size:0.26rem;
        color:#555555;
        line-height: 0.82rem;
        text-align: center;
        background: #fff;
    }
    .imgsbox{
        width: 100%;
        height: auto;
    }
    .imgsbox img{
        width: 100%;
        height: 100%;
    }
    .yx{
        width: 100%;
        height: auto;
        float:left;
        margin-top: 0.08rem;
    }

    .youxuan{
        width: 100%;
        height: 0.70rem;
        line-height: 0.70rem;
        font-size:0.26rem;
        color:#323a45;
        background: #fff;
        padding-left:0.33rem;
    }
    .yx-item{
        width: 3.745rem;
        height: 4.30rem;
        float:left;
    }
    .box{
        width: 100%;
        height: 3.07rem;
        border-bottom:0.01rem solid #e5e5e5;
        position: relative;
    }
    .box img{
        width: 100%;
        height: 100%;
    }

    .yx-ginfo{
        width: 100%;
        height: 1.22rem;
        background: #fff;
        padding-left: 0.21rem;
    }
    .yx-gname{
        font-size:0.22rem;
        color:#2c2c2c;
        display: block;
        padding-top: 0.12rem;
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
        color:#a2a2a2;
        display: block;
        line-height: 0.24rem;
        padding-top: 0.16rem;
        float: left;
        padding-left: 0.13rem;
    }
    .yx li:nth-child(2n+1){
        float: right;
        border-left:0.02rem solid #e5e5e5;
    }
    .yx-item1{
        float: right;
        border-left:0.02rem solid #e5e5e5;
    }
    .yx-oldprice{
        font-size:0.24rem;
        color:#8a959e;
        display: block;
        float: right;
        padding-top: 0.13rem;
        margin-right: 0.12rem;
    }
    .footbox{
        width: 100%;
        height: 0.96rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0rem;
        border-top:0.01rem solid #e0e0e0;

    }
    main{
        margin-bottom: 1.04rem;
        width: 100%;
        float:left;
    }
    .ser{
        width: 0.48rem;
        height: 100%;
        margin-left: 0.53rem;
        float: left;

    }

    .lijishop{
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        display: block;
        border: none;
        outline: none;
        font-size:0.36rem;
        text-align: center;
        color:#fff;
    }
    .lijishop1{
        width: 2.43rem;
        margin-left: 0;
    }
    .goods{
        width: 100%;
        height: 6.72rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0;
    }
    .goodsxtu{
        width: 2.22rem;
        height: 2.22rem;
        background: #f5f5f5;
        margin:0.35rem 0.22rem 0 0.45rem;
    }
    .sum{
        font-size:0.28rem;
        color:#555555;
        display: block;
        position: absolute;
        top:1.68rem;
        left:2.95rem;
    }
    .prices{
        color: #f9444d;
        font-weight: bold;
    }
    .numbers{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        position: absolute;
        top:2.18rem;
        left:2.95rem;
    }
    .close{
        width: 0.39rem;
        height: 0.39rem;
        position: absolute;
        top:0.34rem;
        right:0.40rem;
        border:0.02rem solid #a2a2a2;
        border-radius: 50%;
        text-align: center;
        font-size:0.18rem;
        line-height: 0.39rem;
        color:#a2a2a2;
    }
    .style{
        font-size:0.28rem;
        color:#a2a2a2;
        padding-left: 0.53rem;
        display: block;
        padding-top: 0.51rem;
    }
    .style1{
        width: 1.26rem;
        height: 0.63rem;
        background: url("../assets/images/gg@2x.png") no-repeat center/cover;
        font-size:0.26rem;
        color:#555555;
        text-align: center;
        line-height: 0.63rem;
        margin:0.28rem 0.18rem 0 0.53rem;
        float:left;
    }
    .style2{
        margin-left:0;
    }
    .style1:hover{
        color:#f9444d;
    }
    .stylebox{
        width: 100%;
        height: auto;
        float: left;
    }
    .num{
        display: block;
        font-size:0.28rem;
        color:#555555;
        margin:0.56rem 0 0 0.53rem;
        float: left;
    }
    .ok{
        width: 100%;
        height: 1.02rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        font-size:0.36rem;
        color:#fff;
        position: absolute;
        left:0;
        bottom:0;
        text-align: center;
        line-height: 1.02rem;
    }
    .jh{
        width: 0.36rem;
        height: 0.36rem;
        display: block;
        position: absolute;
        right:1.41rem;
        bottom:1.55rem;
    }
    .numadd{
        font-size:0.28rem;
        color:#555555;
        position: absolute;
        right:0.97rem;
        bottom:1.58rem;
    }
    .jhh{
        right:0.41rem;
    }
    .zhezhao{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
    }
</style>