<template>
    <div id="main">

        <main>
            <span class="biaoti">联系我们</span>

            <div class="content">
                <p>成都好象科技有限公司</p>
                <p>成都市金牛区九里堤创新大厦4层</p>
                <p>供应商入驻：4001883382</p>
                <p>商务合作：shangwu@hxyouhou.com</p>
                <p>开分店：zhaoshang@hxyouhuo</p>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "contact"
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
        height: 100vh;
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