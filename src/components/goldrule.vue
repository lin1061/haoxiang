<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back" @click="$router.go(-1)">-->
            <!--<span class="title">金币兑换</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <span class="biaoti">金币兑换规则</span>
            <div class="content">
                <p>1、金币通过购买门店直营的商品、或总仓包邮的商品所得。</p>
                <p>2、根据用户购买商品金额的不同，所得到的金币也有所不同。</p>
                <p>3、金币（单位：个）永久有效，可进行累计使用，无使用期限。</p>
                <p>4、金币兑换，可以在个人中心-金币兑换板块，对指定兑换商品使用足额金币进行兑换。</p>
                <p>5、金币在兑换商品后，会减少相应的金币，在通过签到、购买商品可获得一定的金币。</p>
                <p>6、金币的最终解释权有好象有货官方所有。</p>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "goldrule"
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.88rem;
        position: fixed;
        left:0;
        top:0;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    #main{
        background: #fff;
        width: 100vw;
        height: 100vh;
    }

    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .biaoti{
        font-size:0.36rem;
        color:#555555;
        line-height: 0.36rem;
        display: block;
        font-weight: bold;
        padding-top: 0.35rem;
        text-align: center;
    }
    .jianshu{
        font-size:0.26rem;
        display: block;
        color:#a2a2a2;
        padding-top: 0.20rem;
        padding-left:0.50rem;
        line-height: 0.26rem;
    }
    .content{
        width: 6.4rem;
        height: auto;
        padding:0.25rem 0.1rem;
        margin:0 auto;
        margin-top:0.30rem;
        margin-bottom:0.4rem;
    }
    .join{
        width: 6.4rem;
        height: 0.96rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        font-size:0.36rem;
        color:#fff;
        display: block;
        margin:0 auto;
        border:none;
        outline: none;
        margin-bottom: 0.3rem;
    }
    .content img{
        width: 100%;
        height: auto;
    }
    .content p{
        font-size:0.26rem;
        color:#555555;
        line-height: 0.40rem;
        letter-spacing: 0.02rem;

    }
</style>