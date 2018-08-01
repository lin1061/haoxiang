<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back">
            <span class="title">我的订单</span>
        </header>
        <!--内容-->
        <main>
            <div class="nav">
                <div class="nav-item">
                    <span>全部</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan"></div>
                </div>
                <div class="nav-item">
                    <span>待支付</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                </div>
                <div class="nav-item">
                    <span>待收货</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian xian1">
                </div>
                <div class="nav-item">
                    <span>已完成</span>
                </div>
            </div>
            <div class="order">
                <div class="order-item">
                    <div class="order-top">
                        <span>门店自营</span>
                    </div>
                    <div class="order-titem">
                        <span class="order-no">订单号：39839053</span>
                        <span class="order-state">待支付</span>
                    </div>
                    <div class="order-mitem">
                        <div class="order-tu">
                            <img src="../assets/images/tu@2x.png" alt="">
                        </div>
                        <span class="order-title1">三只松鼠夏威夷果 100g*3 新鲜混合 最新口味</span>
                        <span class="order-weight">100g</span>
                        <span class="order-price">￥65</span>
                        <span class="order-num">x1</span>
                    </div>
                    <div class="order-bitem1 order-bitem2">
                        <span class="order-total">合计：￥65.00（运费：0）</span>
                    </div>
                    <div class="order-active">
                        <span class="time">自动取消: 14:29</span>
                        <img src="../assets/images/qx@2x.png" alt="" class="cancel">
                        <img src="../assets/images/zf@2x.png" alt="" class="cancel pay">
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="order-item">
                    <div class="order-top">
                        <span>总仓邮寄</span>
                    </div>
                    <div class="order-titem">
                        <span class="order-no">订单号：39839053</span>
                        <span class="order-state">待收货</span>
                    </div>
                    <div class="order-mitem">
                        <div class="order-tu">
                            <img src="../assets/images/tu@2x.png" alt="">
                        </div>
                        <span class="order-title1">三只松鼠夏威夷果 100g*3 新鲜混合 最新口味</span>
                        <span class="order-weight">100g</span>
                        <span class="order-price">￥65</span>
                        <span class="order-num">x1</span>
                    </div>
                    <div class="order-mitem">
                        <div class="order-tu">
                            <img src="../assets/images/tu@2x.png" alt="">
                        </div>
                        <span class="order-title1">三只松鼠夏威夷果 100g*3 新鲜混合 最新口味</span>
                        <span class="order-weight">100g</span>
                        <span class="order-price">￥65</span>
                        <span class="order-num">x1</span>
                    </div>
                    <div class="order-bitem1 order-bitem2">
                        <span class="order-total">合计：￥65.00（运费：0）</span>
                    </div>
                    <div class="order-active">
                        <img src="../assets/images/wl@2x.png" alt="" class="cancel">
                        <img src="../assets/images/sh@2x.png" alt="" class="cancel pay">
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="order-item">
                    <div class="order-titem">
                        <span class="order-no">订单号：39839053</span>
                        <span class="order-state">待收货</span>
                    </div>
                    <div class="order-mitem">
                        <div class="order-tu">
                            <img src="../assets/images/tu@2x.png" alt="">
                        </div>
                        <span class="order-title1">三只松鼠夏威夷果 100g*3 新鲜混合 最新口味</span>
                        <span class="order-weight">100g</span>
                        <span class="order-price">￥65</span>
                        <span class="order-num">x1</span>
                    </div>
                    <div class="order-bitem1 order-bitem2">
                        <span class="order-total">合计：￥65.00（运费：0）</span>
                    </div>
                    <div class="order-active">
                        <img src="../assets/images/sc@2x.png" alt="" class="cancel">
                        <img src="../assets/images/zc@2x.png" alt="" class="cancel pay">
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "myorder"
    }
</script>

<style scoped>
    body{
        background: #f5f5f5;
    }
    header{
        width: 100%;
        height: 0.88rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.32rem;
    }
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .nav{
        width: 100%;
        height: 0.83rem;
        border-bottom:0.01rem solid #d4d7da;
        background: #fff;
    }
    .nav-item{
        width: 25vw;
        height: 100%;
        float:left;
        text-align: center;
        line-height: 0.83rem;
        font-size:0.26rem;
        position: relative;
    }
    .xian{
        width: 0.01rem;
        height: 0.36rem;
        position:absolute;
        top:0.24rem;
        right:0rem;

    }
    .xian1{
        left:1.82rem;
    }
    .lan{
        width: 100%;
        height: 0.06rem;
        background: #f9434e;
        position: absolute;
        left:0;
        bottom:0;
    }
    .order{
        width: 100%;
        height: auto;

    }
    .order-top{
        width: 100%;
        height: 0.84rem;
        font-size:0.28rem;
        color:#323a45;
        line-height: 0.84rem;
        padding-left:0.40rem;
        font-weight: bold;
        border-bottom:1px solid #e0e0e0;
    }
    .order-item{
        width: 100%;
        height: auto;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
        margin-bottom:0.11rem;
    }
    .order-titem{
        width: 100%;
        height: 0.84rem;
        border-bottom:1px solid #e0e0e0;
    }
    .order-no{
        font-size:0.28rem;
        color:#555555;
        padding-left: 0.40rem;
        display:block;
        line-height: 0.84rem;
        float:left;
    }
    .order-state{
        font-size:0.24rem;
        color:#a2a2a2;
        float:right;
        margin-right:0.50rem;
        line-height: 0.84rem;
    }
    .order-mitem{
        width: 100%;
        height: 1.98rem;
        overflow: hidden;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
    }
    .order-tu{
        width: 1.60rem;
        height: 1.56rem;
        margin:0.21rem 0 0 0.40rem;
        float:left;

    }
    .order-tu img{
        width: 1.60rem;
        height: 1.56rem;
    }
    .order-title1{
        font-size:0.26rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.23rem 0 0 0.20rem;
        width: 4.86rem;
        line-height: 0.35rem;
    }
    .order-weight{
        font-size:0.24rem;
        line-height: 0.24rem;
        color:#a2a2a2;
        line-height: 0.24rem;
        display: block;
        float:left;
        width:5.0rem;
        margin:0.20rem 0 0 0.20rem;
    }

    .order-price{
        font-size:0.28rem;
        color:#f9444d;
        float:left;
        line-height: 0.28rem;
        display: block;
        margin:0.20rem 0 0.20rem 0.20rem;
        font-weight: bold;
    }
    .order-num{
        font-size:0.28rem;
        line-height: 0.28rem;
        color:#a2a2a2;
        float:right;
        margin:0.20rem 0.53rem 0.20rem 0;

    }
    .order-bitem1{
        width: 100%;
        height: 0.64rem;
        border-bottom:1px solid #e0e0e0;
    }
    .order-total{
        font-size:0.26rem;
        color:#555555;
        display: block;
        float:right;
        line-height: 0.64rem;
        margin-right:0.49rem;
    }
    .order-active{
        width: 100%;
        height: 0.69rem;
        position: relative;
    }
    .time{
        font-size:0.26rem;
        color:#f9444d;
        display: block;
        line-height: 0.69rem;
        padding-left:0.46rem;
    }
    .cancel{
        width: 1.39rem;
        height: 0.46rem;
        position:absolute;
        top:0.11rem;
        right:2.17rem;

    }
    .pay{
        right:0.49rem;
    }
    .order-bitem2{
        border:none;
    }
</style>