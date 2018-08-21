<template>
    <div id="main">

        <main>
            <span class="biaoti">好象有货简介</span>

            <div class="content">
                <p>好象有货，会员制互联网超市。既有APP和小程序，也有线下直营门店，是一个以会员为核心的无差价购物商城。</p>
                <p>好象有货首先精选优质商品，并以较低进货价集中采购，然后通过APP和线下实体店，将商品以进货价流通到会员用户手中，全程不以商品差价盈利。</p>
                <p>除了商品无差价，好象有货还会赋予好象会员多种特权。如：</p>
                <p># 持有好象电子会员卡的用户，在周边线下各品类合作商铺可享受专属优惠；</p>
                <p># 好象会员可超低价购买景区门票、成本价租赁正装、免费领电影票、免费打印等；</p>
                <p># 好象会员可领券多种线上福利，如各种优惠券、全网VIP视频会员、PPT模板、线上课程等；</p>
                <p>好象有货通过连锁经营模式，以学校和社区为单位在全国范围开设门店，让好象VIP，在全国各地都能享受尊贵的会员服务。</p>
                <p>人们使用过各式各样的购物APP、团购APP、线下实体超市，绝大多数是想着如何向用户销售商品实现盈利。 而好象有货是想着如何尽量在商品上不赚钱，尽量减少商品流通中间商，让用户尽量以商品原厂地的价格购物。</p>
                <p>所以，我们不卖货，我们只做你的好货仓库。</p>
                <span class="title1">核心理念：</span>
                <p>坚持不以商品差价赚钱，歇尽全力为会员创造价值。</p>
                <span class="title1">核心价值观：</span>
                <p>用户第一
                    用户是衣食父母，公司每个人都是客服
                    团队合作
                    共享成果，共担责任，团队即事业共同体
                    诚信
                    诚信公司稳固与发展的基石
                    激情
                    积极乐观，敢为人先，相信年轻的力量</p>

            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "hxsummary"
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

    #main{
        background: #fff;
        width: 100vw;
        height: auto;
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

    .content{
        width: 6.4rem;
        height: auto;
        padding:0.25rem 0.1rem;
        margin:0 auto;
        margin-top:0.30rem;
        margin-bottom:0.4rem;
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
        text-indent: 0.6rem;
    }
    .title1{
        font-size:0.26rem;
        font-weight: bold;
        padding-top: 0.30rem;
        display: block;
    }

</style>