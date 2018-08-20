<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">商品详情</span>-->
        <!--&lt;!&ndash;<img src="../assets/images/fx@2x.png" class="share">&ndash;&gt;-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="good-info clearfix">
                <Swiper class="banner" height="5.07rem"  :aspect-ratio="300/800">

                    <swiper-item class="swiper-demo-img" v-for="(item, index) in goods.banners" :key="index"><img :src="item"></swiper-item>

                </Swiper>
                <p>
                    <span class="good-form">[{{types}}]</span>
                <p class="description">{{goods.name}}</p>
                </p>
                <div class="price">
                    <span class="oldprice">￥{{goods.member_price}}</span>
                    <span class="newprice">已省:￥{{save_price}}</span>
                    <span class="number">销量：{{goods.sales_volume}}件</span>
                </div>
                <div class="price">
                    <span class="oldprice oldprice1">原价：￥{{goods.market_price}}</span>
                    <img src="../assets/images/hy@2x.png"class="anniu" @click="willmember">
                </div>
                <div class="price price1">
                    <span class="oldprice oldprice1">已选：</span>
                    <span class="newprice newprice1">{{choose}}</span>
                    <img src="../assets/images/ddd@2x.png"class="anniu anniu1" @click="goodshow">
                </div>
                <ul class="fuwu">
                    <li><img src="../assets/images/cj@2x.png" alt=""></li>
                    <li><img src="../assets/images/xx@2x.png" alt=""></li>
                    <li><img src="../assets/images/9t@2x.png" alt=""></li>
                </ul>
            </div>
            <!--商家详情-->
            <section class="goodsmore">
                <div class="goostitle">商品详情</div>
                <div class="imgsbox" v-html="goods.description">
                </div>
            </section>
            <!--优选好货-->
            <ul class="yx clearfix">
                <div class="youxuan">优选好货</div>
                <router-link :to="{path:'/goodshow',query:{goods_id:item.goods_id}}" class="yx-item" v-for="item in goods.about_recommend" :key="item.goods_id" @click.native="flushCom">
                    <div class="box">
                        <img :src="item.goods_img" class="goodstu">
                    </div>
                    <div class="yx-ginfo clearfix">
                        <span class="yx-gname">{{item.goods_name}}</span>
                        <span class="yx-newprice">￥{{item.shop_price}}</span>
                        <span class="yx-shen">已省:10元</span>
                        <span class="yx-oldprice">原价:￥{{item.market_price}}元</span>
                    </div>
                </router-link>

            </ul>
        </main>

        <!--底部-->
        <footer>
            <div class="footbox clearfix">
                <div class="ser" @click="kefu">
                    <img src="../assets/images/ej@2x.png" class="server">
                    <span class="kefu">客服</span>
                </div>
                <div class="ser like" @click="like">
                    <div  class="server liketu" :check="{}"></div>
                    <span class="kefu">收藏</span>
                </div>
                <button class="lijishop" @click="goodshow">加入购物车</button>
                <button class="lijishop lijishop1" @click="goodshow1">立即购买</button>
            </div>
            <div class="zhezhao" v-show="showbox" @touchmove.prevent>
                <div class="goods clearfix">
                    <div class="ginfo">
                        <div class="goodsxtu">
                            <img :src="style_img" alt="">
                        </div>
                        <span class="sum">共计: <span class="prices">￥{{moneynum}}</span></span>
                        <span class="numbers">库存{{style_stock}}件</span>
                        <div class="close" @click="close">x</div>
                        <div class="group" v-for="(item,index) in goods.spec_group" :key="index">
                            <span class="style">{{item.spec_name}}:</span>
                            <div class="stylebox">
                                <div class="style1" v-for="(value,cellIndex) in item.spec_value" @click="check(value,cellIndex,index)">{{value}}</div>
                            </div>
                        </div>
                        <div class="choose">
                            <span class="num">数量:</span>
                            <img src="../assets/images/jh@2x.png" class="jh" @click="reduce">
                            <span class="numadd">{{goodsnum}}</span>
                            <img src="../assets/images/jhh@2x.png" class="jh jhh" @click="add">
                        </div>
                    </div>

                    <div class="ok" clearfix @click="gocart">选好了</div>
                </div>
            </div>
            <div class="zhezhao" v-show="showbox1" @touchmove.prevent>
                <div class="goods clearfix">
                    <div class="ginfo">
                        <div class="goodsxtu">
                            <img :src="style_img" alt="">
                        </div>
                        <span class="sum">共计: <span class="prices">￥{{moneynum}}</span></span>
                        <span class="numbers">库存{{style_stock}}件</span>
                        <div class="close" @click="close1">x</div>
                        <div class="group" v-for="(item,index) in goods.spec_group" :key="index">
                            <span class="style">{{item.spec_name}}:</span>
                            <div class="stylebox">
                                <div class="style1" v-for="(value,cellIndex) in item.spec_value" @click="check(value,cellIndex,index)">{{value}}</div>
                            </div>
                        </div>
                        <div class="choose">
                            <span class="num">数量:</span>
                            <img src="../assets/images/jh@2x.png" class="jh" @click="reduce">
                            <span class="numadd">{{goodsnum}}</span>
                            <img src="../assets/images/jhh@2x.png" class="jh jhh" @click="add">
                        </div>
                    </div>

                    <div class="ok" clearfix @click="gocart1">选好了</div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import { Swiper,SwiperItem,} from 'vux'
    import { mapState } from 'vuex'
    import qs from 'qs'

    export default {
        name: "goodshow",
        data () {
            return {
                showbox:false,
                showbox1:false,
                goodsnum:1,
                goods:[],
                names:"",
                save_price:"",
                style_img:"",
                style_price:"",
                style_stock:"",
                choose_spec:[],
                spec_id:"",
                img:"",
                choose:"",
                types:""
            }
        },

        computed: {
            ...mapState({
              goods_id: state => state.goods_id,
              user_id: state => state.user_id,
              device:state =>state.device
            }),
            // 总金额
            moneynum:function(){
                return this.goods.member_price * this.goodsnum
            }
        },
        mounted:function(){
            this.$axios.get('/goods/detail',{params:{goods_id:this.goods_id}}).then(res=>{
                // console.log(res.data.data);
                this.goods=res.data.data;
                this.types=this.goods.types;
                if(this.types=='1'){
                    this.types="门店自营"
                }else if(this.types=='2'){
                    this.types="总仓包邮"
                }
                console.log(this.goods)
                this.save_price=this.goods.market_price-this.goods.member_price;
                for (var i=0;i<this.goods.spec_reg.length;i++){

                    if(this.names=this.goods.spec_reg[i]){
                        this.style_img=this.goods.spec_reg[i].spec_img_path
                        this.style_stock=this.goods.spec_reg[i].stock
                    }
                }
            })
        },

        components: {
            Swiper,
            SwiperItem,
        },
        methods:{
            goodshow(){
                this.showbox=!this.showbox;

            },
            goodshow1(){
                this.showbox1=!this.showbox1;
            },
            close(){
                this.showbox=false;

            },
            add(){
                this.goodsnum++
            },
            reduce(){
                this.goodsnum--;
                if(this.goodsnum<=0){
                    this.goodsnum=0;
                }
            },
            like(){
                this.$axios.post('/user/collection_store',
                    qs.stringify({
                        user_id:this.user_id,
                        goods_id:this.goods_id
                    })).then(res=>{
                    console.log(res)
                })
            },
            flushCom:function(){
                this.$router.go(0);
            },
            kefu(){
                if(this.device='weixin'){
                    wx.miniProgram.navigateTo({url: '/pages/call/main'})
                }

            },
            close1(){
                this.showbox1=!this.showbox1
            },
            gocart(){
                if(this.choose==""){

                }else{
                    this.$axios.post('/user/shop_card',
                        qs.stringify({
                            goods_id:this.goods_id,
                            num:this.goodsnum,
                            user_id:this.user_id,
                            spec_id:this.spec_id
                        })).then(res=>{
                        console.log(res)
                    })
                    localStorage.good=JSON.stringify(this.goods);

                }

            },
            gocart1(){
                if(this.choose==""){

                }else{

                    localStorage.good=JSON.stringify(this.goods);
                    this.$router.push({name:'confirmorder',query:{num:this.goodsnum}})
                }
            },
            willmember(){
                this.$router.push({name:'hxmember'})
            },
            check(value,cellIndex,index){
                this.names=cellIndex;
                // console.log(this.names)
                this.choose_spec[index] = value;
                // console.log(this.goods.spec_reg);
                var reg_str = '';
                for(var i=0;i<this.choose_spec.length;i++){
                    reg_str += i==(this.choose_spec.length-1)?this.choose_spec[i]:this.choose_spec[i]+'-';
                    this.choose=(this.choose_spec.length-1)?this.choose_spec[i]:this.choose_spec[i]+',';
                }

                for (var i=0;i<this.goods.spec_reg.length;i++){
                    if(this.goods.spec_reg[i].reg_spec_str == reg_str){
                        this.style_img=this.goods.spec_reg[i].spec_img_path
                        this.style_stock=this.goods.spec_reg[i].stock
                        this.spec_id=this.goods.spec_reg[i].spec_id
                    }

                }

            },

        }
    }

