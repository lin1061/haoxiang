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
                <div>
                    <span class="good-form">[{{types}}]</span>
                    <p class="description">{{goods.name}}</p>
                </div>
                <div class="price">
                    <span class="oldprice">￥{{goods.member_price}}</span>
                    <span class="newprice">已省:￥{{savemoney}}</span>
                    <span class="number">销量：{{goods.sales_volume}}件</span>
                </div>
                <div class="price">
                    <span class="oldprice oldprice1">原价：￥{{goods.market_price}}</span>
                    <img src="../assets/images/hy@2x.png"class="anniu" @click="willmember">
                </div>
                <div class="price price1">
                    <span class="oldprice oldprice1">已选：</span>
                    <span class="newprice newprice1">{{checkgoods}}</span>
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
                <div class="youxuan">为你推荐</div>
                <router-link style="text-decoration: none" :to="{path:'/goodshow',query:{goods_id:item.goods_id,user_id:user_id,token:token,university_id:university_id}}" class="yx-item" v-for="item in goods.about_recommend" :key="item.goods_id" @click.native="flushCom">
                    <div class="box">
                        <img :src="item.goods_img" class="goodstu">
                    </div>
                    <div class="yx-ginfo clearfix">
                        <span class="yx-gname" style="text-decoration: none;">{{item.goods_name}}</span>
                        <span class="yx-newprice">￥{{item.shop_price}}</span>
                        <span class="yx-shen">已省:10元</span>
                        <span class="yx-oldprice">原价:￥{{item.market_price}}元</span>
                    </div>
                </router-link>

            </ul>
        </main>
        <toast v-model="s"  type="text" :time="800" is-show-mask text="收藏成功" position="bottom"></toast >
        <toast v-model="sq"  type="text" :time="800" is-show-mask text="取消收藏" position="bottom"></toast >
        <toast v-model="sh"  type="text" :time="800" is-show-mask text="添加成功" position="bottom"></toast >
        <toast v-model="sx"  type="text" :time="800" is-show-mask text="请选属性" position="bottom"></toast >
        <!--底部-->
        <footer>
            <div class="footbox clearfix">
                <div class="ser" @click="kefu">
                    <img src="../assets/images/ej@2x.png" class="server">
                    <span class="kefu">客服</span>
                </div>
                <div class="ser like" >
                    <div  class="server liketu" :class="{'check':iscollect}"  @click="like(goods.id)"></div>
                    <span class="kefu">收藏</span>
                </div>
                <button class="lijishop" @click="goodshow">加入购物车</button>
                <button class="lijishop lijishop1" @click="goodshow1">立即购买</button>
            </div>

            <div class="zhezhao" v-show="showbox" @touchmove.prevent @click="zhezhao">
            </div>
            <div class="goods clearfix" v-show="showbox">
                <div class="ginfo">
                    <div class="goodsxtu">
                        <img :src="xzinfo.spec_img_path" alt="">
                    </div>
                    <span class="sum">共计:
                        <!-- 会员 -->
                            <span class="prices" v-if="ishx == 1">￥{{xzinfo.spec_member_price}}</span>
                        <!-- 非会员价 -->
                            <span class="prices" v-if="ishx == 0">￥{{xzinfo.spec_original_price}}</span>
                        </span>
                    <span class="numbers">库存{{xzinfo.stock}}件</span>
                    <div class="close" @click="close"></div>
                    <div class="group" v-for="(item,index) in goods.spec_group" :key="index">
                        <span class="style">{{item.spec_name}}:</span>
                        <div class="stylebox">
                            <div class="style1" :class="{checked:arr.indexOf(value)>=0}" v-for="(value,cellIndex) in item.spec_value" @click="check(value,cellIndex,index)">{{value}}</div>
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
            <div class="zhezhao" v-show="showbox1" @touchmove.prevent  @click="zhezhao">
            </div>
            <div class="goods clearfix" v-show="showbox1" >
                <div class="ginfo">
                    <div class="goodsxtu">
                        <img :src="xzinfo.spec_img_path" alt="">
                    </div>
                    <span class="sum">共计:
                        <!-- 会员 -->
                            <span class="prices" v-if="ishx == 1">￥{{xzinfo.spec_member_price}}</span>
                        <!-- 非会员价 -->
                            <span class="prices" v-if="ishx == 0">￥{{xzinfo.spec_original_price}}</span>
                        </span>
                    <span class="numbers">库存{{xzinfo.stock}}件</span>
                    <div class="close" @click="close1"></div>
                    <div class="group" v-for="(item,index) in goods.spec_group" :key="index">
                        <span class="style">{{item.spec_name}}:</span>
                        <div class="stylebox">
                            <div class="style1" :class="{checked:arr.indexOf(value)>=0}" v-for="(value,cellIndex) in item.spec_value" @click="check(value,cellIndex,index)">{{value}}</div>
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

        </footer>
    </div>
