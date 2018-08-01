<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">叮叮驾考</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="huodong">
                <div class="banner">
                    <div class="pager">
                        5/5
                    </div>
                </div>
                <span class="hudong-title">日本东京暑假短期游学 日本短期留学游学东京横滨大阪京都中介</span>

                <div class="xiaoqu clearfix">
                    <span class="price">市场价:￥3180/人</span>
                    <span class="addr">当前校区:四川大学锦城学院</span>
                    <img src="../assets/images/wz@2x.png" class="wz">
                </div>
                <div class="xiaoqu clearfix">
                    <span class="huiprice">会员价:￥2405/人</span>
                    <span class="chajia">已省400元</span>
                    <span class="numb">销量:168件</span>
                </div>
                <span class="huititle clearfix">已选: <span class="schools">东京大学</span></span>
                <img src="../assets/images/ddd@2x.png" class="more clearfix">
            </div>
            <div class="xiangqin"></div>
        </main>
        <footer>
            <button class="yuyue" @click="yuyue">立即预约</button>
            <div class="zhezhao" v-show="showbox">
                <div class="yuyuemore">
                    <span class="yudate">请选择出游日期</span>
                    <div class="close" @click="close">X</div>
                    <!--<div class="canl">-->
                    <calendara
                            :start-date="new Date(2015,7)">
                    </calendara>
                    <!--</div>-->
                    <div class="ok">
                        <span>定金: <span class="jiage">￥130元</span></span>
                        <button class="yuprice">立即预约</button>
                    </div>
                </div>
            </div>

        </footer>
    </div>
</template>

