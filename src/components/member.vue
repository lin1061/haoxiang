<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back">
            <span class="title">开卡成功</span>
        </header>
        <!--内容-->
        <main>
            <section class="card">
                <img src="../assets/images/cart@2x.png">
            </section>
            <span class="card-title1">添加该微信号</span>
            <span class="card-title1 card-title2">专属客服将赠送你新会员礼包</span>
            <div class="erweima">
                <img src="../assets/images/qr@2x.png" alt="">
            </div>
            <span class="card-title1 card-title3">微信号：156813518646135</span>
            <span class="card-title1 card-title4">长按保存</span>
            <span class="card-title1 card-title5">任何疑问请致电：400-4095-586</span>
        </main>
    </div>
</template>

<script>
    export default {
        name: "member"
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
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .card{
        width: 7.32rem;
        height: 4.89rem;
        margin:0 auto;
        margin-top:0.17rem;
    }
    .card img{
        width: 100%;
        height: 100%;
    }
    .card-title1{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        text-align: center;
        padding-top:0.35rem;
    }
    .card-title2{
        font-size:0.28rem;
        color:#a2a2a2;
        padding-top: 0.24rem;
    }
    .erweima{
        width: 3.14rem;
        height: 3.10rem;
        margin:0 auto;
        margin-top: 0.35rem;
    }
    .erweima img{
        width: 100%;
        height: 100%;
    }
    .card-title3{
        font-size:0.22rem;
        padding-top: 0.31rem;
    }
    .card-title4{
        font-size:0.22rem;
        padding-top: 0.20rem;
    }
    .card-title5{
        font-size:0.24rem;
        padding-top: 0.65rem;
    }
</style>