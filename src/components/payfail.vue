<template>
    <div id="main">
        <div class="bg">
            <span class="note1">订单支付失败</span>
            <span class="note1 note2">去看看有什么想买的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "payfail"
    }
</script>

<style scoped>

    .bg{
        width: 6.3rem;
        height: 6.02rem;
        background: url("../assets/images/Group2@2x.png") no-repeat center;
        background-size:100% 100%;
        margin:0 auto;
        margin-top:0.8rem;
    }
    .note1{
        font-size:0.36rem;
        color:#a2a2a2;
        text-align: center;
        position:absolute;
        bottom:7.21rem;
        left:0;
        right:0;
        margin:auto;
    }
    .note2{
        bottom:6.54rem;
        font-size:0.22rem;
    }
</style>