<script>

    import calendara from '@/components/calendara.vue'
    export default {
        name: "tourmore",
        data(){
            return{
                showbox:false,
                num:0
            }
        },
        methods:{
            close(){
                this.showbox=false;
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='';//出现滚动条
                document.removeEventListener("touchmove",mo,{passive:false});
            },
            yuyue(){
                this.showbox=!this.showbox;
                var mo=function(e){e.preventDefault();};
                document.body.style.overflow='hidden';
                document.addEventListener("touchmove",mo,{passive:false});//禁止滚动
            },
            add(){
                this.num++;
            },
            reduce(){
                this.num--;
                if(this.num<=0){
                    this.num=0;
                }
            }
        },
        components: {
            calendara: calendara
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 0.88rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.32rem;
        position: fixed;
        left:0;
        top:0;
        z-index: 99;

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
    main{
        /*margin-top: 0.86rem;*/
    }
    .huodong{
        width: 100%;
        height: 7.87rem;
        background: #fff;
        border-bottom:0.01rem solid #cccccc;
        position: relative;
    }
    .banner{
        width: 100%;
        height: 5.07rem;
        background-color: red;
        position: relative;
    }
    .pager{
        width: 0.71rem;
        height: 0.40rem;
        border-radius: 0.5rem;
        background: rgba(0,0,0,0.3);
        position: absolute;
        right:0.30rem;
        bottom:0.29rem;
        font-size:0.26rem;
        text-align: center;
        line-height: 0.40rem;
        color:#fff;
    }
    .hudong-title{
        font-size:0.32rem;
        color:#3f3f3f;
        display: block;
        padding-top: 0.36rem;
        padding-left:0.34rem;
        width: 7.20rem;
        line-height: 0.45rem;
    }
    .price{
        font-size:0.24rem;
        color:#a2a2a2;
        line-height: 0.24rem;
        display: block;
        padding-left:0.34rem;
        padding-top:0.08rem;
        float:left;
    }
    .addr{
        font-size: 0.24rem;
        color:#a2a2a2;
        display: block;
        float:right;
        line-height: 0.24rem;
        padding-top:0.08rem;
        padding-right:0.60rem;
    }
    .wz{
        width: 0.26rem;
        height: 0.32rem;
        display: block;
        position: absolute;
        right:0.33rem;
        bottom:1.16rem;
    }
    .huiprice{
        font-size:0.28rem;
        color:#f9444d;
        display: block;
        line-height: 0.28rem;
        float:left;
        padding-left:0.34rem;
        padding-top:0.27rem;
        font-weight: bold;
    }
    .xiaoqu{
        width: 100%;
        float:left;
    }
    .chajia{
        font-size:0.22rem;
        color:#a2a2a2;
        display: block;
        float:left;
        padding-top:0.24rem;
        padding-left:0.10rem;
    }
    .numb{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:right;
        padding-top:0.24rem;
        padding-right: 0.33rem;
    }
    .huititle{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        padding-top:0.20rem;
        padding-left:0.34rem;
        float:left;
        line-height: 0.28rem;
    }
    .schools{
        font-size:0.28rem;
        color:#555555;
        font-weight: bold;
    }
    .xiangqin{
        width: 100%;
        height: 5.0rem;
        margin-bottom: 0.96rem;
        margin-top: 0.08rem;
        background: red;
    }
    .yuyue{
        width: 100%;
        height: 0.96rem;
        border:none;
        outline: none;
        border-top:0.01rem solid #d4d7da;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        position: fixed;
        left:0;
        bottom:0;
        color:#fff;
        font-size:0.36rem;
    }
    .more{
        width: 0.33rem;
        height: 0.07rem;
        display: block;
        float:right;
        margin-top:0.33rem;
        margin-right:0.33rem;
    }
    .yuyuemore{
        width: 100%;
        height: 8.70rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0;

    }


    .ok{
        width: 100%;
        height: 1.02rem;
        background: #fff;
        border-top:0.01rem solid #d4d7da;
        font-size:0.36rem;
        color:#555555;
        position: absolute;
        left:0;
        bottom:0;
        text-align: right;
        line-height: 1.02rem;
    }

    .close{
        width: 0.39rem;
        height: 0.39rem;
        border:0.02rem solid #a2a2a2;
        border-radius: 50%;
        position: absolute;
        top:0.37rem;
        right:0.42rem;
        font-size:0.16rem;
        text-align: center;
        line-height: 0.39rem;
        color:#a2a2a2;
    }
    .yudate{
        font-size:0.34rem;
        line-height: 0.34rem;
        color:#555555;
        display: block;
        text-align: center;
        padding-top: 0.40rem;
    }
    .canl{
        width: 6.25rem;
        height: 6.25rem;
        margin:0 auto;
        margin-top:0.2rem;
    }
    ul{
        list-style: none;
    }
    #schedule-box{
        width: 6.5rem;
        margin: 0 auto;
        padding: 0.4rem 0.1rem;
        font-size: 0.30rem;

    }
    .schedule-hd{
        display: flex;
        justify-content: space-between;
        padding: 0 0.15rem;
    }
    .today{
        flex: 1;
        text-align: center;
        color:#a2a2a2;
    }
    .ul-box{
        overflow: hidden;
    }
    .ul-box > li{
        float: left;
        width: 14.28%;
        /*font-size:0.28rem;*/
        text-align: center;
        padding: 0.27rem 0;
    }
    .other-month{
        color: #999999;
    }
    .current-month{
        color: #333333;
    }
    .today-style{
        border-radius: 50%;
        background: #58d321;
    }
    .arrow{
        cursor: pointer;
    }
    .dayStyle{
        display: inline-block;
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        text-align: center;
        line-height: 0.45rem;
        cursor: pointer;
    }
    .current-month > .dayStyle:hover{
        background: #f5f5f5;
        color:#f84848;
    }
    .today-flag{
        background: #f84848;
        color: #fff;
    }

    .selected-style {
        background: #00BDFF;
        color: #ffffff;
    }
    .yuprice{
        width: 2.76rem;
        height: 100%;
        border:none;
        outline: none;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        float: right;
        display: block;
        font-size:0.36rem;
        color:#fff;
        margin-left:0.35rem;
    }
    .jiage{
        fonnt-size:0.32rem;
        color:#f9444d;
    }
    .zhezhao{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
    }
</style>