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
            <div class="bg"></div>
            <span class="note1">您还没有相关订单</span>
            <span class="note1 note2">去看看有什么想买的</span>
        </main>
    </div>
</template>

<script>
    export default {
        name: "afterorder"
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 0.88rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.32rem;
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
    .nav{
        width: 100%;
        height: 0.83rem;
        border-bottom:0.01rem solid #d4d7da;
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
    .bg{
        width: 6.3em;
        height: 6.02em;
        background: url("../assets/images/Group2@2x.png") no-repeat center;
        background-size:100% 100%;
        margin:0 auto;
        margin-top:0.8rem;
    }
    .note1{
        font-size:0.28rem;
        color:#a2a2a2;
        text-align: center;
        position:absolute;
        bottom:6.01rem;
        left:0;
        right:0;
        margin:auto;
    }
    .note2{
        bottom:5.54rem;
        font-size:0.22rem;
    }
</style>