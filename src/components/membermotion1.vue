<template>
    <div id="main">
        <div class="zhezhao">
            <!--会员卡-->
            <section class="card">
                <div class="card-rtop">
                    已过期
                </div>
                <span class="card-title">7744-0494-9480-954</span>
                <div class="tiaoma"></div>
                <span class="card-title3">好象有货半年卡</span>
                <button class="anniu">立即续费</button>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "membermotion1"
    }
</script>

<style scoped>
    .zhezhao{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
    }
    .card{
        width: 7.32rem;
        height: 4.89rem;
        background: #ff1c8b;
        position:fixed;
        top:4.23rem;
        left:0;
        right:0;
        margin:auto;
        background: url("../assets/images/组1@2x.png") no-repeat center/cover;
    }
    .card-rtop{
        width: 1.25rem;
        height: 0.53rem;
        background: #fff;
        float:right;
        -webkit-border-radius: 0.5rem;
        -moz-border-radius: 0.5rem;
        border-radius: 0.5rem;
        margin-right:0.42rem;
        margin-top: 0.30rem;
        font-size:0.28rem;
        color:#f9444d;
        text-align: center;
        line-height: 0.53rem;
    }
    .card-title{
        font-size:0.42rem;
        color:#f8f8f8;
        display: block;
        /*font-weight: 600;*/
        padding-top: 1.25rem;
        text-align: center;
        text-shadow:4px 4px 8px #eb585b;
    }
    .card-title1{
        padding-top: 0.20rem;
    }
    .card-title3{
        font-size:0.34rem;
        color:#3f3f3f;
        display: block;
        text-align: center;
        line-height: 0.34rem;
        padding-top: 0.40rem;
    }
    .anniu{
        width: 1.84rem;
        height: 0.60rem;
        background: pink;
        margin:0 auto;
        border: none;
        display: block;
        outline: none;
        margin-top: 0.19rem;
        font-size:0.34rem;
        /*font-weight: bold;*/
        line-height: 0.60rem;
        text-align: center;
        color:#fff;
        background: url("../assets/images/buttonhy@2x.png") no-repeat center/cover;
    }
    .tiaoma{
        width: 4.6rem;
        height: 1.04rem;
        background: #ff1c8b;
        margin:0 auto;
        margin-top: 0.10rem;
    }
</style>