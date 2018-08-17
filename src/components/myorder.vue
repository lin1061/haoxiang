<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">我的订单</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="nav clearfix">
                <div class="nav-item" @click="all">
                    <span>全部</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan"></div>
                    <div class="lan lan1"></div>
                </div>
                <div class="nav-item" @click="pay">
                    <span>待支付</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan lan1"></div>
                </div>
                <div class="nav-item" @click="shouhuo">
                    <span>待收货</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian xian1">
                    <div class="lan lan1"></div>
                </div>
                <div class="nav-item" @click="done">
                    <span>已发货</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian xian1">
                    <div class="lan lan1"></div>
                </div>
                <div class="nav-item">
                    <span>已完成</span>
                </div>
            </div>
            <div class="order">
                <router-link :to="{name:'ordershow',query:{oid:item.id}}" class="order-item clearfix" v-for="item in list" :key="item.id">
                    <div class="order-top">
                        <span>{{types}}</span>
                    </div>
                    <div class="order-titem">
                        <span class="order-no">订单号：{{item.order_num}}</span>
                        <span class="order-state">{{status}}</span>
                    </div>
                    <div class="order-mitem" v-for="gitem in item.goods">
                        <div class="order-tu">
                            <img :src="gitem.img_path" alt="">
                        </div>
                        <span class="order-title1">{{gitem.goods_name}}</span>
                        <span class="order-weight">100g</span>
                        <span class="order-price">￥{{gitem.price}}</span>
                        <span class="order-num">x{{gitem.quantity}}</span>
                    </div>
                    <div class="order-bitem1 order-bitem2">
                        <span class="order-total">合计：￥{{item.total_money}}（运费：0）</span>
                    </div>
                    <div class="order-active">
                        <img src="../assets/images/wl@2x.png" alt="" class="cancel" @click="logistics">
                        <img src="../assets/images/sh@2x.png" alt="" class="cancel pay">
                    </div>
                    <!--<div class="order-active">-->
                        <!--<span class="time">自动取消: 14:29</span>-->
                        <!--<img src="../assets/images/qx@2x.png" alt="" class="cancel">-->
                        <!--<img src="../assets/images/zf@2x.png" alt="" class="cancel pay">-->
                    <!--</div>-->
                </router-link>
                </div>


        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "myorder",
        data(){
            return{
                list:[],
                types:"",
                status:""
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
            }),

        },
        mounted:function(){
            this.$axios.get('/user/order',{params:{user_id:this.user_id}}).then(res=>{
                this.list=res.data.data;
                for(let i=0;i<res.data.data.length;i++){
                    this.types=res.data.data[i].order_type
                    this.status=this.list[i].order_status
                    console.log(this.types)
                    if(this.types=='2'){
                        this.types="门店直营"

                    }else if(this.types=='3'){
                        this.types="总仓包邮"
                    }
                    else if(this.types=='4'){
                        this.types="兑换订单"
                    }
                    else if(this.types=='5'){
                        this.types="特价订单"
                    }
                    if(this.status=='10'){
                        this.status="待支付"

                    }else if(this.status=='20'){
                        this.status="已支付"
                    }
                    else if(this.status=='30'){
                        this.status="待发货"
                    }
                    else if(this.status=='40'){
                        this.status="部分发货"
                    }
                    else if(this.status=='50'){
                        this.status="已发货"
                    }
                    else if(this.status=='60'){
                        this.status="已完成"
                    }
                    else if(this.status=='70'){
                        this.status="取消"
                    }

                }
                // console.log(res.data.data)
            })

        },
        methods:{
            logistics(){
                this.$router.push({name:'logistics'})
            },
            pay(){
                let lan=document.querySelector(".lan");
                lan.style.display="none";
                this.$axios.get('/user/order?status=10',{params:{user_id:this.user_id}}).then(res=>{
                    this.list=res.data.data;

                })
            },
            shouhuo(){
                let lan=document.querySelector(".lan");
                lan.style.display="none";
                this.$axios.get('/user/order?status=30',{params:{user_id:this.user_id}}).then(res=>{
                    this.list=res.data.data;

                })
            },
            done(){
                let lan=document.querySelector(".lan");
                lan.style.display="none";
                this.$axios.get('/user/order?status=50',{params:{user_id:this.user_id}}).then(res=>{
                    this.list=res.data.data;

                })
            },
            all(){
                this.$axios.get('/user/order',{params:{user_id:this.user_id}}).then(res=>{
                    this.list=res.data.data;

                })
            }
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
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .nav-item:hover .lan1{
        display: block;
    }
    .lan1{
        display: none;
    }

    main{
        width: 100%;
        /*margin-top: 0.88rem;*/
    }
    .nav{
        width: 100%;
        height: 0.83rem;
        border-bottom:0.01rem solid #d4d7da;
        background: #fff;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .nav-item{
        width: 25vw;
        height: 100%;
        float:left;
        text-align: center;
        line-height: 0.83rem;
        font-size:0.26rem;
        position: relative;
        display: inline-block;
        vertical-align: top;
    }
    .xian{
        width: 0.02rem;
        height: 0.36rem;
        position:absolute;
        top:0.24rem;
        right:0rem;

    }
    .xian1{
        left:1.82rem;
    }
    .lan{
        width: 100%;
        height: 0.06rem;
        background: #f9434e;
        position: absolute;
        left:0;
        bottom:0;
    }
    .order{
        width: 100%;
        height: auto;

    }
    .order-top{
        width: 100%;
        height: 0.84rem;
        font-size:0.28rem;
        color:#323a45;
        line-height: 0.84rem;
        padding-left:0.40rem;
        font-weight: bold;
        border-bottom:1px solid #e0e0e0;
    }
    .order-item{
        width: 100%;
        height: auto;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
        margin-bottom:0.11rem;
    }
    .order-titem{
        width: 100%;
        height: 0.84rem;
        border-bottom:1px solid #e0e0e0;
    }
    .order-no{
        font-size:0.28rem;
        color:#555555;
        padding-left: 0.40rem;
        display:block;
        line-height: 0.84rem;
        float:left;
    }
    .order-state{
        font-size:0.24rem;
        color:#a2a2a2;
        float:right;
        margin-right:0.50rem;
        line-height: 0.84rem;
    }
    .order-mitem{
        width: 100%;
        height: 1.98rem;
        overflow: hidden;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
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
    .order-bitem1{
        width: 100%;
        height: 0.64rem;
        border-bottom:1px solid #e0e0e0;
    }
    .order-total{
        font-size:0.26rem;
        color:#555555;
        display: block;
        float:right;
        line-height: 0.64rem;
        margin-right:0.49rem;
    }
    .order-active{
        width: 100%;
        height: 0.69rem;
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
    .order-bitem2{
        border:none;
    }
</style>