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
                    <span class="name">{{address}}</span>
                    <img src="../assets/images/箭头.png" class="go" @click="adr">
                    <span class="name name1">自提地址:{{school.address}}</span>
                    <img src="../assets/images/导航.png" class="go go1">
                </div>
            </div>
            <div class="ginfo clearfix">
                <div v-show="ordergood.store.length>0">
                    <div class="goods">
                        <div class="gtop">
                            <span class="gname">门店自营</span>
                        </div>
                        <div class="order-mitem" v-for="item in ordergood.store" :key="item.goods_id">
                            <div class="order-tu">
                                <img :src="item.goods_img" alt="">
                            </div>
                            <span class="order-title1">{{item.goods_name}}</span>
                            <span class="order-weight">{{item.spec_group}}</span>
                            <span class="order-price">￥{{item.goods_price}}</span>
                            <span class="order-num">x{{item.goods_num}}</span>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="order-box1 pay-title1">
                            <span>支付方式</span>
                            <span class="pay-title">{{pay}}</span>
                            <!--<img src="../assets/images/箭头2.png" class="goto">-->
                        </div>
                        <div class="order-box1 pay-title1">
                            <span >配送</span>
                            <span class="pay-title">{{fanshi}}</span>
                            <img src="../assets/images/箭头2.png" class="goto" @click="gochoose">
                        </div>
                        <div class="order-box1 pay-title1 ">
                            <span >商品总额</span>
                            <span class="pay-title money">￥{{moneynum}}</span>
                        </div>
                        <div class="order-box1 pay-title1">
                            <span >运费</span>
                            <span class="pay-title money">￥{{freight}}</span>
                        </div>

                    </div>
                </div>
                <div v-show="ordergood.warehouse.length>0">
                    <div class="goods">
                        <div class="gtop">
                            <span class="gname">总仓包邮</span>
                        </div>
                        <div class="order-mitem" v-for="item in ordergood.warehouse" :key="item.goods_id">
                            <div class="order-tu">
                                <img :src="item.goods_img" alt="">
                            </div>
                            <span class="order-title1">{{item.goods_name}}</span>
                            <span class="order-weight">{{item.spec_group}}</span>
                            <span class="order-price">￥{{item.goods_price}}</span>
                            <span class="order-num">x{{item.goods_num}}</span>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="order-box1 pay-title1">
                            <span>支付方式</span>
                            <span class="pay-title">{{pay}}</span>
                            <!--<img src="../assets/images/箭头2.png" class="goto">-->
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
                            <span class="pay-title money">￥{{ordergood.total_money.toFixed(2)}}</span>
                        </div>
                        <div class="order-box1 pay-title1">
                            <span >运费</span>
                            <span class="pay-title money">￥{{freight}}</span>
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
        <div class="choose2" v-show="showbox2">
            <div class="fanshi2">
                <div class="ziti2 ziti22 noto2" >提示</div>
                <div class="ziti2 ziti3" >您的额度不够，可选择返回购物车删除或立即续费增加额度</div>

                <div class="ziti2 ziti12 ziti32" @click="shopgo">返回购物车</div>
                <div class="ziti2 ziti12 okto2"  @click="gomember">立即续费</div>
            </div>

        </div>
        <toast v-model="tj"  type="text" :time="800" is-show-mask text="请添地址" position="bottom"></toast >
        <footer>
            <div class="hengfu"@click="gomember" v-show="s">成为好象会员，本单可减<span class="yuan">20</span>元。立即开通></div>
            <div class="box">
                <div class="lbox">
                    <span class="ltitle">实付金额: <span class="ltitle2">{{totalmoney}}</span></span>
                </div>
                <button class="payfor" @click="payfor">确认支付</button>
            </div>
        </footer>
    </div>
</template>

