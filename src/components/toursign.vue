<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">报名成功</span>-->
            <!--&lt;!&ndash;<img src="../assets/images/fx@2x.png" class="share">&ndash;&gt;-->
        <!--</header>-->
        <!--内容-->
        <main>
            <span class="sign-title">可添加专属客服咨询预约进度</span>
            <div class="erweima">
                <img src="../assets/images/qr@2x.png" alt="">
            </div>
            <span class="wechat">微信号：1568135186435</span>
            <span class="wechat wechat2">长按保存图片</span>
            <span class="wechat wechat3">任何疑问请致电：400-4095-586</span>
        </main>
    </div>
</template>

<script>
    export default {
        name: "toursign"
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 6vh;
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
        height: 94vh;
        background:#f6f6f6;
    }
    .sign-title{
        font-size:0.32rem;
        color:#555555;
        text-align: center;
        padding-top: 0.52rem;
        display: block;
    }
    .erweima{
        width: 5.40rem;
        height: 5.40rem;
        background: #fff;
        margin:0 auto;
        margin-top:0.22rem;

    }
    .erweima img{
        width: 5.40rem;
        height: 5.40rem;
    }
    .wechat{
        font-size:0.22rem;
        color:#a2a2a2;
        display: block;
        margin-top:0.22rem;
        text-align: center;
    }
    .wechat2{
        margin-top:0.49rem;
    }
    .wechat3{
        margin-top:3.29rem;
        font-size:0.24rem;
    }
</style>