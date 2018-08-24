<template>
    <div id="main">
        <!--&lt;!&ndash;头部&ndash;&gt;-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">确认订单</span>-->
        <!--</header>-->
        <!--内容-->
        <main class="clearfix">
            <div class="top">
                <div class="tu">
                    <img src="../assets/images/定位.png" alt="">
                </div>
                <div class="adr">
                    <div @click="adr">
                        <span class="name">{{address}}</span>
                        <img src="../assets/images/箭头.png" class="go">
                    </div>
                    <div @click="daohang">
                        <span class="name name1">自提地址:{{school.address}}</span>
                        <img src="../assets/images/导航.png" class="go go1" >
                    </div>
                   
                </div>
            </div>
            <div class="ginfo clearfix">
                <div v-show="goodorder.store.length>0">
                    <div class="goods">
                        <div class="gtop">
                            <span class="gname">门店自营</span>
                        </div>
                        <div class="order-mitem" v-for="(item,index) in goodorder.store">
                            <div class="order-tu">
                                <img :src="item.goods.goods_img">
                            </div>
                            <span class="order-title1">{{item.goods.goods_name}}</span>
                            <span class="order-weight"></span>
                            <span class="order-price">￥{{price}}</span>
                            <span class="order-num">x{{item.num}}</span>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="order-box1 pay-title1">
                            <span>支付方式</span>
                            <span class="pay-title">在线支付</span>

                        </div>
                        <div class="order-box1 pay-title1">
                            <span >配送</span>
                            <span class="pay-title">{{fanshi}}</span>
                            <img src="../assets/images/箭头2.png" class="goto" @click="gochoose">
                        </div>
                        <!--<div class="order-box1 pay-title1 order-box2">-->
                            <!--<span >其他</span>-->
                            <!--<img src="../assets/images/箭头2.png" class="goto" @click="qita">-->
                        <!--</div>-->
                        <div class="order-box1 pay-title1 ">
                            <span >商品总额</span>
                            <span class="pay-title money">￥{{money1}}</span>
                        </div>
                        <div class="order-box1 pay-title1">
                            <span >运费</span>
                            <span class="pay-title money">￥{{yunfei}}</span>
                        </div>

                    </div>
                </div>
                <div v-show="goodorder.warehouse.length>0">
                    <div class="goods">
                        <div class="gtop">
                            <span class="gname">总仓包邮</span>
                        </div>
                        <div class="order-mitem"  v-for="item in goodorder.warehouse">
                            <div class="order-tu">
                                <img :src="item.goods.goods_img" alt="">
                            </div>
                            <span class="order-title1">{{item.goods.goods_name}}</span>
                            <span class="order-weight"></span>
                            <span class="order-price">￥{{price}}</span>
                            <span class="order-num">x{{item.num}}</span>
                        </div>
                    </div>
                    <div class="pay pay1">
                        <div class="order-box1 pay-title1">
                            <span>支付方式</span>
                            <span class="pay-title">在线支付</span>

                        </div>
                        <div class="order-box1 pay-title1">
                            <span >配送</span>
                            <span class="pay-title">{{fanshi}}</span>
                            <img src="../assets/images/箭头2.png" class="goto" @click="gochoose">
                        </div>
                        <div class="order-box1 pay-title1 order-box2">
                            <span >其他</span>
                            <img src="../assets/images/箭头2.png" class="goto" @click="qita">
                        </div>
                        <div class="order-box1 pay-title1 ">
                            <span >商品总额</span>
                            <span class="pay-title money">￥{{money}}</span>
                        </div>
                        <div class="order-box1 pay-title1">
                            <span >运费</span>
                            <span class="pay-title money">￥{{yunfei}}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div class="choose" v-show="showchoose">
                <div class="fanshi">
                    <div class="ziti" @click="ziti">门店自提</div>
                    <div class="ziti ziti1" @click="songhuo">送货上门</div>
                </div>

            </div>
        </main>

        <footer>
            <div class="hengfu"@click="gomember" v-show="showbox">成为好象会员，本单可减<span class="yuan">20</span>元。立即开通></div>
            <div class="box">
                <div class="lbox">
                    <span class="ltitle">实付金额: <span class="ltitle2">￥{{moneynum}}</span></span>
                </div>
                <button class="payfor" @click="paygo">确认支付</button>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    import qs from 'qs'
    export default {
        name: "confirmorder",
        data(){
            return{
                goodorder:[],
                showchoose:false,
                fanshi:"送货上门",
                num:1,
                uid:'',
                user_info:[],
                is_yellow_card:"",
                price:'',
                money:0,
                yunfei:3,
                address:"",
                goods_list:[],
                school:[],
                goods_type:"",
                delivery_model:"",
                showbox:false,
                university_id:'',
                order_type:'',
                order_id:[],
                money1:0,
                address_id:'',
                moneymore:0.00,
                is_cart:1

            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                device:state=>state.device

            }),

            moneynum:function () {
                return this.moneymore=this.money+this.yunfei+this.money1;
    }

        },
        created:function(){
            this.uid=this.$route.query.user_id;
            this.token=this.$route.query.token;
            this.university_id=this.$route.query.university_id;
            this.goodorder=JSON.parse(localStorage.order);
            // this.goodorder=localStorage.order;
            //小程序跳转过来获取收获地址
            if(this.$route.query.address){
                this.address = this.$route.query.address
            }else {
                // 查询默认地址
                this.defaultaddress()
            }


        },


        mounted:function(){


            console.log(this.goodorder)
            this.$axios.get('/university_address',{params:{university_id:this.university_id}}).then(res=>{
                // console.log(res)
                this.school=res.data.data;
                console.log(this.school)
            })

            this.$axios.get('/user/get_info/'+this.uid).then(res=>{
                this.user_info=res.data.data.user_info;
                this.is_yellow_card=this.user_info.is_yellow_card;
                // console.log(this.is_yellow_card)
                // console.log(this.goodorder.warehouse.length)
                if(this.is_yellow_card=='0'){
                    if(this.goodorder.store.length>0){
                        this.smoneytotal1()
                    }

                    if(this.goodorder.warehouse.length>0){
                        this.moneytotal1()
                    }
                }else if(this.is_yellow_card=='1'){
                    if(this.goodorder.store.length>0){
                        this.smoneytotal()
                    }
                    if(this.goodorder.warehouse.length>0){
                        this.moneytotal()
                        console.log(this.money)
                    }
                }
                // console.log(res.data.data.user_info)
            })


        },
        methods:{
            // 查询用户默认收货地址
            defaultaddress(){
                this.$axios.get('/user/addresses?user_id='+this.user_id).then((res)=>{
                    if(res.data.err_code == 0){
                        if(res.data.data.length<=0){
                            this.address = "请添加收货方式";
                        }else {
                            res.data.data.forEach((val,index)=>{
                                if(val.is_default == 1){
                                    // 有默认收货地址
                                    let str = val.university_address+val.address
                                    this.address = str
                                    this.address_id=val.address_id
                                    return false
                                }else {
                                    // 没有默认值返回第一个收货地址
                                    let str =   res.data.data[0].university_address+res.data.data[0].address
                                    this.address = str;
                                    this.address_id=val.address_id
                                    return false
                                }
                            });

                        }

                    }
                })
            },
            adr:function () {
                if(this.device){
                    wx.miniProgram.navigateTo({url: '/pages/address/main?address=1'})
                    this.address=this.route.query.address;
                }else{
                    jsObj.GotoAddress();
                }



            },
            daohang(){

                if(this.device){
                    wx.openLocation({
                        latitude: this.school.latitude,
                        longitude: this.school.longitude,
                        scale: 28,
                        name:this.school.addresss
                    });
                }else{
                    jsObj.GotoPoi(this.school.addresss,this.school.latitude,this.school.longitude)
                }
            },
            smoneytotal1(){
                let NUM=0;
                let price=0;
                this.goodorder.store.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        price= v.goods.market_price;

                    }

                })
                this.price=price
                this.goodorder.store.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        NUM += v.num*v.goods.market_price;
                    }

                })
                this.money1=NUM;
            },
            smoneytotal(){
                let NUM=0;
                let price=0
                this.goodorder.store.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        price= v.goods.shop_price;

                    }

                })
                this.price=price
                this.goodorder.store.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        NUM += v.num*v.goods.shop_price;
                    }

                })
                this.money1=NUM;
            },
            moneytotal1(){
                let NUM=0;
                let price=0
                this.goodorder.warehouse.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        price= v.goods.market_price;
                    }

                })

                this.goodorder.warehouse.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        NUM += v.num*v.goods.market_price;
                    }

                })
                this.money=NUM;
            },
            moneytotal(){
                let NUM=0;
                let price=0

                this.goodorder.warehouse.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        price= v.goods.shop_price;
                    }

                })
                this.price=price
                this.goodorder.warehouse.forEach(function(v){
                    if(v.goods.goods_id >= 0){
                        NUM += v.num*v.goods.shop_price;
                    }

                })
                this.money=NUM;

            },
            gomember(){
                this.$router.push({name:'hxmember'})
            },
            gochoose:function () {
                this.showchoose=!this.showchoose;

            },
            ziti:function () {
                let ti=document.querySelector(".ziti");
                this.fanshi="门店自提"
                this.showchoose=!this.showchoose;
                this.yunfei=0
            },
            songhuo:function () {
                let song=document.querySelector(".ziti1");
                this.fanshi="送货上门"
                this.showchoose=!this.showchoose;
                this.yunfei=3
            },
            qita(){
                this.$router.push({name:'addbills'})
            },
            paygo(){
                let _data = this.goodorder;
                let _goods_type2 = {goods_type:0,goods_info:[],delivery_model:0,trans_fee:0,invoice_id:0};
                let _goods_type1 = {goods_type:0,goods_info:[],delivery_model:0,trans_fee:0,invoice_id:1};
                let _goods_info = {};
                let  _goods_list = [];
                if(_data.warehouse.length>0){
                    _goods_type2.goods_type = 2;
                    // if(this.fanshi="")
                    for (let item in _data.warehouse) {
                        _goods_info.id = _data.warehouse[item].goods.goods_id;
                        _goods_info.number = _data.warehouse[item].num;
                        _goods_info.model_id = _data.warehouse[item].spec_id;
                    }
                    _goods_type2.goods_info.push(_goods_info);
                    _goods_list.push(_goods_type2);
                }
                if(_data.store.length>0){
                    _goods_info = {};
                    _goods_type1.goods_type = 1;
                    for (let item in _data.store) {
                        _goods_info.id = _data.store[item].goods.goods_id;
                        _goods_info.number = _data.store[item].num;
                        _goods_info.model_id = 0;
                    }
                    _goods_type1.goods_info.push(_goods_info);
                    _goods_list.push(_goods_type1);
                }
                console.log(_goods_list);

                this.$axios.post("/user/order_create",
                    qs.stringify({
                        goods_list:_goods_list,
                        address_id:this.address_id,
                        university_id:this.university_id,
                        is_cart:this.is_cart
                    })).then(res=>{
                        console.log(res)
                    if(res.data.err_code==0){
                            this.order_id=res.data.data;
                        if(this.device){
                            wx.miniProgram.navigateTo({url: '/pages/collectmoney/main?id='+this.order_id+'type=G'+'&pay='+this.moneymore})
                        }else{
                            jsObj.GotoPay(this.order_id,'G',this.moneymore)
                        }

                    }
                })
            }
        }
    }
    function Goaddress(address,id){
        document.getElementsByClassName('name').innerHTML+=adderss;
        this.address_id=id;
    }
