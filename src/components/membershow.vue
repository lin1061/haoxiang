<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">好象会员</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="cardshow">
                <p>{{tit}}</p>
                <span class="carshow-title" v-html="desc"></span>
                <span class="carshow-title carshow-title1">{{days}}天最高可买{{maxmoney}}元</span>
            </div>
            <span class="hy-title ">会员特权</span>
            <div class="tequan clearfix">
                <div class="tequan-item">
                    <img src="../assets/images/gift@2x.png" class="tetu">
                    <span class="tetitle">会员活动</span>
                </div>
                <div class="tequan-item">
                    <img src="../assets/images/money@2x.png" class="tetu tetu1">
                    <span class="tetitle tetitle1">会员折扣</span>
                </div>
                <div class="tequan-item">
                    <img src="../assets/images/mmm@2x.png" class="tetu tetu2">
                    <span class="tetitle tetitle1">直营商品</span>
                </div>
            </div>
            <span class="hy-title">持卡人信息</span>
            <div class="tequan tequan1">
                <div class="name clearfix">
                    <span class="hy-name">姓名</span>
                    <input type="text" class="namekuan" placeholder="请填写真实姓名" v-model="name">
                </div>
                <div class="name clearfix">
                    <span class="hy-name phone">电话</span>
                    <input type="text" class="namekuan" placeholder="请确保手机号无误" v-model="phone">
                </div>
                <div class="name school clearfix" @click="adr">
                    <span class="hy-name">学校</span>
                    <div  class="namekuan">{{universityname}}</div>
                    <img src="../assets/images/hyd@2x.png" class="hyaddr">
                </div>
                <div class="gou" :class="{checked:protocol}" @click="isprotocol"></div>
                <span class="tong">我已阅读并同意<router-link to="/membership">[会员协议]</router-link></span>
            </div>
        </main>
        <!--底部-->
        <footer>
            <div class="total">
                <button class="open" @click="ok">我要开卡</button>
                <span class="all2">￥{{price}}</span>
                <span class="all">合计:</span>
            </div>
        </footer>
        <toast v-model="ispost"  type="text" :time="800" is-show-mask :text="text" position="bottom"></toast >
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import qs from 'qs'
    export default {
        name: "membershow",
        data(){
            return{
                name:"",
                phone:"",
                school:"",
                cartid:"",
                user_id:"",
                university_id:"",
                price:"",
                token:"",
                order_id:[],
                ispost:false,//关闭提示
                protocol:false,//协议
                text:'请完善提交信息',
                universityname:"",//高校名称
                days:"",//天数
                desc:"",//描述
                tit:"",//会员卡名称
                istype:0,//默认非会员
                maxmoney:0
            }
        },
        computed: {
            ...mapState({
                device:state => state.device,
                university_name:state => state.university_name,
            }),

        },
        created(){
            this.cartid=this.$route.query.cartid;
            this.user_id=this.$route.query.user_id;
            this.university_id=this.$route.query.university_id;
            this.price=this.$route.query.money;
            this.maxmoney=this.$route.query.maxmoney
            // console.log(this.price)
            this.token=this.$route.query.token


            this.days=this.$route.query.days;
            this.desc=this.$route.query.desc;
            this.tit=this.$route.query.tit;
            this.phone = this.$route.query.tel
            this.istype = this.$route.query.istype

            this.universityname = this.university_name
            // 获取会员的信息
            if(this.istype == 1){
                this.$axios.get('/user/get_member_info',{params:{user_id:this.user_id}}).then(res=>{
                    if(res.data.err_code == 0){
                        this.name = res.data.data.user_name
                        this.phone = res.data.data.tel
                        this.university_id =  res.data.data.university_id
                        this.universityname = res.data.data.university_name
                    }
                })
            }
        },
        mounted:function(){
            
            // app调用
            let that = this
            window['Goaddress'] = function(address,id){
                that.universityname = address
                that.university_id = id
            }
        },
        methods:{
            ok(){
                if(this.name == ""){
                    this.ispost = true
                    this.text = "请填写姓名"
                    return false;
                }
                if(this.phone == "" || !/^1\d{10}$/.test(this.phone)){
                    this.ispost = true
                    this.text = "请填写有效手机号"
                    return false;
                }
                if(!this.protocol){
                    this.ispost = true
                    this.text = "请同意用户协议"
                    return false;
                }
                this.$axios.post('/user/card_store',{
                    card_id:this.cartid,
                    name:this.name,
                    tel:this.phone,
                    university_id:this.university_id                 
                }).then(res=>{
                    if(res.data.err_code == 0){
                        this.order_id = res.data.data
                        if(window.__wxjs_environment === 'miniprogram'){
                            // 小程序
                            wx.miniProgram.navigateTo({url: '/pages/collectmoney/main?id='+this.order_id+'&type=M'+'&pay='+this.price})
                        }else {
                            // app
                            
                            let price = this.price
                            let order_id = this.order_id
                            jsObj.GotoPay(order_id,'M',price)
                        }
                    }else {
                        this.ispost = true
                        this.text = res.data.msg
                    }
                })
            },
            adr:function () {
                if(this.istype == 0){
                    jsObj.GPS()
                }                
            },
            isprotocol(){
                this.protocol = !this.protocol
            }
        }
    }
