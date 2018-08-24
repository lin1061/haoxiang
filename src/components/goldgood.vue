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

                    <swiper-item class="swiper-demo-img" v-for="(item, index) in good.banners" :key="index"><img :src="item"></swiper-item>

                </Swiper>
                <p>
                <p class="description">{{good.name}}</p>
                </p>
                <div class="price">
                    <span class="oldprice">金币{{good.exchange_gold_coin}}</span>
                    <span class="number">已兑换:{{good.sales_volume}}件</span>
                </div>
                <div class="price">
                    <span class="oldprice oldprice1">原价：￥{{good.market_price}}</span>
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
                <div class="imgsbox" v-html="good.description">
                </div>
            </section>

        </main>

        <!--底部-->
        <footer>
            <div class="footbox clearfix">
                <button class="lijishop lijishop1" @click="goodshow">立即兑换</button>
            </div>
            <div class="zhezhao" v-show="showbox" @touchmove.prevent @click="zhezhao">
            </div>
            <div class="goods clearfix" v-show="showbox" @touchmove.prevent>
                <div class="ginfo">
                    <div class="goodsxtu">
                        <img :src="style_img" alt="">
                    </div>
                    <span class="sum">共计: <span class="prices">￥{{moneynum}}</span></span>
                    <span class="numbers">库存件{{style_stock}}</span>
                    <div class="close" @click="close"></div>
                    <div class="group" v-for="(item,index) in good.spec_group" :key="index">
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
                <toast v-model="sx"  type="text" :time="800" is-show-mask text="请选属性" position="bottom"></toast >
                <toast v-model="s"  type="text" :time="800" is-show-mask text="金币不足" position="bottom"></toast >
                <div class="ok" clearfix @click="goorder">立即兑换</div>
            </div>

        </footer>
    </div>
</template>

<script>
    import { Swiper,SwiperItem,} from 'vux'
    import { mapState } from 'vuex'
    import { Toast } from 'vux'
    export default {
        name: "goldgood",
        data(){
            return{
                gid:"",
                good:[],
                names:"",
                showbox:false,
                save_price:"",
                style_img:"",
                style_price:"",
                style_stock:"",
                choose_spec:[],
                img:"",
                choose:"",
                goodsnum:1,
                token:'',
                user_id:"",
                university_id:"",
                sx:false,
                type:"",
                model_id:"",
                gold_coin:"",
                icon:"",
                s:false,
                iconyu:""
            }
        },
        components: {
            SwiperItem,
            Swiper,
            Toast
        },
        computed: {
            ...mapState({
                goods_id: state => state.goods_id,
                device:state =>state.device,


            }),
            // 总金额
            moneynum:function(){
                return this.good.exchange_gold_coin * this.goodsnum
            }
        },
        mounted:function () {
            this.university_id=this.$route.query.university_id
            this.user_id=this.$route.query.user_id;
            this.gid=this.$route.query.goods_id;
            this.token=this.$route.query.token;
            this.$axios.get('/user/get_info/'+this.user_id).then((res)=>{
                if(res.data.err_code == 0){
                    this.gold_coin=res.data.data.user_info.gold_coin;
                }
            })
            this.$axios.get('/user/exchange_goods_info',{params:{goods_id:this.gid,token:this.token}}).then(res=>{
                    this.good=res.data.data;
                    this.icon=this.good.exchange_gold_coin;
                    // console.log(this.good)
                    this.type=this.good.types;
                this.style_img=this.good.goods_img;
                for (var i=0;i<this.good.spec_reg.length;i++){

                    if(this.names=this.good.spec_reg[i]){
                        this.style_img=this.good.spec_reg[i].spec_img_path
                        this.style_stock=this.good.spec_reg[i].stock
                    }
                }
            });

        },
        methods:{
            goodshow(){
                this.showbox=!this.showbox;

            },
            close(){
                this.showbox=false;

            },
            add(){
                this.goodsnum++
            },
            reduce(){
                this.goodsnum--;
                if(this.goodsnum<=1){
                    this.goodsnum=1;
                }
            },
            goorder(){


                if(this.gold_coin>=this.icon){
                    if(this.type==1){
                        this.iconyu=this.gold_coin-this.icon;

                        localStorage.shop=JSON.stringify(this.good);
                        this.$router.push({name:'goldorder',query:{num:this.goodsnum,user_id:this.user_id,token:this.token,goods_id:this.goods_id,university_id:this.university_id,model_id:this.model_id,iconyu:this.iconyu}})
                    }else if(this.type==2){
                        if(this.choose==""){
                            this.sx=true
                        }else{
                            this.iconyu=this.gold_coin-this.icon;
                            console.log(this.iconyu)
                            localStorage.shop=JSON.stringify(this.good);
                            this.$router.push({name:'goldorder',query:{num:this.goodsnum,user_id:this.user_id,token:this.token,goods_id:this.goods_id,university_id:this.university_id,model_id:this.model_id,iconyu:this.iconyu}})
                        }
                    }
                }else{
                    this.s=true;
                }



            },
            zhezhao(){
               this.showbox=false;
            },
            willmember(){
                this.$router.push({name:'hxmember',query:{user_id:this.user_id,token:this.token}})
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
                console.log(this.good.spec_reg)
                for (var i=0;i<this.good.spec_reg.length;i++){
                    if(this.good.spec_reg[i].reg_spec_str == reg_str){
                        this.style_img=this.good.spec_reg[i].spec_img_path
                        this.style_stock=this.good.spec_reg[i].stock;
                        this.model_id=this.good.spec_reg[i].spec_id
                    }

                }

            },
        }

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
        border-bottom: 0.01rem solid #a2a2a2;
    }
    .yx li:nth-child(2n+1){
        float: left;
        border-left:0.02rem solid #e5e5e5;
    }
    .box{
        width: 100%;
        /*height: 3.07rem;*/
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
    }
    .lijishop{
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        display: block;
        float:left;
        border: none;
        outline: none;
        font-size:0.36rem;
        text-align: center;
        color:#fff;
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
        width: 0.40rem;
        height: 0.40rem;
        position: absolute;
        top:0.34rem;
        right:0.40rem;
        background-size: 0.39rem 0.39rem;
        background: url("../assets/images/close.png") no-repeat center/cover;
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