<template>
    <div id="main">

        <!--内容-->
        <main>
            <div class="order-box1">
                <span>已支付</span>
            </div>
            <div class="order-box1">
                <span>订单号：{{order.order_num}}</span>
                <img src="image/fz@2x.png" class="copy">
            </div>
            <div class="order-info clearfix">
                <span class="order-man">收货人：{{info.name}}</span>
                <span class="order-phone">{{info.phone}}</span>
                <span class="order-address">{{info.address}}（可选择自提服务）</span>
            </div>
            <div class="order-mitem clearfix" v-for="item in order.good">
                <div class="order-tu">
                    <img :src="item.img_path" alt="">
                </div>
                <span class="order-title1">{{item.goods_name}}</span>
                <span class="order-weight"></span>
                <span class="order-price">￥{{item.price}}</span>
                <span class="order-num">x{{item.quantity}}</span>
            </div>
            <div class="order-active order-active1">

                <img src="../assets/images/售后服务.png" alt="" class="cancel pay cancel1">
            </div>
            <div class="paybox">
                <div class="order-box1 pay-title1">
                    <span>支付方式</span>
                    <span class="pay-title">{{order_pay}}</span>
                </div>
                <div class="order-box1 pay-title1">
                    <span >配送</span>
                    <span class="pay-title">{{distribution}}</span>
                </div>
                <div class="order-box1 pay-title1">
                    <span >发票抬头</span>
                    <span class="pay-title">{{order.invoices_title}}</span>
                </div>
                <div class="order-box1 pay-title1">
                    <span >已支付</span>
                    <span class="pay-title">{{order.total_money}}</span>
                </div>
                <div class="order-box1 pay-title1">
                    <span >商品总额</span>
                    <span class="pay-title">￥{{order.total_money}}</span>
                </div>
                <div class="order-box1 pay-title1">
                    <span >运费</span>
                    <span class="pay-title">+￥0.00</span>
                </div>
                <div class="order-box1 pay-title1 order-box2">
                    <span >实付金额</span>
                    <span class="pay-title">￥{{order.total_money}}</span>
                </div>
                <div class="order-active">
                    <img src="../assets/images/删除订单.png" alt="" class="cancel">
                    <img src="../assets/images/再次购买.png" alt="" class="cancel pay">
                </div>
            </div>
            <div class="imgbox">
                <img src="../assets/images/banner@2x.png">
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "ordershow1",
        data(){
            return{
                order:[],
                oid:"",
                order_pay:"",
                distribution:"",
                info:[],

            }
        },
        mounted:function () {
            this.oid=this.$route.query.oid;
            this.$axios.get('/user/order_detail?order_id='+this.oid).then(res=>{
                this.order=res.data.data;
                console.log(res)
                this.info=this.order.address;
                this.order_pay=this.order.pay_type;
                if(this.order_pay=="1"){
                    this.order_pay="在线支付"
                }else if(this.order_pay=="2"){
                    this.order_pay="线下支付"
                }
                this.distribution=this.order.distribution_mode;
                if(this.distribution=="1"){
                    this.distribution="送货上门"
                }else if(this.distribution=="2"){
                    this.distribution="自提"
                }
            })
        },
        methods:{
            copy(){
                let num=document.querySelector(".orderno");
                console.log(num.innerText)
            }
        }
    }
</script>

<style scoped>
    body{
        background: #f5f5f5;
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
    .order-box1{
        width: 100%;
        height: 0.83rem;
        background: #fff;
        font-size:0.26rem;
        color:#555555;
        line-height: 0.83rem;
        padding-left:0.40rem;
        border-bottom:1px solid #e0e0e0;
        position: relative;
    }
    .copy{
        width: 0.68rem;
        height: 0.40rem;
        position: absolute;
        top:0.23rem;
        right:0.49rem;
    }
    .order-info{
        width: 100%;
        height: 1.34rem;
        background: #fff;
        margin-bottom: 0.17rem;
    }
    .order-man{
        font-size:0.26rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.22rem 0 0.26rem 0.40rem;
    }
    .order-phone{
        font-size:0.26rem;
        color:#555555;
        display: block;
        float:right;
        margin:0.22rem 0.49rem 0.26rem 0;
    }
    .order-address{
        font-size:0.26rem;
        color:#555555;
        display: block;
        float:left;
        margin:0rem 0 0.26rem 0.40rem;
    }
    .order-mitem{
        width: 100%;
        height: 1.98rem;
        overflow: hidden;
        background: #fff;
        border-bottom: 0.01rem solid #e0e0e0;

    }
    .order-tu{
        width: 1.60rem;
        height: 1.56rem;
        margin:0.21rem 0 0 0.40rem;
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
    .paybox{
        width: 100%;
        height: auto;
        background: #fff;
        margin-bottom: 0.16rem;
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
        height: 0.83rem;
        position: relative;
    }
    .time{
        font-size:0.26rem;
        color:#f9444d;
        display: block;
        line-height: 0.69rem;
        padding-left:0.46rem;
    }
    .cancel{
        width: 1.39rem;
        height: 0.46rem;
        position:absolute;
        top:0.11rem;
        right:2.17rem;

    }
    .pay{
        right:0.49rem;
    }
    .imgbox{
        width: 100%;
        height: 2.41rem;

    }
    .imgbox img{
        width: 100%;
        height: 2.41rem;
    }
    .order-box2{
        border:none;
    }
    .order-active1{
        background: #fff;
        height: 0.83rem;
        margin-bottom:0.17rem;

    }
    .cancel1{
        top:0.18rem;
    }
</style>