</template>

<script>
    import { Swiper,SwiperItem,} from 'vux'
    import { mapState } from 'vuex'
    import { Toast } from 'vux'
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
                save_price:0,
                style_img:"",
                style_price:0,
                style_stock:"",
                choose_spec:[],
                spec_id:"",
                img:"",
                choose:"",
                types:"",
                s:false,
                sh:false,
                sx:false,
                goodid:[],
                sq:false,
                arr:[],//规格数组
                xzinfo:{},//选中数据
                ishx:0,//默认不是会员
                iscollect:false,//默认不收藏
                checkgoods:""//默认选中商品
            }
        },
        computed: {
            ...mapState({
              goods_id: state => state.goods_id,
              user_id: state => state.user_id,
              device:state =>state.device,
              token:state =>state.token,
              university_id:state=>state.university_id

            }),
            // 总金额
            moneynum:function(){
                return this.goods.member_price * this.goodsnum
            },
            savemoney(){
                return parseInt(this.goods.market_price-this.goods.member_price).toFixed(2);
            }
        },
        created(){
            
            // 8月24添加
            this.getuserinfo();
            this.$axios.get('/goods/detail',{params:{goods_id:this.goods_id,user_id:this.user_id,token:this.token}}).then(res=>{
                    console.log(res.data.data);
                    this.goods=res.data.data;
                    this.types=this.goods.types;
                    this.style_img=this.goods.goods_img;
                    this.iscollect = res.data.data.is_collection//判断该商品是否已收藏
                    if(this.types=='1'){
                        this.types="门店自营"
                    }else if(this.types=='2'){
                        this.types="总仓包邮"
                    }
                    // console.log(this.goods.spec_group)
                    if(this.goods.spec_reg.length>0){
                        // 有规格参数
                        this.arr = this.goods.spec_group.map((v,i)=>{
                            return v.spec_value[0]
                        })
                        // 默认数据
                        if(this.arr.length>0){
                            let G = this.arr.join('-');
                            this.checkgoods = G || "";
                            let data = {}
                            this.goods.spec_reg.forEach(function(v,i){
                                if(v.reg_spec_str == G){
                                    data = v
                                }
                            })
                            this.xzinfo = data;
                        }
                    }else{
                        // 没有规格参数
                        this.xzinfo = {spec_id:'1',spec_original_price:this.goods.market_price,spec_member_price:this.goods.member_price,spec_img_path:this.goods.goods_img}
                    }
                    
                })
            // 8月24添加结束
         },

        components: {
            Swiper,
            SwiperItem,
            Toast
        },
        methods:{
            // 用户信息判断是否为会员
            getuserinfo(){
                this.$axios.get('/user/get_info/'+this.user_id).then(res=>{
                    if(res.data.err_code == 0){
                        this.ishx = res.data.data.user_info.is_yellow_card //0非会员1会员
                    }
                })
            },
            goodshow(){
                this.showbox=!this.showbox;

            },
            onegoods(id){

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
            zhezhao(){
                this.showbox=false;
                this.showbox1=false;
            },
            reduce(){
                this.goodsnum--;
                if(this.goodsnum<=1){
                    this.goodsnum=1;
                }
            },
            like(id){
                if(!this.iscollect){
                    // 没有收藏
                    this.$axios.post('/user/collection_store',
                        qs.stringify({
                            user_id:this.user_id,
                            goods_id:this.goods_id,
                            token:this.token,
                            university_id:this.university_id

                        })).then(res=>{
                        if(res.data.err_code == 0){
                            //成功收藏
                            this.s = true;
                            this.iscollect = true
                        }
                    })
                }else{
                    // 已收藏删除收藏
                    this.$axios.post('/user/collection_delete',
                        qs.stringify({
                            goods_id:[{id:this.goods_id}],
                            university_id:this.university_id

                        })).then(res=>{
                        if(res.data.err_code == 0){
                            this.sq = true
                            this.iscollect = false
                        }
                    })
                }
                
            },
            flushCom:function(){
                this.$router.go(0);
            },
            kefu(){
                if(this.device){
                    wx.miniProgram.navigateTo({url: '/pages/call/main'})
                }else{
                    jsObj.GotoService();
                }

            },
            close1(){
                this.showbox1=!this.showbox1
            },

            willmember(){
                this.$router.push({name:'hxmember',query:{user_id:this.user_id,token:this.token}})
            },
            // 8-24添加
            check(value,cellIndex,index){
                this.arr.splice(index,1,value)
                let G = this.arr.join('-');
                this.checkgoods = G || "";
                let data = {}
                this.goods.spec_reg.forEach(function(v,i){
                    if(v.reg_spec_str == G){
                        data = v
                    }
                })
                this.xzinfo = data;
            // 8-24添加结束

                // this.names=cellIndex;
                // // console.log(this.names)
                // this.choose_spec[index] = value;
                // // console.log(this.goods.spec_reg);
                // var reg_str = '';
                // // console.log(this.choose_spec.length)
                // for(var i=0;i<this.choose_spec.length;i++){
                //     reg_str += i==(this.choose_spec.length-1)?this.choose_spec[i]:this.choose_spec[i]+'-';
                //     this.choose=(this.choose_spec.length-1)?this.choose_spec[i]:this.choose_spec[i]+',';
                // }

                // for (var i=0;i<this.goods.spec_reg.length;i++){
                //     if(this.goods.spec_reg[i].reg_spec_str == reg_str){
                //         this.style_img=this.goods.spec_reg[i].spec_img_path
                //         this.style_stock=this.goods.spec_reg[i].stock
                //         this.spec_id=this.goods.spec_reg[i].spec_id
                //         console.log(this.spec_id)
                //     }

                // }

            },
            gocart(){
                console.log(this.types)
                if(this.types=="门店自营"){
                    this.$axios.post('/user/shop_card',
                        qs.stringify({
                            goods_id:this.goods_id,
                            num:this.goodsnum,
                            user_id:this.user_id,
                            spec_id:this.xzinfo.spec_id,
                            university_id:this.university_id
                        })).then(res=>{
                        if(res.data.err_code == 0){
                            //成功加入购物车
                            this.sh = true;
                            this.showbox = false
                        }
                        // console.log(res)
                    })
                    localStorage.good=JSON.stringify(this.goods);
                }else if(this.types=="总仓包邮"){
                    
                        this.$axios.post('/user/shop_card',
                            qs.stringify({
                                goods_id:this.goods_id,
                                num:this.goodsnum,
                                user_id:this.user_id,
                                spec_id:this.xzinfo.spec_id,
                                university_id:this.university_id
                            })).then(res=>{
                            if(res.data.err_code == 0){
                                //成功加入购物车
                                this.showbox = false
                                this.sh = true;
                            }
                            // console.log(res)
                        })
                        localStorage.good=JSON.stringify(this.goods);

                    
                }




            },
            gocart1(){
                if(this.user_id==""){
                    jsObj.GotoLogin()
                }else{
                    if(this.types=="门店自营"){
                        localStorage.good=JSON.stringify(this.goods);
                        this.$router.push({name:'confirmorder',query:{goods_id:this.goods_id,num:this.goodsnum,user_id:this.user_id,token:this.token,university_id:this.university_id,spec_id:this.xzinfo.spec_id}})
                    }else if(this.types=="总仓包邮"){


                            localStorage.good=JSON.stringify(this.goods);
                            this.$router.push({name:'confirmorder',query:{goods_id:this.goods_id,num:this.goodsnum,user_id:this.user_id,token:this.token,university_id:this.university_id,spec_id:this.xzinfo.spec_id}})
                        
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
        max-height: 6.9rem;
        overflow-y: auto;
        float: left;
        position: absolute;
        bottom: 1.02rem;
        left: 0;
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
        line-height: 0.60rem;
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
        border-bottom: 0.02rem solid #e5e5e5;

    }
    .yx .yx-item:nth-child(2n+1){
        float: left;
        border-left:0.02rem solid #e5e5e5;
    }
    .box{
        width: 100%;
        height: 3.07rem;
        border-bottom:0.02rem solid #e5e5e5;
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
    .style1.checked{
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
    .weui-toast{
        background: rgba(17, 17, 17, 0.4)!important;
        buttom: ;
    }
</style>