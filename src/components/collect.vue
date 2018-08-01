<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">收藏</span>-->
            <!--<span class="share">编辑</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="order-mitem clearfix">
                <img src="../assets/images/y@2x.png" class="gouxuan">
                <div class="order-tu">
                    <img src="../assets/images/tu@2x.png" alt="">
                </div>
                <span class="order-title1">三只松鼠夏威夷果 100g*3 新鲜混合 最新口味</span>
                <span class="order-weight">原价：￥85</span>
                <img src="../assets/images/sp@2x.png" class="shanpiao">
                <span class="order-price">￥65</span>
                <span class="shen">已省10元</span>
                <span class="order-num">已售223件</span>
            </div>
            <div class="order-mitem clearfix">
                <img src="../assets/images/wc@2x.png" class="gouxuan">
                <div class="order-tu">
                    <img src="../assets/images/tu@2x.png" alt="">
                </div>
                <span class="order-title1">三只松鼠夏威夷果 100g*3 新鲜混合 最新口味</span>
                <span class="order-weight">原价：￥85</span>
                <img src="../assets/images/sp@2x.png" class="shanpiao">
                <span class="order-price">￥65</span>
                <span class="shen">已省10元</span>
                <span class="order-num">已售223件</span>
            </div>
        </main>
        <footer>
            <div class="box clearfix">
                <span class="num">已选择3件商品</span>
                <button class="del">删除</button>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "collect"
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.40rem;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.60rem;
    }
    .share{
        font-size:0.28rem;
        color:#fff;
        display: inline-block;
        margin-right:0.38rem;
        margin-top: 0.24rem;
        float:right;
    }
    .order-mitem{
        width: 100%;
        height: 2.21rem;
        overflow: hidden;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
        position: relative;
    }
    .order-tu{
        width: 1.50rem;
        height: 1.56rem;
        margin:0.35rem 0 0 0.77rem;
        float:left;

    }
    .order-tu img{
        width: 1.60rem;
        height: 1.56rem;
    }
    .order-title1{
        font-size:0.28rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.23rem 0 0 0.20rem;
        width: 4.56rem;
        line-height: 0.38rem;
    }
    .order-weight{
        font-size:0.24rem;
        color:#a2a2a2;
        line-height: 0.24rem;
        display: block;
        float:left;
        width:5.0rem;
        margin:0.25rem 0 0 0.20rem;
    }

    .order-price{
        font-size:0.28rem;
        color:#f9444d;
        float:left;
        line-height: 0.28rem;
        display: block;
        margin:0.25rem 0 0.20rem 0.06rem;
        font-weight: bold;
    }
    .shen{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:left;
        margin:0.23rem 0 0.20rem 0.16rem;
    }
    .order-num{
        font-size:0.24rem;
        line-height: 0.28rem;
        color:#a2a2a2;
        float:right;
        margin:0.23rem 0.45rem 0.20rem 0;

    }
    .shanpiao{
        width: 0.76rem;
        height: 0.26rem;
        display: block;
        float:left;
        margin:0.27rem 0 0 0.20rem;
    }
    .gouxuan{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        top:0.94rem;
        left:0.24rem;
    }
    .box{
        width: 100%;
        height: 0.97rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0;
        border-top:0.01rem solid #d4d7da;
        line-height: 0.97rem;
    }
    .num{
        font-size: 0.32rem;
        color:#282828;
        display: block;
        padding-left:0.77rem;
        float:left;
    }
    .del{
        width: 2.76rem;
        height: 0.96rem;
        border:none;
        outline: none;
        display: block;
        float:right;
        font-size:0.38rem;
        color:#fff;
        background: linear-gradient(to right, #ff1c8b , #f37404);
    }
</style>