<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/back.png" class="back">
            <span class="title">其他</span>
        </header>
        <main>
            <div class="list-item">
                <div class="list-itemtop">
                    <span class="list-title1">成都叮叮驾到科技有限公司</span>
                    <span class="list-title2">企业</span>
                    <span class="list-title2 list-title3">gaieur guiheqruighiu</span>
                </div>
                <div class="list-itembottom">
                    <img src="../assets/images/mr@2x.png" alt="" class="mr">
                    <div class="list-ritem">
                        <div class="list-ritem1">
                            <img src="../assets/images/b@2x.png" alt="">
                            <span class="list-ritem1-wen">编辑</span>
                        </div>
                        <div class="list-ritem1 ritem2">
                            <img src="../assets/images/s@2x.png" alt="">
                            <span class="list-ritem1-wen">删除</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-item">
                <div class="list-itemtop">
                    <span class="list-title1">成都叮叮驾到科技有限公司</span>
                    <span class="list-title2">企业</span>
                    <span class="list-title2 list-title3">gaieur guiheqruighiu</span>
                </div>
                <div class="list-itembottom">
                    <img src="../assets/images/sw@2x.png" alt="" class="mr sw">
                    <div class="list-ritem">
                        <div class="list-ritem1">
                            <img src="../assets/images/b@2x.png" alt="">
                            <span class="list-ritem1-wen">编辑</span>
                        </div>
                        <div class="list-ritem1 ritem2">
                            <img src="../assets/images/s@2x.png" alt="">
                            <span class="list-ritem1-wen">删除</span>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        <footer>
            <button class="anniu">
                <span class="anniu-wenzi">添加新发票抬头</span>
            </button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "billslist"
    }
</script>

<style scoped>
    #main{
        width: 100vw;
        height: 100vh;
        background: #f5f5f5;
    }
    header{
        width: 100%;
        height: 0.93rem;
        background: #ffffff;
        line-height: 0.49rem;
        /*position: fixed;*/
        /*top:0;*/
        /*left:0;*/
    }
    /*main{*/
        /*margin-top:1.07rem;*/
    /*}*/
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.49rem;
    }
    .list-item{
        width: 7.21rem;
        height: 2.03rem;
        margin:0.14rem 0 0.14rem 0.12rem;
        background: url("../assets/images/bg.png") no-repeat  center;
        background-position: center;
        -webkit-background-size: cover;

    }
    .list-itemtop{
        width: 100%;
        height: 1.34rem;
        border-bottom:1px solid #e0e0e0;
        overflow:hidden;
    }
    .list-title1{
        margin:0.27rem 0 0.34rem 0.45rem;
        display: block;
        font-size:0.27rem;
    }
    .list-title2{
        font-size:0.24rem;
        display: block;
        color:#a2a2a2;
        float:left;
        margin:0 0 0.15rem 0.45rem;
    }
    .list-title3{
        margin:0 0 0.15rem 0.22rem;
    }
    .list-itembottom{
        width: 100%;
        height: 0.69rem;
        overflow: hidden;
    }
    .mr{
        display: block;
        width: 0.62rem;
        height: 0.32rem;
        float:left;
        margin:0.16rem 0 0 0.48rem;
    }
    .list-ritem{
        width: 2.36rem;
        height: 0.69rem;
        margin-right:0.69rem;
        float:right;
    }
    .list-ritem1{
        width: 0.97rem;
        height: 100%;
        float:left;
        margin-right:0.41rem;
    }
    .list-ritem1 img{
        width: 0.33rem;
        height: 0.35rem;
        display: block;
        margin-top:0.15rem;
        float:left;
        margin-right:0.08rem;
    }
    .list-ritem1-wen{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        line-height: 0.69rem;
    }
    .ritem2{
        margin-right: 0rem;
    }
    .sw{
        width: 1.03rem;
        height: 0.33rem;
    }
    footer{
        position: fixed;
        bottom:0.62rem;
        left:8.5vw;
    }
    .anniu{
        width: 6.36rem;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:0.78rem;
        border:none;
        outline:none;
        background-color: #fff;
        background:url(../assets/images/button.png) no-repeat center;
    }
    .anniu-wenzi{
        font-size:0.36rem;
        color:#ffffff;
        text-align: center;
    }
</style>