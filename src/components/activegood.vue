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

                    <swiper-item class="swiper-demo-img" v-for="(item, index) in active.banner_img" :key="index"><img :src="item"></swiper-item>

                </Swiper>
                <p>
                <p class="description">{{active.name}}</p>
                </p>
                <div class="price">
                    <span class="oldprice">￥{{active.member_price}}</span>
                    <span class="newprice">已省:￥{{active.saved_price}}</span>
                </div>
                <div class="price">
                    <span class="oldprice oldprice1">原价：￥{{active.original_price}}</span>
                    <img src="../assets/images/hy@2x.png"class="anniu" @click="willmember">
                </div>
                <div class="price price1">
                    <span class="oldprice oldprice1">已选：</span>
                    <span class="newprice newprice1">{{choose1}}</span>
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
                <div class="imgsbox" v-html="active.describe">

                </div>
            </section>
            <toast v-model="s"  type="text" :time="800" is-show-mask text="您还不是会员" position="bottom"></toast >
            <toast v-model="sx"  type="text" :time="800" is-show-mask text="没有该活动" position="bottom"></toast >
            <toast v-model="sc"  type="text" :time="800" is-show-mask text="参加活动失败，请稍后重试" position="bottom"></toast >
            <toast v-model="sb"  type="text" :time="800" is-show-mask text="没货了，下次再来吧" position="bottom"></toast >
            <toast v-model="sd"  type="text" :time="800" is-show-mask text="请选属性" position="bottom"></toast >
            <toast v-model="sy"  type="text" :time="800" is-show-mask text="请先登录" position="bottom"></toast >
        </main>
        <div class="choosebox" v-show="showchoose" @touchmove.prevent @click="choosebox">
        </div>
        <div class="fanshi" v-show="showchoose" @touchmove.prevent >
            <div class="ziti ziti2 noto" >提示</div>
            <div class="ziti" >该活动为会员才能参加</div>

            <div class="ziti ziti1 ziti3" @click="canto">算了</div>
            <div class="ziti ziti1 okto"  @click="willmember">办理会员</div>
        </div>
        <!--底部-->
        <footer>
            <div class="footbox clearfix footbox1" v-show="sa" >
                    <button class="lijishop1"  @click="now"><span>已参加</span></button>
            </div>
            <div class="footbox clearfix">
                <button class="lijishop" @click="goodshow" v-show="jj">立即参加</button>
            </div>
            <div class="zhezhao" v-show="showbox" @touchmove.prevent @click="zhezhao">
            </div>
            <div class="goods clearfix" v-show="showbox" @touchmove.prevent>
                <div class="ginfo">
                    <div class="goodsxtu">
                        <img :src="style_img" alt="">
                    </div>
                    <span class="sum">共计: <span class="prices">￥{{moneynum}}</span></span>
                    <span class="numbers">库存{{style_stock}}件</span>
                    <div class="close" @click="close"></div>
                    <span class="style">类型:</span>
                    <div class="group" v-for="(item,index) in active.spec" :key="index">

                        <div class="stylebox">
                            <div class="style1"  @click="check(item)">{{item.goods_spec_name}}</div>
                        </div>
                    </div>
                    <div class="choose">
                        <span class="num">数量:</span>
                        <img src="../assets/images/jh@2x.png" class="jh" @click="reduce">
                        <span class="numadd">{{goodsnum}}</span>
                        <img src="../assets/images/jhh@2x.png" class="jh jhh" @click="add">
                    </div>
                </div>

                <div class="ok" clearfix @click="join">选好了</div>
            </div>


        </footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Swiper,SwiperItem} from 'vux'
    import { Toast } from 'vux'
    export default {
        name: "activegood",
        data () {
            return {
                showchoose:false,
                showbox:false,
                goodsnum:1,
                active:[],
                names:"",
                save_price:"",
                style_img:"",
                style_price:"",
                style_stock:"",
                choose1:"",
                choose:[],
                s:false,
                spec_id:"",
                sx:false,
                sa:false,
                sb:false,
                sc:false,
                sd:false,
                sy:false,
                is_yellow_card:"",
                user_info:"",
                jj:true,
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                activity_id:state=>state.activity_id,
                token:state=>state.token,
                university_id: state => state.university_id,
            }),
            // 总金额
            moneynum:function(){
                return this.style_price * this.goodsnum
            }
        },
        created:function(){
            this.$axios.get('/user/get_info/'+this.user_id).then(res=>{
                this.user_info=res.data.data.user_info;
                this.is_yellow_card=this.user_info.is_yellow_card;
            })
            this.$axios.get('/find/activity_involvement',{params:{user_id:this.user_id,activity_id:this.activity_id,goods_spec_id:this.spec_id,goods_num:this.goodsnum}}).then(res=>{
                console.log(res);
                if(res.data.err_code==1003){
                    this.sa=true;
                    this.jj=false;


                }
            })
        },

        mounted:function () {
            this.$axios.get('/find/activity_detail',{params:{user_id:this.user_id,activity_id:this.activity_id}}).then(res=>{
                console.log(res.data.data);
                this.active=res.data.data;
                this.style_img=this.active.img_path;
            });

        },

        methods:{
            now(){
                this.$router.push({name:'activesuccess',query:{university_id:this.university_id}})
            },
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
            canto(){
                this.showchoose=false;
            },

            willmember(){
                this.$router.push({name:'hxmember',query:{user_id:this.user_id,token:this.token}})
            },
            choosebox(){
                this.showchoose=false;
            },
            check(item){
                console.log(item)
                this.choose1=item.goods_spec_name;
                this.style_img=item.goods_spec_img_path;
                this.style_stock=item.goods_spec_stock;
                this.style_price=item.goods_spec_price;
                this.spec_id=item.goods_spec_id
            },
            zhezhao(){
                this.showbox=false;
            },
            join(){
                let id=this.user_id;
                if(id==0){
                    this.sy=true;
                    jsObj.GotoLogin();
                }else{
                    if(this.is_yellow_card=='0'){

                        this.showchoose=true;
                    }else  if(this.is_yellow_card=="1"){
                        console.log(this.choose1)
                        if(this.choose1==""){
                            this.sd=true;
                        }else{
                            this.$axios.get('/find/activity_involvement',{params:{user_id:this.user_id,activity_id:this.activity_id,goods_spec_id:this.spec_id,goods_num:this.goodsnum}}).then(res=>{
                                console.log(res);
                                if(res.data.err_code==0){
                                    this.$router.push({name:'activesuccess'})
                                }else if(res.data.err_code==1001){
                                    this.sx=true;
                                }else if(res.data.err_code==1002){
                                    this.sc=true;
                                }else if(res.data.err_code==1003){

                                }else if(res.data.err_code==1005){
                                    this.sb=true;
                                }
                            })
                        }

                    }

                }

            }


        },
        components: {
            Swiper,
            SwiperItem,
            Toast
        }
    }
