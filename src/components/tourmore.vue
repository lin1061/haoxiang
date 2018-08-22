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
                <Swiper class="banner" height="5.07rem"  :aspect-ratio="300/800">

                    <swiper-item class="swiper-demo-img" v-for="(item, index) in travel_goods.banners" :key="index"><img :src="item"></swiper-item>

                </Swiper>
                <span class="hudong-title">{{travel_goods.name}}</span>

                <div class="xiaoqu clearfix">
                    <span class="price">市场价:￥{{travel_goods.original_price}}/人</span>
                    <span class="addr">当前校区:{{schoolname}}</span>
                    <img src="../assets/images/wz@2x.png" class="wz" @click="addr">
                </div>
                <div class="xiaoqu clearfix">
                    <span class="huiprice">会员价:￥2405.00/人</span>
                    <span class="chajia">已省{{travel_goods.earnest_money}}元</span>
                    <span class="numb">销量:{{travel_goods.sales_volume}}件</span>
                </div>
                <span class="huititle">已选: <span class="schools">{{data}}</span></span>
                <img src="../assets/images/ddd@2x.png" class="more" @click="yuyue">

            </div>
            <div class="xiangqin clearfix" v-html="travel_goods.describe"></div>
        </main>
        <footer>
            <button class="yuyue" @click="yuyue">立即预约</button>
            <div class="zhezhao" v-show="showbox" @touchmove.prevent>
                <div class="yuyuemore">
                    <span class="yudate">请选择出游日期</span>
                    <div class="close" @click="close">X</div>
                    <div class="canl">
                        <!--<calendara-->
                        <!--:start-date="new Date(2015,7)">-->
                        <!--</calendara>-->
                        <Calendar
                                v-on:choseDay="clickDay"
                                v-on:changeMonth="changeDate">
                        </Calendar>
                    </div>
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
    import { mapState } from 'vuex'
    import Calendar from './vue-calendar-component/index';
    // import calendara from '@/components/calendara.vue'
    import { Swiper,SwiperItem,} from 'vux'

    export default {
        name: "tourmore",
        data(){
            return{
                showbox:false,
                num:0,
                travel_goods:[],
                data:"",
                schoolname:"",

            }
        },
        computed: {
            ...mapState({
                goods_id: state => state.goods_id,
            }),

        },
        mounted:function () {
            this.$axios.get('/goods/travel_goods_info',{params:{goods_id:this.goods_id}}).then(res=>{
                this.travel_goods=res.data.data;
                this.schoolname=this.travel_goods.university.name;

            })
        },
        methods:{
            close(){
                this.showbox=false;
            },
            yuyue(){
                this.showbox=!this.showbox;
            },
            clickDay(data) {
                console.log(data)
                this.data=data; //选中某天
            },
            changeDate(data) {
                console.log(data); //左右点击切换月份
            },
            clickToday(data) {
                console.log(data); //跳到了本月
            },
            add(){
                this.num++;
            },
            addr(){
                jsObj.GPS();
            },
            reduce(){
                this.num--;
                if(this.num<=0){
                    this.num=0;
                }
            }
        },

        components: {
            Calendar,
            Swiper,
            SwiperItem,
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
    ul>li{
        width: 100%!important;
        height: auto!important;
        text-align: center!important;
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
        height: auto;
        background: #fff;
        border-bottom:0.01rem solid #cccccc;
        position: relative;
        overflow: hidden;
        padding-bottom: 0.2rem
    }
    .banner{
        width: 100%;
        height: auto;
        position: relative;
    }
    .banner img{
        width: 100%;
        height: 100%;

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
        top:0rem;
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
        position: relative;
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
        margin-bottom: 0.96rem;
        margin-top: 0.08rem;
        background: #fff;
        padding:0.34rem;
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
        width: 0.40rem;
        height: 0.40rem;
        position: absolute;
        top:0.34rem;
        right:0.40rem;
        background-size: 0.39rem 0.39rem;
        background: url("../assets/images/close.png") no-repeat center/cover;
    }
    .yudate{
        font-size:0.34rem;
        line-height: 0.34rem;
        color:#555555;
        display: block;
        text-align: center;
        padding-top: 0.40rem;
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
    .list-paddingleft-2{
        width: 100%;
        height: 100%;
    }
    .canl{
        margin-top: 0.30rem;
        padding-left: 0.30rem;
    }
    .wh_content_all{
        background-color: #fff;
    }
</style>