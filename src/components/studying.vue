<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">出国留学</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="huodong" >
                <Swiper class="banner" height="5.07rem"  :aspect-ratio="300/800">

                        <swiper-item class="swiper-demo-img" v-for="(item, index) in goods.banners" :key="index"><img :src="item"></swiper-item>

                </Swiper>
                <span class="hudong-title">{{goods.name}}</span>

                <div class="xiaoqu clearfix">
                    <span class="price">市场价:￥{{goods.original_price}}/人</span>
                    <span class="addr">当前校区:{{schoolname}}</span>
                    <img src="../assets/images/wz@2x.png" class="wz" @click="addr">
                </div>
                <div class="xiaoqu clearfix">
                    <span class="huiprice">会员价:￥{{goods.membership_price}}/人</span>
                    <span class="chajia">已省{{goods.earnest_money}}元</span>
                    <span class="numb">销量:{{goods.sales_volume}}件</span>
                </div>
                <span class="huititle">已选: <span class="schools">{{goodsname}}</span></span>
                <img src="../assets/images/ddd@2x.png" class="more" @click="yuyue">
            </div>
            <div class="xiangqin clearfix" v-html="goods.describe"></div>
        </main>
        <footer>
            <button class="yuyue" @click="yuyue">立即预约</button>
            <div class="zhezhao" v-show="showbox" @touchmove.prevent>
                <div class="yuyuemore">
                    <span class="huititle1">会员价:￥{{original_price}}<span class="shijia">市场价:<span class="oldjia">￥{{membership_price}}/人</span></span></span>

                    <span class="style ">类型:</span>
                    <div class="stylebox clearfix" >
                        <button class="style1" v-for="(item,index) in goods.goods_spec" @click="check(item,index)">{{item.name}}</button>

                    </div>
                    <div class="close" @click="close">X</div>
                    <span class="num">数量:</span>
                    <img src="../assets/images/jh@2x.png" class="jh" @click="reduce">
                    <span class="numadd">{{num}}</span>
                    <img src="../assets/images/jhh@2x.png" class="jh jhh" @click="add">
                    <div class="ok">立即预约</div>
                </div>
            </div>

        </footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Swiper,SwiperItem,} from 'vux'
    export default {
        name: "studying",
        data(){
            return{
                showbox:false,
                num:0,
                goods:[],
                goodsname:"",
                schoolname:"",
                original_price:"",
                membership_price:"",
                name:"",

            }
        },
        computed: {
            ...mapState({
                university_id:state=>state.university_id
            }),

        },
        mounted:function () {
            this.$axios.get('/goods/school_shop?goods_type=2',{params:{university_id:this.university_id}}).then(res=>{
                this.goods=res.data.data;
                this.schoolname=this.goods.university.name;
                this.original_price=this.goods.goods_spec[0].original_price;
                this.membership_price=this.goods.goods_spec[0].membership_price;
            })
        },
        methods:{
            close(){
                this.showbox=false;
            },
            yuyue(){
                this.showbox=!this.showbox;

            },
            check(item,index){
                this.goodsname=item.name;
                this.original_price=item.original_price;
                this.membership_price=item.membership_price;
            },
            add(){
                this.num++;
            },
            addr(){
                jsObj.gps();
            },
            reduce(){
                this.num--;
                if(this.num<=0){
                    this.num=0;
                }
            }
        },
        components: {
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
        line-height: 0.50rem;
        position: fixed;
        top:0;
        left:0;
        z-index:99;
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
        width: 100%;
        /*margin-top: 0.88rem;*/
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
        position:relative;
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
        height: 4.77rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0;
    }
    .huititle1{
        font-size:0.28rem;
        color:#f9444d;
        font-weight: bold;
        display: block;
        padding-top:0.39rem;
        padding-left:0.51rem;
    }
    .shijia{
        font-size:0.24rem;
        color:#8a959e;
    }
    .oldjia{
        text-decoration: line-through;
    }
    .style{
        font-size:0.28rem;
        color:#a2a2a2;
        padding-left: 0.53rem;
        display: block;
        padding-top: 0.51rem;
    }
    .style1{
        width: 1.26rem;
        height: 0.63rem;
        background: url("../assets/images/gg@2x.png") no-repeat center/cover;
        font-size:0.26rem;
        color:#555555;
        text-align: center;
        line-height: 0.63rem;
        margin:0.28rem 0.18rem 0 0.53rem;
        float:left;
        border:none;
        outline: none;
    }
    .style2{
        margin-left:0;
    }
    .stylebox{
        width: 100%;
        height: auto;
        float: left;
    }
    .num{
        display: block;
        font-size:0.28rem;
        color:#555555;
        margin:0.40rem 0 0 0.53rem;
        float: left;
    }
    .ok{
        width: 100%;
        height: 1.02rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        font-size:0.36rem;
        color:#fff;
        position: absolute;
        left:0;
        bottom:0;
        text-align: center;
        line-height: 1.02rem;
    }
    .jh{
        width: 0.36rem;
        height: 0.36rem;
        display: block;
        position: absolute;
        right:1.41rem;
        bottom:1.55rem;
    }
    .numadd{
        font-size:0.28rem;
        color:#555555;
        position: absolute;
        right:0.97rem;
        bottom:1.58rem;
    }
    .jhh {
        right: 0.41rem;
    }
    .style1:hover{
        color:#f9444d;
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
    .zhezhao{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
    }
</style>