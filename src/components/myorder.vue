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
                <router-link :to="{path:'/myorder/1',query:{'user_id':user_id,'token':token}}" class="nav-item">
                    <span>全部</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="order_status == ''"></div>
                    <div class="lan lan1"></div>
                </router-link>
                <router-link :to="{path:'/myorder/10',query:{'user_id':user_id,'token':token}}" class="nav-item">
                    <span>待支付</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian">
                    <div class="lan" v-show="order_status == 10"></div>
                    <div class="lan lan1"></div>
                </router-link>
                <router-link :to="{path:'/myorder/20',query:{'user_id':user_id,'token':token}}" class="nav-item">
                    <span>待收货</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian xian1">
                    <div class="lan" v-show="order_status == 20"></div>
                    <div class="lan lan1"></div>
                </router-link>
                <router-link :to="{path:'/myorder/60',query:{'user_id':user_id,'token':token}}" class="nav-item">
                    <span>已完成</span>
                    <img src="../assets/images/d@2x.png" alt="" class="xian xian1">
                    <div class="lan" v-show="order_status == 60"></div>
                    <div class="lan lan1"></div>
                </router-link>
            </div>
            <div class="order" v-if="list.store.length>0||list.warehouse.length>0">
                <router-link :to="{name:'ordershow',query:{oid:item.id,'token':token}}" class="order-item clearfix" v-for="item in list.store" :key="item.id">
                    <div class="order-top">
                        <span>门店自营</span>
                    </div>
                    <div class="order-titem">
                        <span class="order-no">订单号：{{item.order_num}}</span>
                        <span class="order-state">{{item.status}}</span>
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
                        <img src="../assets/images/wl@2x.png" alt="" class="cancel" v-if="item.order_status == 50" @click.prevent="logistics">                        
                        <img src="../assets/images/zf@2x.png" class="cancel pay" v-if="item.order_status == 10">
                        <img src="../assets/images/sh@2x.png" alt="" class="cancel pay" v-if="item.order_status == 50" @click.prevent="succseegoods(item.id)">
                        <img src="../assets/images/play.png" alt="" class="cancel pay" v-if="item.order_status == 60 || item.order_status == 70" @click.prevent="addgoods(item.goods.goods_id)">
                    </div>
                </router-link>
                <router-link :to="{name:'ordershow',query:{oid:item.id,'token':token}}" class="order-item clearfix" v-for="item in list.warehouse" :key="item.id">
                    <div class="order-top">
                        <span>总仓包邮</span>
                    </div>
                    <div class="order-titem">
                        <span class="order-no">订单号：{{item.order_num}}</span>
                        <span class="order-state">{{item.status}}</span>
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
                        <img src="../assets/images/wl@2x.png" alt="" class="cancel" v-if="item.order_status == 50" @click.prevent="logistics">                        
                        <img src="../assets/images/zf@2x.png" class="cancel pay" v-if="item.order_status == 10">
                        <img src="../assets/images/sh@2x.png" alt="" class="cancel pay" v-if="item.order_status == 50" @click.prevent="succseegoods(item.id)">
                        <img src="../assets/images/play.png" alt="" class="cancel pay" v-if="item.order_status == 60 || item.order_status == 70" @click.prevent="addgoods(item.goods.goods_id)">
                    </div>
                </router-link>
            </div>
            <errinfo v-else></errinfo>
            <toast v-model="s"  type="text" :time="800" is-show-mask text="入库成功" position="bottom"></toast >
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Toast } from 'vux'
    import errinfo from "@/assets/errinfo";
    export default {
        name: "myorder",
        data(){
            return{
                list:{store:[],warehouse:[]},
                types:"",
                status:"",
                order_status:"",
                s:false
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                token: state => state.token,
            }),

        },
        components: {
            errinfo,
            Toast
        },
        watch:{
            $route:function(){
                let status = this.$route.params.id == 1?"":this.$route.params.id;
                this.order_status = status;
                this.getorderInfo();
            }
            
        },
        created:function(){
            let status = this.$route.params.id == 1?"":this.$route.params.id;
            this.order_status = status;
            this.getorderInfo();
        },
        methods:{
            // 调用接口
            getorderInfo(){
                // order_status为空默认查询所有订单 10待支付,20待发货,40部分发货,50已发货,60已完成,70取消
                let status = this.order_status || "";
                this.$axios.get('/user/order',{params:{user_id:this.user_id,status:status}}).then(res=>{
                    let info =res.data.data;
                    let store = info.store || []//门店自营
                    let warehouse = info.warehouse || []//总仓包邮
                    this.list.store = store.map((v)=>{
                        if(v.order_status == 10){
                            v.status = '待支付'
                        }
                        if(v.order_status == 20){
                            v.status = '已支付'
                        }
                        if(v.order_status == 30){
                            v.status = '待发货'
                        }
                        if(v.order_status == 40){
                            v.status = '部分发货'
                        }
                        if(v.order_status == 50){
                            v.status = '已发货'
                        }
                        if(v.order_status == 60){
                            v.status = '已完成'
                        }
                        if(v.order_status == 70){
                            v.status = '取消'
                        }
                        return v;
                    })
                    this.list.store = warehouse.map((v)=>{
                        if(v.order_status == '10'){
                            v.status = '待支付'
                        }
                        if(v.order_status == '20'){
                            v.status = '已支付'
                        }
                        if(v.order_status == '30'){
                            v.status = '待发货'
                        }
                        if(v.order_status == '40'){
                            v.status = '部分发货'
                        }
                        if(v.order_status == '50'){
                            v.status = '已发货'
                        }
                        if(v.order_status == '60'){
                            v.status = '已完成'
                        }
                        if(v.order_status == '70'){
                            v.status = '取消'
                        }
                        return v;
                    })
                    console.log(this.list)
                })
            },
            // 物流信息
            logistics(){
                this.$router.push({name:'logistics'})
            },
            // 立即支付跳转app支付
            appPAY(id,pay){
                // 订单id  pay金额
            },
            //确认收货
            succseegoods(id){
                // id 订单id
                this.$axios.get('/user/change_order_status',{params:{order_id:id,status:60}}).then(res=>{
                    let info =res.data;
                    if(info.err_code == 0){
                        this.getorderInfo();
                    }
                })
            },
            // 再次购买入购物车
            addgoods(id){
                // 商品id
                this.$axios.get('/user/shop_card',{params:{user_id:this.user_id,num:1,goods_id:id}}).then(res=>{
                    let info =res.data;
                    if(info.err_code == 0){
                        //成功加入购物车
                        this.s = true;
                    }
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
        color: #555
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