<script>
    import { Toast } from 'vux'
    import { mapState } from 'vuex'
    import qs from 'qs'
    export default {
        name: "confirmorder",
        data(){
            return{
                tj:false,
                goodorder:[],
                showchoose:false,
                showbox2:false,
                fanshi:"送货上门",
                num:[],
                types:"",
                pay:"在线支付",
                user_info:[],
                is_yellow_card:"",
                price:"",
                moneynum:"",
                freight:3,
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
                spec_id:[],
                address_id:'',
                moneymore:0.00,
                is_cart:0,
                s:false,
                goods_id:[],
                token:'',
                ordergood:[],
                typeof:'',
                specs_id:'',
                goods_ids:"",
                nums:"",
                allmoney:0

            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                device:state =>state.device
            }),
            totalmoney(){
                return this.moneymore=this.ordergood.total_money+this.freight
            }

        },
        created:function(){

            this.university_id=this.$route.query.university_id;
            this.spec_id.push(this.$route.query.spec_id);
            // console.log(this.spec_id)
            this.token=this.$route.query.token;
            this.goods_id.push(this.$route.query.goods_id);
            this.allmoney=this.ordergood.total_money
            //小程序跳转过来获取收获地址
            if(this.$route.query.address){
                this.address = this.$route.query.address
            }else {
                // 查询默认地址
                this.defaultaddress()
            }
        },
        mounted:function(){
            // app调用
            let that = this
            window['Showaddress'] = function(address,id,addressid,addressname){
                that.address = address
                that.university_id = id
                that.address_id=addressid;
                that.addressname=addressname;
            }
            this.nums=this.$route.query.num;
            this.specs_id=this.$route.query.spec_id
            this.goods_id==this.$route.query.goods_id;
            this.num.push(this.$route.query.num);
            // console.log(this.num)
            this.goodorder=JSON.parse(localStorage.good);
            this.typeof=this.goodorder.types;
            console.log(this.typeof)
            this.types=this.goodorder.types;

            this.$axios.get('/university_address',{params:{university_id:this.university_id}}).then(res=>{
                // console.log(res)
                this.school=res.data.data;
                console.log(this.school)
            })
            if(this.types=='1'){
                this.types="门店自营"

            }else if(this.types=='2'){
                this.types="总仓包邮"
            }
            if(this.typeof=='1'){
                this.$axios.post('/user/order_confirm',
                    qs.stringify({
                        goods_id:this.goods_id,
                        goods_num:this.num,
                        user_id:this.user_id,
                        goods_spec_id:[0],

                    })).then(res=>{
                    // console.log(res.data.err_code)
                    if(res.data.err_code==0){
                        this.ordergood=res.data.data;
                    }else if(res.data.err_code==1003){
                        this.ordergood=res.data.data;
                        this.showbox2=true;
                    }
                    // console.log(res)
                })
            }
            if(this.typeof=='2'){
                this.$axios.post('/user/order_confirm',
                    qs.stringify({
                        goods_id:this.goods_id,
                        goods_num:this.num,
                        user_id:this.user_id,
                        goods_spec_id:this.spec_id,

                    })).then(res=>{
                    // console.log(res.data.err_code)
                    if(res.data.err_code==0){
                        this.ordergood=res.data.data;
                    }else if(res.data.err_code==1003){
                        this.ordergood=res.data.data;
                        this.showbox2=true;
                    }
                    // console.log(res)
                })
            }

            this.$axios.get('/user/get_info/'+this.user_id).then(res=>{
                this.user_info=res.data.data.user_info;
                this.is_yellow_card=this.user_info.is_yellow_card;
                if(this.is_yellow_card=='0'){
                    this.price=this.goodorder.market_price;
                    this.moneynum=this.num*this.price
                    this.s=true;
                }else if(this.is_yellow_card=='1'){
                    this.price=this.goodorder.member_price;
                    this.moneynum=this.num*this.price;

                }
                // console.log(res.data.data.user_info)
            })
            this. defaultaddress();
        },
        components: {

            Toast
        },
        methods:{
            // 查询用户默认收货地址
            defaultaddress(){
                this.$axios.get('/user/addresses?user_id='+this.user_id).then((res)=>{
                    if(res.data.err_code == 0){
                        if(res.data.data.length<=0){
                            this.address = "请添加收货地址";
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
            shopgo(){
                this.$router.push({name:'shopcart',query:{user_id:this.user_id,token:this.token,university_id:this.university_id}})
            },
            gomember(){
                this.$router.push({name:'hxmember',query:{user_id:this.user_id,token:this.token}})
            },
            gochoose:function () {
                this.showchoose=!this.showchoose;

            },
            ziti:function () {
                let ti=document.querySelector(".ziti");
                this.fanshi="门店自提";
                this.freight=0.00;
                this.showchoose=!this.showchoose;
            },
            songhuo:function () {
                let song=document.querySelector(".ziti1");
                this.fanshi="送货上门";
                this.freight=3.00;
                this.showchoose=!this.showchoose;
            },
            qita(){
                this.$router.push({name:'addbills'})
            },
            payfor(){
                if( this.address = "请添加收货地址"){
                    this.tj=true;
                }
                let _data = this.goodorder;
                let _goods_type2 = {goods_type:0,goods_info:[],delivery_model:0,trans_fee:0,invoice_id:0};
                let _goods_type1 = {goods_type:0,goods_info:[],delivery_model:0,trans_fee:0,invoice_id:1};
                let _goods_info = {};
                let  _goods_list = [];
                if(_data.types=="2"){
                    _goods_type2.goods_type = 2;
                    // if(this.fanshi="")
                        _goods_info.id = _data.id;
                        _goods_info.number = this.nums;
                        _goods_info.model_id = this.specs_id;

                    _goods_type2.goods_info.push(_goods_info);
                    if(this.fanshi=='送货上门'){
                        _goods_type2.delivery_model = 1;
                        _goods_type2.trans_fee = 3;
                    }else{
                        _goods_type2.delivery_model = 2;
                        _goods_type2.trans_fee = 0;
                    }
                    _goods_list.push(_goods_type2);
                }
                if(_data.types=="1"){
                    _goods_info = {};
                    _goods_type1.goods_type = 1;

                        _goods_info.id = _data.id;
                        _goods_info.number = this.nums;
                        _goods_info.model_id = 0;

                    _goods_type1.goods_info.push(_goods_info);
                    if(this.fanshi=='送货上门'){
                        _goods_type2.delivery_model = 1;
                        _goods_type2.trans_fee = 3;
                    }else{
                        _goods_type2.delivery_model = 2;
                        _goods_type2.trans_fee = 0;
                    }
                    _goods_list.push(_goods_type1);
                }
                console.log(_goods_list);
                this.$axios.post("/user/order_create",
                    qs.stringify({
                        goods_list:_goods_list,
                        address_id:this.address_id,
                        university_id:this.university_id,
                        is_cart:this.is_cart,

                    })).then(res=>{
                    console.log(res)
                    if(res.data.err_code==0){
                        this.order_id=res.data.data;
                        if(this.device){
                            wx.miniProgram.navigateTo({url: '/pages/collectmoney/main?id='+this.order_id+'&pay='+this.moneymore})
                        }else{
                            console.log(this.moneymore)
                            jsObj.GotoPay(this.order_id,'G',this.moneymore)
                        }

                    }
                })
            }

        }
    }
</script>

<style scoped>
    .fanshi2{
        width: 5.63rem;
        height: 4.43rem;
        background: #fff;
        position: absolute;
        bottom:0;
        left:0;
        top:0;
        right:0;
        margin:auto;
        border-radius: 0.20rem;
    }
    .ziti22{
        color:#cccccc;
        font-size: 0.28rem;
        line-height: 0.30rem;
    }

    body{
        background: #f5f5f5;
    }
    .ziti2{
        font-size: 0.32rem;
        text-align: center;
        color:#555555;
        width: 100%;
        height: 1.0rem;
        display: block;
        line-height: 1.0rem;
    }
    .ziti3{
        height: 2.0rem;
    }
    .ziti12:hover{
        color:#f9444d;
    }
    .ziti32{
        color:#cccccc;
    }
    .choose2{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
        z-index: 44;
    }
    .ziti12{
        width: 50%;
        float:left;

    }
    .noto2{
        color:#cccccc;
        font-size: 0.28rem;
    }
    .okto2{
        color:#f9444d;
    }
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
        height: 1.62rem;
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
        top:1.30rem;
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
        font-size:0.26rem;
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
        float: left;
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
</style>