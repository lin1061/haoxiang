<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">物流信息</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <section class="logis-item">
                <span>共计2个包裹</span>
            </section>
            <div class="logis-thing">
                <div class="imgbox clearfix">
                    <img src="../assets/images/tu@2x.png">
                </div>
                <div class="info clearfix">
                    <span class="info-title">[门店自营]<span class="name">三只松鼠夏威夷果100g*3 新鲜混合 最新口味</span></span>
                    <span class="info-state">已发货</span>
                    <span class="expressno">韵达快递：3242402002929384</span>
                    <img src="../assets/images/fz_2@2x.png" class="fz">
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "logistics"
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
    main{
        /*margin-top: 0.8rem;*/
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .logis-item{
        width: 100%;
        height: 0.84rem;
        background: #fff;
        border-bottom:0.01rem solid #d4d7da;
        font-size:0.28rem;
        color:#323a45;
        line-height: 0.84rem;
    }
    .logis-item span{
        padding-left:0.57rem;
    }
    .logis-thing{
        width: 100%;
        height: 1.98rem;
        background: url("../assets/images/bg_2@2x.png") no-repeat center/cover;
        overflow: hidden;
    }
    .imgbox{
        width: 1.59rem;
        height: 1.59rem;
        margin:0.19rem 0.24rem 0 0.58rem;
        float:left;
    }
    .imgbox img{
        width: 100%;
        height: 100%;
    }
    .info-title{
        font-size:0.26rem;
        color:#f9444d;
        display: block;
        float:left;
        padding-top: 0.20rem;
        width: 3.55rem;
    }
    .name{
        font-size:0.26rem;
        color:#2c2c2c;
    }
    .info-state{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        float:right;
        padding-top:0.20rem;
        padding-right:0.48rem;
    }
    .expressno{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:left;
        padding-top: 0.40rem;
    }
    .fz{
        width: 0.93rem;
        height: 0.46rem;
        display: block;
        float:right;
        margin: 0.33rem 0.43rem 0 0;
    }
</style>