function array_search(arr,val,type) {
    type = type==undefined?false:type;
    console.log(arr);
    for(var i = 0;i<arr.length;i++){
        if(arr[i] == val)
            return i;
        if(type){
            if(typeof arr[i] == 'object'){
                 return array_search(arr[i],val,type);
            }
        }
    }
    return false;
}
</script>

<style scoped>
    .group{
        width: 100%;
        height: auto;
        float:left;
    }
    .choose{
        width: 100%;
        height: 1.5rem;
        float:left;
        position: relative;

    }
    .ginfo{
        width: 100%;
        height: auto;
        float:left;
        position: absolute;
        bottom:1.02rem;
        left:0;
        background: #fff;
    }
    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.50rem;
        position:fixed;
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
    .share{
        width: 0.30rem;
        height: 0.33rem;
        display: block;
        margin-right:0.38rem;
        margin-top: 0.25rem;
        float:right;
    }
    /*main{*/
    /*width: 100%;*/
    /*margin-top:0.8rem;*/
    /*}*/
    .good-info{
        width: 100%;
        height: auto;
        background: #fff;
        float:left;
    }
    .imgbox{
        width: 100%;
        height: 5.04rem;
        position: relative;
    }
    .banner{
        width: 100%;
        height: 5.04rem;
        overflow: hidden;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .love{
        width: 0.35rem;
        height: 0.31rem;
        position: absolute;
        top:0.42rem;
        right:0.40rem;
    }
    .good-form{
        font-size:0.32rem;
        color:#fa3d58;
        padding-left:0.34rem;
        padding-top:0.34rem;
        display: block;
        float:left;
    }
    .description{
        font-size:0.32rem;
        color:#555555;
        display: block;
        padding-left:0.34rem;
        padding-top:0.40rem;
        width: 7.0rem;
    }
    .oldprice{
        font-size:0.28rem;
        color:#f84848;
        display: block;
        float:left;
        padding-left: 0.36rem;
        padding-top:0.28rem;
        font-weight: bold;
    }
    .newprice{
        display: block;
        float:left;
        font-size:0.28rem;
        color:#555555;
        padding-left: 0.19rem;
        padding-top:0.28rem;
    }
    .number{
        font-size:0.24rem;
        color:#a2a2a2;
        float:right;
        padding-top:0.28rem;
        padding-right: 0.43rem;
        display: block;
    }
    .price{
        width: 100%;
        float:left;
    }
    .oldprice1{
        color:#a2a2a2;
        font-weight: normal;
    }
    .anniu{
        width: 1.35rem;
        height: 0.37rem;
        float:right;
        margin-top:0.19rem;
        margin-right: 0.44rem;
        display: block;
    }
    .price1{
        /*margin-top: 0.48rem;*/
        padding-bottom: 0.16rem;
        border-bottom: 0.01rem solid #cccccc;
    }
    .newprice1{
        font-weight: 600;
    }
    .anniu1{
        width: 0.33rem;
        height: 0.07rem;
        margin-top:0.42rem;
        margin-right: 0.44rem;
    }
    .fuwu{
        width: 100%;
        height: 0.72rem;
        border-bottom:0.01rem solid #e0e0e0;
        float:left;
    }
    .fuwu li{
        width: 33.333333333%;
        height: 100%;
        float:left;
    }
    .fuwu li img{
        width: 2.11rem;
        /*height: 0.26rem;*/
        display: block;
        margin:0 auto;
        margin-top: 0.23rem;
    }
    .goodsmore{
        width: 100%;
        height: auto;
        float: left;
        margin-top: 0.07rem;
    }
    .goostitle{
        width: 100%;
        height: 0.82rem;
        font-size:0.26rem;
        color:#555555;
        line-height: 0.82rem;
        text-align: center;
        background: #fff;
    }
    .imgsbox{
        width: 100%;
        height: auto;
        background: #fff;
    }
    .imgsbox img{
        width: 100%;
        height: 100%;
    }
    .yx{
        width: 100%;
        height: auto;
        float:left;
        margin-top: 0.08rem;
    }
    .youxuan{
        width: 100%;
        height: 0.70rem;
        line-height: 0.70rem;
        font-size:0.26rem;
        color:#323a45;
        background: #fff;
        padding-left:0.33rem;
    }
    .yx-item{
        width: 3.745rem;
        /*height: 4.30rem;*/
        float:left;
    }
    .yx .yx-item:nth-child(2n+1){
        float: left;
        border-left:0.02rem solid #e5e5e5;
    }
    .box{
        width: 100%;
        height: 3.07rem;
        border-bottom:0.01rem solid #e5e5e5;
        position: relative;
    }
    .box img{
        width: 100%;
        height: 100%;
    }

    .yx-ginfo{
        width: 100%;
        /*height: 1.22rem;*/
        background: #fff;
        padding-left: 0.21rem;

    }
    .yx-gname{
        font-size:0.22rem;
        color:#2c2c2c;
        display: block;
        padding-top: 0.12rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
        width: 96%;

    }
    .yx-newprice{
        font-size:0.26rem;
        color:#f84848;
        display: block;
        line-height: 0.26rem;
        padding-top: 0.16rem;
        float: left;
        font-weight: bold;
    }
    .yx-shen{
        font-size:0.24rem;
        color:#f84848;
        display: block;
        line-height: 0.24rem;
        padding-top: 0.16rem;
        float: left;
        padding-left: 0.13rem;
    }
    .yx-item1{
        float: right;
        border-left:0.02rem solid #e5e5e5;
    }
    .yx-oldprice{
        font-size: 0.24rem;
        color: #8a959e;
        display: block;
        float: left;
        width: 100%;
        padding-top: 0.13rem;
        margin-right: 0.12rem;
        margin-bottom: 0.10rem;
    }
    .footbox{
        width: 100%;
        height: 0.96rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0rem;
        border-top:0.01rem solid #e0e0e0;

    }
    main{
        margin-bottom: 1.04rem;
        width: 100%;
        float:left;
    }
    .ser{
        width: 0.48rem;
        height: 100%;
        margin-left: 0.53rem;
        float: left;

    }
    .server{
        width: 0.41rem;
        height: 0.38rem;
        display: block;
        margin:0 auto;
        margin-top: 0.14rem;
    }
    .kefu{
        font-size: 0.22rem;
        color:#a2a2a2;
        line-height: 0.22rem;
        display: block;
        padding-top: 0.10rem;

    }
    .like{
        width: 0.48rem;
        margin-left: 0.88rem;
    }
    .liketu{
        width: 0.48rem;
        height: 0.38rem;
        background: url("../assets/images/Favourite@3x.png") no-repeat ;
        background-size: 0.48rem 0.38rem;
    }
    .liketu.check{

        background: url("../assets/images/Favourite_2@2x.png") no-repeat ;
        background-size: 0.48rem 0.38rem;
    }
    .lijishop{
        width: 2.14rem;
        height: 100%;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        display: block;
        float:left;
        border: none;
        outline: none;
        margin-left: 0.56rem;
        font-size:0.36rem;
        text-align: center;
        color:#fff;
    }
    .lijishop1{
        width: 2.43rem;
        margin-left: 0;
    }
    .goods{
        width: 100%;
        /*height: 8.6rem;*/
        background: #fff;
        position: fixed;
        left:0;
        bottom:0;
    }
    .goodsxtu{
        width: 2.22rem;
        height: 2.22rem;
        background: #f5f5f5;
        margin:0.35rem 0.22rem 0 0.45rem;
    }
    .goodsxtu img{
        width: 100%;
        height: 100%;
    }
    .sum{
        font-size:0.28rem;
        color:#555555;
        display: block;
        position: absolute;
        top:1.68rem;
        left:2.95rem;
    }
    .prices{
        color: #f9444d;
        font-weight: bold;
    }
    .numbers{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        position: absolute;
        top:2.18rem;
        left:2.95rem;
    }
    .close{
        width: 0.39rem;
        height: 0.39rem;
        position: absolute;
        top:0.34rem;
        right:0.40rem;
        border:0.02rem solid #a2a2a2;
        border-radius: 50%;
        text-align: center;
        font-size:0.18rem;
        line-height: 0.39rem;
        color:#a2a2a2;
    }
    .style{
        font-size:0.28rem;
        color:#555555;
        padding-left: 0.53rem;
        display: block;
        padding-top: 0.51rem;
    }
    .style1{
        /*width: 1.26rem;*/
        height: 0.60rem;
        background: #f5f5f5;
        border-radius: 0.40rem;
        padding: 0 0.20rem;
        font-size:0.26rem;
        color:#555555;
        text-align: center;
        line-height: 0.60rem;
        margin:0.28rem 0.18rem 0 0rem;
        float:left;
    }
    .style1:nth-child(n+2){
        margin-left:0;
    }
    .style2{
        margin-left:0;
    }
    .style1:hover{
        color:#f9444d;
    }
    .stylebox{
        width: 100%;
        height: auto;
        float: left;
        padding-left: 0.53rem;
    }
    .num{
        display: block;
        font-size:0.28rem;
        color:#555555;
        margin:0.56rem 0 0 0.53rem;
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
        bottom:0.5rem;
    }
    .numadd{
        font-size:0.28rem;
        color:#555555;
        position: absolute;
        right:0.97rem;
        bottom:0.52rem;
    }
    .jhh{
        right:0.41rem;
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