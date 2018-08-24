<template>
    <div id="main">
        <main>
            <div class="img">
                <img src="../assets/images/fail.png" alt="">
                <span>兑换失败</span>
                <span id="back" @click="back">返回</span>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "goldfail",
        methods:{
            back(){
                jsObj.GotoMain()
            }
        }
    }
</script>

<style scoped>
    main{
        background: #f5f5f5;
        width: 100vw;
        height: 100vh;
        float:left;
    }
    .img{
        width: 4.30rem;
        height: 3.93rem;
        margin-top:1.23rem;
        margin-left:1.62rem
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .img span{
        display: block;
        font-size:0.46rem;
        color:#89969f;
        text-align: center;
    }
    .anniu{
        width: 2.55rem;
        height: 0.82rem;
        border:none;
        outline: none;
        display: block;
        margin:0 auto;
        margin-top: 1.44rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.90rem;
        color:#fff;


    }
   #back{
        width: 2.85rem;
        height: 1.10rem;
        display: block;
        margin:0 auto;
        font-size: 0.32rem;
        text-align: center;
        line-height: 1.10rem;
        margin-top: 0.20rem;
        color:#fff;
        background-size: 100% 100%;
       background-repeat: no-repeat;
        background-image: url("../assets/images/button@2x.png") ;
    }
</style>