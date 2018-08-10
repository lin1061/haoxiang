<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back">
            <span class="title">我的订单</span>
        </header>
        <main>
            <span class="sign">报名信息</span>
            <div class="info">
                <div class="info-item clearfix">
                    <span class="name">姓名</span>
                    <span class="name1">张三</span>
                </div>
                <div class="info-item clearfix">
                    <span class="name">电话</span>
                    <span class="name1">1385964556</span>
                </div>
                <div class="info-item info-item1 clearfix">
                    <span class="name">类型</span>
                    <span class="name1">日本留学-东京大学</span>
                </div>
            </div>
            <span class="money">应付金额：<span class="money1">65元</span></span>
            <div class="paybox">
                <div class="pay-item clearfix">
                    <img src="../assets/images/pay1.png" alt="" class="pay-img">
                    <span class="pay-title">支付宝</span>
                    <span class="pay-title2">推荐有支付宝账号的用户使用</span>
                    <div class="pay-check" >
                        <p>
                            <span class="circle-btn"></span>
                            <input type="radio" value="1" name="country" class="radio" checked>
                            <label for="a" class="radio"></label>
                        </p>
                    </div>
                </div>
                <div class="pay-item clearfix">
                    <img src="../assets/images/pay2.png" alt="" class="pay-img">
                    <span class="pay-title">支付宝</span>
                    <span class="pay-title2">推荐有支付宝账号的用户使用</span>

                    <div class="pay-check clearfix">
                        <p>
                            <span class="circle-btn"></span>
                            <input type="radio" value="2" name="country" class="radio">
                            <label for="b" class="radio"></label>
                        </p>
                    </div>
                </div>
                <div class="pay-item pay-item1 clearfix">
                    <img src="../assets/images/pay3.png" alt="" class="pay-img">
                    <span class="pay-title">支付宝</span>
                    <span class="pay-title2">推荐有支付宝账号的用户使用</span>
                    <div class="pay-check">
                        <p>
                            <span class="circle-btn"></span>
                            <input type="radio" value="3" name="country" class="radio">
                            <label for="c" class="radio"></label>
                        </p>
                    </div>
                </div>
            </div>



        </main>
        <footer>
            <button class="anniu">使用支付宝支付：￥65.00</button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "signinfo"
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
    .sign{
        font-size:0.24rem;
        color:#555555;
        text-align: center;
        display: block;
        padding-top: 0.29rem;
        padding-bottom: 0.29rem;
    }
    .info{
        width: 100%;
        /*height: 3.49rem;*/
        background: url("../assets/images/bg_2@2x.png")no-repeat center/cover;
        padding-bottom: 0.50rem;
    }
    .info-item{
        width: 6.25rem;
        /*height: 0.99rem;*/
        padding-bottom: 0.20rem;
        border-bottom: 0.01rem solid #e4e4e4;
        margin:0 auto;

    }
    .name{
        font-size:0.28rem;
        color:#555555;
        display: block;
        float:left;
        padding-top: 0.50rem;
        width: 0.60rem;
    }
    .name1{
        font-size:0.28rem;
        color:#a2a2a2;
        float:right;
        padding-top: 0.50rem;
        display: block;
    }
    .info-item1{
        border:none;

    }
    .money{
        font-size:0.26rem;
        color:#a2a2a2;
        display: block;
        text-align: center;
        padding-bottom: 0.36rem;
    }
    .money1{
        color:#f9444b;
    }
    .paybox{
        width: 7.02rem;
        /*height: 3.84rem;*/
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("../assets/images/bg@2x.png");
        margin:0 auto;
        padding-bottom: 0.10rem;
    }
    .pay-item{
        width: 6.76rem;
        /*height: 1.28rem;*/
        margin:0 auto;
        border-bottom: 0.01rem solid #d3d7da;
        position: relative;
        padding-bottom: 0.20rem;
    }
    .pay-img{
        width: 0.74rem;
        height: 0.74rem;
        margin: 0.28rem 0.42rem 0 0.36rem;
        float:left;
    }
    .pay-title{
        font-size: 0.26rem;
        color:#555555;
        display: block;
        float:left;
        margin-top: 0.30rem;
        width: 70%;
    }
    .pay-title2{
        font-size: 0.26rem;
        color:#555555;
        display: block;
        float:left;
        margin-top: 0.10rem;
    }
    .pay-check{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        display: block;
        top:0.49rem;
        right:0.37rem;
    }
    .pay-item1{
        border:none;
    }

    p{  position: relative;  }
    .circle-btn{
        display: inline-block;
        position: absolute;
        top:0.02rem;
        border:1px solid rgb(192,192,192);
        border-radius: 50%;
        width: 0.32rem;
        height: 0.32rem;

    }
    input.radio[type='radio']{
        opacity:0;
        top:0;
        left: -0.04rem;
        display:inline-block ;
        height: 0.18rem;
        width: 0.18rem;
        z-index: 100;
        vertical-align: middle;
        position:absolute;
    }

    input.radio[type='radio']:checked+.radio{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        top:0rem;
        right:0rem;
        background: url('../assets/images/wc@2x.png') no-repeat center/cover;
    }

    label.radio{
        font-size:0.14rem;
        display: inline-block;
        height: 0.14rem;
        padding-left: 0.30rem;
        position: relative;
        vertical-align: middle;
        line-height: 0.14rem;
    }

    .anniu{
        width: 100%;
        height: 0.97rem;
        border:none;
        outline:none;
        position: fixed;
        left:0;
        bottom:0;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        color:#fff;
        font-size: 0.36rem;
    }
</style>