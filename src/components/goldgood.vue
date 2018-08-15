<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back">
            <span class="title">商品详情</span>
        </header>
        <!--内容-->
        <main>
            <div class="good-info">
                <div class="imgbox">
                    <img :src="good.goods_img" class="banner">
                </div>
                <p class="description">{{good.name}}</p>
                <div class="price">
                    <span class="oldprice">金币:{}个</span>

                    <span class="number">已兑换：{{good.sales_volume}}件</span>
                </div>
                <div class="price">
                    <span class="oldprice oldprice1">原价：￥{{good.market_price}}</span>
                    <img src="../assets/images/hy@2x.png"class="anniu" >
                </div>
                <div class="price price1">
                    <span class="oldprice oldprice1">已选：</span>
                    <span class="newprice newprice1">原味，100g</span>
                    <img src="../assets/images/ddd@2x.png"class="anniu anniu1" >
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
                <div class="imgsbox">
                    <img src="../assets/images/gs@2x.png" alt="">
                </div>
            </section>
        </main>

        <!--底部-->
        <footer>
            <div class="footbox">
                <div class="ser">
                    <img src="../assets/images/ej@2x.png" class="server">
                    <span class="kefu">客服</span>
                </div>
                <div class="ser like">
                    <img src="../assets/images/Favourite@3x.png" class="server liketu">
                    <span class="kefu">收藏</span>
                </div>
                <button class="lijishop">立即购买</button>
                <button class="lijishop lijishop1">加入购物车</button>
            </div>
            <!--<div class="goods">-->
                <!--<div class="goodsxtu"></div>-->
                <!--<span class="sum">共计: <span class="prices">￥65.00</span></span>-->
                <!--<span class="numbers">库存600件</span>-->
                <!--<div class="close">x</div>-->
                <!--<span class="style">类型:</span>-->
                <!--<div class="stylebox">-->
                <!--<div class="style1">120g</div>-->
                <!--<div class="style1 style2">120g</div>-->
                <!--<div class="style1 style2">120g</div>-->
                <!--</div>-->

                <!--<span class="num">数量:</span>-->
                <!--<img src="../assets/images/jh@2x.png" class="jh">-->
                <!--<span class="numadd">2</span>-->
                <!--<img src="../assets/images/jhh@2x.png" class="jh jhh">-->
                <!--<div class="ok">选好了</div>-->
            <!--</div>-->
        </footer>
    </div>
</template>

<script>
    export default {
        name: "goldgood",
        data(){
            return{
                gid:"",
                good:[]
            }
        },
        mounted:function () {
            this.gid=this.$route.query.id;
            this.$axios.get('/user/exchange_goods_info?goods_id=45').then(res=>{
                    this.good=res.data.data;
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
    .good-info{
        width: 100%;
        height: auto;
        background: #fff;
        float:left;
    }
    .imgbox{
        width: 100%;
        height: 5.04rem;
        /*background: #ff1c8b;*/
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
        width: 98%;

        padding-left:0.34rem;
        padding-top:0.34rem;
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
        margin-top: 0.20rem;
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
        height: 0.26rem;
        display: block;
        margin:0 auto;
        margin-top: 0.23rem;
    }
    .goodsmore{
        width: 100%;
        height: auto;
        background: #ff1c8b;
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
        height: 6.34rem;
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
    .server{
        width: 0.41rem;
        height: 0.38rem;
        display: block;
        margin:0 auto;
        margin-top: 0.14rem;
    }
    .kefu{
        font-size: 0.22rem;
        color:#a2a2a2;
        line-height: 0.22rem;
        display: block;
        padding-top: 0.10rem;
    }
    .like{
        width: 0.48rem;
        margin-left: 0.88rem;
    }
    .liketu{
        width: 0.48rem;
        height: 0.38rem;
    }
    .lijishop{
        width: 2.14rem;
        height: 100%;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        display: block;
        float:left;
        border: none;
        outline: none;
        margin-left: 0.56rem;
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
        border:0.01rem solid #a2a2a2;
        border-radius: 50%;
        text-align: center;
        font-size:0.18rem;
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
        bottom:1.62rem;
    }
    .numadd{
        font-size:0.24rem;
        color:#555555;
        position: absolute;
        right:1.03rem;
        bottom:1.67rem;
    }
    .jhh{
        right:0.41rem;
    }
</style>