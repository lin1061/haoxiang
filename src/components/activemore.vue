<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">活动详情</span>-->
        <!--&lt;!&ndash;<img src="../assets/images/fx@2x.png" class="share">&ndash;&gt;-->
        <!--</header>-->
        <!--内容-->
        <main>
            <span class="biaoti">{{active.name}}</span>
            <span class="jianshu">{{active.title}}</span>
            <span class="jianshu">有效期：{{active.end_time}}</span>
            <div class="content">
                <img :src="active.img_path" alt="">
                <p v-html="active.describe" class="describe"></p>
            </div>
            <button class="join">立即参与</button>
        </main>
    </div>
</template>

<script>
    export default {
        name: "activemore",
        data(){
            return{
                active:[]
            }
        },
        mounted:function () {
            this.$axios.get('/find/activity_detail?activity_id=7&user_id=1').then(res=>{
                console.log(res);
                this.active=res.data.data;
            })
        }
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
    .share{
        width: 0.30rem;
        height: 0.33rem;
        display: block;
        margin-right:0.38rem;
        margin-top: 0.25rem;
        float:right;
    }
    main{
        /*margin-top: 0.80rem;*/
        background: #fff;
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
        padding-left:0.50rem;
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
        text-indent: 0.6rem;

    }
    .describe img{
        width: 50%;
        height: 50%;
    }
</style>