</script>

<style scoped>
    .fanshi{
        width: 5.53rem;
        height: 3.43rem;
        background: #fff;
        position: absolute;
        bottom:0;
        left:0;
        top:0;
        right:0;
        margin:auto;
        z-index: 999;
        border-radius: 0.20rem;
    }
    .ziti2{
        color:#cccccc;
        font-size: 0.28rem;
        line-height: 0.30rem;
    }
    body{
        background: #f5f5f5;
    }
    .ziti{
        font-size: 0.32rem;
        text-align: center;
        color:#555555;
        width: 100%;
        height: 1.0rem;
        line-height: 1.0rem;
    }
    .ziti1:hover{
        color:#f9444d;
    }
    .ziti3{
        color:#cccccc;
    }
    .choosebox{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
        z-index: 44;
    }
    .ziti1{
        width: 50%;
        float:left;

    }
    .noto{
        color:#cccccc;
        font-size: 0.28rem;
    }
    .okto{
        color:#f9444d;
    }
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
        margin-bottom: 0.20rem;
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
    .yx li:nth-child(2n+1){
        float: right;
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


    .footbox{
        width: 100%;
        height: 0.96rem;
        position: fixed;
        left:0;
        bottom:0rem;
        border-top:0.01rem solid #e0e0e0;

    }
    main{
        margin-bottom: 0.3rem;
        width: 100%;
        float:left;
    }
    .ser{
        width: 0.48rem;
        height: 100%;
        margin-left: 0.53rem;
        float: left;

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
    .lijishop1 {
        width: 100%;
        height: 100%;
        display: block;
        float:left;
        border: none;
        outline: none;
        font-size:0.36rem;
        text-align: center;
        background: #a2a2a2;
        color:#fff;

    }
    .footbox1{
        background: #a2a2a2;
        color:#fff;
        z-index:99;
    }
</style>