</script>

<style scoped>

    .fanshi{
        width: 100%;
        height: 3.0rem;
        background: #fff;
        position: absolute;
        bottom:0;
        left:0;
    }
    body{
        background: #f5f5f5;
    }
    .ziti{
        font-size: 0.32rem;
        text-align: center;
        color:#555555;
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .ziti:hover{
        color:#f9444d;
    }
    .choose{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
        z-index: 44;
    }
    header{
        width: 100%;
        height: 0.88rem;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.32rem;
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
    .top{
        width: 100%;
        height: 1.8rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        overflow: hidden;
    }
    .tu {
        width: 0.30rem;
        height: 100%;
        margin: 0 0.24rem 0 0.46rem;
        overflow: hidden;
        float:left;
    }
    .tu img{
        width: 0.28rem;
        height: 0.34rem;
        display: block;
        margin-top: 0.54rem;
    }
    .adr{
        width: 5.95rem;
        height: 1.35rem;
        float:left;
        position: relative;
    }
    .name{
        font-size:0.34rem;
        color:#fff;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width: 95%;
        display: block;
        padding-top: 0.20rem;
    }
    .go{
        width: 0.18rem;
        height: 0.32rem;
        position: absolute;
        top:0.23rem;
        right:0.3rem;
    }
    .go1{
        width: 0.33rem;
        height: 0.33rem;
        top:0.90rem;
        right:0.18rem;
    }
    .ginfo{
        width: 7.05rem;
        height: auto;
        position: absolute;
        top:1.50rem;
        left:0.23rem;

    }
    .clearfix:after
    {
        content:".";
        display:block;
        height:0;
        visibility:hidden;
        clear:both;
    }
    .clearfix {
        zoom:1;
        display:block;
        clear:both;
    }
    main{
        width: 100%;
        height: auto;
        position: absolute;
        /*width: 100%;*/
        /*height: 100%;*/
        /*overflow: auto;*/

    }
    .goods{
        width: 7.05rem;
        height: auto;
        background: #fff;
        border-radius: 0.20rem;
        margin-bottom: 0.15rem;
    }
    .gtop{
        width: 6.74rem;
        height: 0.80rem;
        border-bottom: 0.01rem solid #d3d7da;
        margin:0 auto;
    }
    .gname{
        font-size:0.26rem;
        color:#2d2d2d;
        line-height: 0.80rem;
        display: block;
        padding-left: 0.17rem;
    }
    .order-mitem{
        width: 100%;
        height: 1.98rem;
        overflow: hidden;
        /*margin-bottom:0.17rem;*/
    }
    .order-tu{
        width: 1.60rem;
        height: 1.56rem;
        margin:0.21rem 0 0 0.20rem;
        float:left;

    }
    .order-tu img{
        width: 1.60rem;
        height: 1.56rem;
    }
    .order-title1{
        font-size:0.28rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.23rem 0 0 0.20rem;
        width: 4.86rem;
        line-height: 0.35rem;
    }
    .order-weight{
        font-size:0.24rem;
        line-height: 0.24rem;
        color:#a2a2a2;
        line-height: 0.24rem;
        display: block;
        float:left;
        width:5.0rem;
        margin:0.20rem 0 0 0.20rem;
    }

    .order-price{
        font-size:0.28rem;
        color:#f9444d;
        float:left;
        line-height: 0.28rem;
        display: block;
        margin:0.20rem 0 0.20rem 0.20rem;
        font-weight: bold;
    }
    .order-num{
        font-size:0.28rem;
        line-height: 0.28rem;
        color:#a2a2a2;
        float:right;
        margin:0.20rem 0.53rem 0.20rem 0;
    }
    .pay{
        width: 7.04rem;
        height: 4.03rem;
        background-size:100% 100% ;
        margin-top: 0.20rem;
        background-repeat: no-repeat;
        background-image: url("../assets/images/bg@2x.png");
        margin: 0 auto;
        margin-bottom: 0.15rem;
        /*float:left;*/
    }
    .pay-title{
        display: block;
        float:right;
        padding-right:0.63rem;
    }
    .pay-title1{
        padding-left:0.63rem;
    }
    /*.pay-title2{*/
    /*display: block;*/
    /*float:left;*/
    /*}*/
    .order-active{
        width: 100%;
        height: 0.69rem;
        position: relative;
    }
    .order-box1{
        width: 100%;
        height: 0.80rem;
        font-size:0.26rem;
        color:#555555;
        line-height: 0.80rem;
        padding-left:0.40rem;
        border-bottom:1px solid #e0e0e0;
        position: relative;
    }
    .order-box1:last-child{
        border:0;
    }
    .money{
        color:#f7494a;
    }
    footer{
        position: fixed;
        left:0;
        bottom:0;
        width: 100%;
        height: auto;
    }

    .hengfu{
        background: #b5b6b8;
        color:#fff;
        font-size:0.24rem;
        text-align: center;
        width: 100%;
        height: 0.40rem;
        line-height: 0.40rem;
    }
    .box{
        width: 100%;
        height: 0.97rem;
        border-top:0.01rem solid #d3d7da;
        line-height: 0.97rem;
        background: #fff;
    }
    .lbox{
        width: 4.75rem;
        height: 100%;
        float: left;
    }
    .ltitle{
        font-size:0.34rem;
        color:#282828;
        text-align: right;
        display: block;
        margin-right: 0.36rem;
    }
    .ltitle2{
        color:#fe555a;
    }
    .payfor{
        width: 2.75rem;
        height: 100%;
        outline: none;
        border:none;
        color:#fff;
        font-size:0.36rem;
        display: block;
        float: right;
        background: linear-gradient(to right, #ff1c8b , #f37404);

    }
    .yuan{
        color:#fe555a;
    }
    .goto{
        width: 0.19rem;
        height: 0.32rem;
        display: block;
        position: absolute;
        top:0.25rem;
        right:0.35rem;
    }
    .pay1{
        margin-bottom: 0.8rem;
    }
</style>