</script>

<style scoped>
    body{
        background: #f5f5f5;
    }
    .alerterr{
        font-size: 0.24rem;
        color: #f9444d;
        width: 6.25rem;
        margin: 0 auto;
        position: relative;
        top: -10px;
    }
    main{
        width: 100%;
        /*margin-top: 0.88rem;*/
    }
    .cardshow{
        width: 100%;
        height: 2.45rem;
        background: url("../assets/images/card@2x.png") no-repeat center/cover;
        margin-top: 0.10rem;
        position: relative;
    }
    .cardshow >p{
        position: absolute;
        left: 2.2rem;
        top:0.34rem;
        color: #f6f6f6;
        font-size: 16px;
        font-weight: bold;
    }
    .carshow-title{
        font-size:0.32rem;
        color:#f8f8f8;
        line-height: 0.32rem;
        text-align: center;
        padding-top:0.98rem;
        display: block;
        text-shadow: 4px 4px 8px #eb585b;
    }
    .carshow-title1{
        padding-top: 0.14rem;
    }
    .hy-title{
        font-size:0.28rem;
        color:#323a45;
        line-height: 0.28rem;
        display: block;
        text-align: center;
        padding-top: 0.10rem;
        /*font-weight: bold;*/
    }
    .tequan{
        width: 100%;
        height: 1.88rem;
        margin-top: 0.26rem;
        float:left;
        margin-bottom: 0.23rem;
        position: relative;
        background: url("../assets/images/hybg@2x.png") no-repeat center/cover;
    }
    .tetu{
        width: 0.61rem;
        height: 0.59rem;
        display: block;
        margin:0.50rem 0 0.31rem 1.32rem;

    }
    .tetitle{
        font-size:0.22rem;
        color:#8a959e;
        display: block;
        line-height: 0.22rem;
        margin-left:1.16rem;
    }
    .tequan-item{
        float: left;
    }
    .tetu1{
        margin-left: 1.47rem;
    }
    .tetitle1{
        margin-left: 1.30rem;
    }
    .tetu2{
        width: 0.58rem;
        height: 0.65rem;
        margin-top: 0.43rem;
        margin-left: 1.52rem;
    }
    .tequan1{
        width: 100%;
        height: 3.71rem;
    }
    .name{
        width: 6.25rem;
        /*height: 0.96rem;*/
        border-bottom:0.01rem solid #e4e4e4;
        margin:0 auto;


    }
    .hy-name{
        font-size:0.28rem;
        line-height: 0.28rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.40rem 0.65rem 0 0rem;
    }
    .namekuan{
        width: 5.00rem;
        /*height: 0.90rem;*/
        display: block;
        border: none;
        outline: none;
        float:left;
        line-height: 0.9rem;
        font-size: 0.28rem;
        margin-top: 0.05rem;
        background-color: transparent;
    }
    .school{
        height: 0.98rem;
        position: relative;
    }
    .hyaddr{
        width: 0.26rem;
        height: 0.33rem;
        position: absolute;
        top:0.28rem;
        right:0;
    }
    .total{
        width: 100%;
        height: 0.98rem;
        position: fixed;
        left:0;
        bottom:0;
        background: #fff;
        border-top:0.01rem solid #d4d7da;
        line-height: 0.98rem;
    }
    .all{
        font-size: 0.36rem;
        color:#555555;
        display: block;
        float:right;
    }
    .all2{
        font-size:0.36rem;
        color:#f9444d;
        display: block;
        float:right;
    }
    .open{
        width: 2.76rem;
        height: 100%;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        font-size:0.36rem;
        text-align: center;
        color:#fff;
        display: block;
        border: none;
        outline: none;
        float: right;
        margin-left:0.27rem;
    }
    .gou{
        width: 0.30rem;
        height: 0.30rem;
        display: block;
        float:left;
        margin:0.22rem 0.14rem 0.24rem 0.65rem;
        background: url("../assets/images/x_1@2x.png") no-repeat;
        background-size: 0.30rem  0.30rem;
    }
    .tong{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:left;
        margin-top: 0.20rem;
    }
    .tong a{
        color:#f9444d;
    }
    main{
        width: 100%;
        height: auto;
        float:left;
        margin-bottom: 0.85rem;
    }
    .gou.checked{
        background: url("../assets/images/x_2@2x.png") no-repeat;
        background-size: 0.30rem  0.30rem;
    }

    .vux-toast{
        font-size: 20px;
    }

</style>