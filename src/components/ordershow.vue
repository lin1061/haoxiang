<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">订单详情</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="order-box1">
                <!-- 10待支付,20待发货,40部分发货,50已发货,60已完成,70取消 -->
                <span v-if="order.order_status == 10">待支付</span>
                <span v-if="order.order_status == 20">待发货</span>
                <span v-if="order.order_status == 40">部分发货</span>
                <span v-if="order.order_status == 50">已发货</span>
                <span v-if="order.order_status == 60">已完成</span>
                <span v-if="order.order_status == 70">取消</span>
            </div>
            <div class="order-box1">
                <span>订单号：<span class="orderno">{{order.order_num}}</span></span>
                <img src="../assets/images/fz@2x.png" class="copy" @click="copy">
            </div>
            <div class="order-info clearfix">
                <span class="order-man">收货人：{{info.name}}</span>
                <span class="order-phone">{{info.phone}}</span>
                <span class="order-address">{{info.address}}（可选择自提服务）</span>
            </div>
            <div class="order-mitem clearfix" v-for="item in order.goods">
                <div class="order-tu">
                    <img :src="item.img_path" alt="">
                </div>
                <span class="order-title1">{{item.goods_name}}</span>
                <span class="order-weight"></span>
                <span class="order-price">￥{{item.price}}</span>
                <span class="order-num">x{{item.quantity}}</span>
            </div>
            <div class="order-active order-active1" v-if="sh">
                <img src="../assets/images/sh@2x.png" alt="" class="cancel pay" v-if="order.order_status == 50 || order.order_status == 20 || order.order_status == 40" @click.prevent="succseegoods(order.id)">
                <img src="../assets/images/售后服务.png" alt="" class="cancel pay cancel1" @click="kefu" v-if="order.order_status == 60">
            </div>
            <div class="paybox clearfix">
                <div class="order-box1 ">
                    <span>支付方式</span>
                    <span class="pay-title">{{order_pay}}</span>
                </div>
                <div class="order-box1">
                    <span >配送</span>
                    <span class="pay-title">{{distribution}}</span>
                </div>
                <div class="order-box1">
                    <span >发票抬头</span>
                    <span class="pay-title">{{order.invoices_title}}</span>
                </div>

                <div class="order-box1">
                    <span >商品总额</span>
                    <span class="pay-title">￥{{order.total_money}}</span>
                </div>
                <div class="order-box1">
                    <span >运费</span>
                    <span class="pay-title">+￥{{order.postage}}</span>
                </div>
                <div class="order-box1">
                    <span >实付金额</span>
                    <span class="pay-title">￥{{allmoney}}</span>
                </div>
                <div class="order-box1 order-box2">
                    <span >下单时间</span>
                    <span class="pay-title">{{order.pay_at}}</span>
                </div>
                <div class="order-active clearfix">
                    <span class="time" v-if="!sh">自动取消: {{mo}}:{{so}}</span>
                    <img src="../assets/images/qx@2x.png" alt="" class="cancel"  @click="cancel" v-if="order.order_status == 10">
                    <img src="../assets/images/zf@2x.png" alt="" class="cancel pay" v-if="order.order_status == 10" @click="waitpaygoods(order.id,order.total_money)">
                    <img src="../assets/images/play.png" alt="" class="cancel pay" v-if="order.order_status != 10" @click.prevent="addgoods(order.goods)">
                </div>
            </div>

            <toast v-model="s"  type="text" :time="800" is-show-mask text="复制成功" position="bottom"></toast >
            <div class="imgbox" @click="gomember">
                <img src="../assets/images/banner@2x.png">
            </div>

        </main>
        <div class="choose" v-show="showchoose">
            <div class="fanshi">
                <div class="ziti ziti2 noto" >提示</div>
                <div class="ziti" >确定要删除么？</div>

                <div class="ziti ziti1 ziti3" @click="canto">取消</div>
                <div class="ziti ziti1 okto"  @click="canto">确定</div>
            </div>

        </div>
        <confirm v-model="show2"
          title="提示"
          theme="android"
          @on-confirm="ordertype">
            <p style="text-align:center;">确定取消订单？</p>
        </confirm>
        <toast v-model="s"  type="text" :time="800" is-show-mask text="入库成功" position="bottom"></toast >
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Toast,Confirm } from 'vux'
    export default {
        name: "ordershow",
        data(){
            return{
                order:[],
                oid:"",
                order_pay:"",
                distribution:"",
                info:[],
                s:false,
                showchoose:false,
                id:"",
                show2:false,
                s:false,
                sh:false,
                mo:"",
                so:"",
                clear:"",
                allmoney:""
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                token: state => state.token,
                university_id:state=>state.university_id,
            }),

        },
        created(){
            this.oid=this.$route.query.oid;
            this.datainfo()
        },
        components: {
            Toast,
            Confirm
        },
        methods:{

            //浮点数加法运算
            FloatAdd(arg1,arg2){
                var r1,r2,m;
                try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
                try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
                m=Math.pow(10,Math.max(r1,r2));
                return (arg1*m+arg2*m)/m;
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
            //支付
            waitpaygoods(id,num){
                // id 订单id
                alert(1)
                jsObj.GotoPay(id,'G',num)
                // if(window.__wxjs_environment === 'miniprogram'){
                //             // 小程序
                //     wx.miniProgram.navigateTo({url: '/pages/collectmoney/main?id='+id+'&type=G'+'&pay='+num})
                // }else {
                //     jsObj.GotoPay(id,'G',num)
                // }
            },
             // 取消订单
            ordertype(){
                let id = this.order.id
               this.$axios.get('/user/change_order_status',{params:{order_id:id,status:70}}).then(res=>{
                    let info =res.data;
                    if(info.err_code == 0){
                        // 状态修改成功
                        this.datainfo()
                    }
                }) 
            },
            // 再次购买入购物车
            addgoods(id){
                // 商品id
                let that = this
                console.log(id)
                if(id.length>0){
                    id.forEach(function(v,i){
                        that.$axios.post('/user/shop_card',{'user_id':that.user_id,'num':1,'university_id':that.university_id,'goods_id':v.goods_id,'spec_id':v.spec_id}).then(res=>{
                            let info =res.data;
                            if(info.err_code == 0){
                                //成功加入购物车
                                that.s = true;
                            }
                        })
                    })
                    
                }
                
            },
            // dataifno
            datainfo(){
                this.$axios.get('/user/order_detail?order_id='+this.oid).then(res=>{
                    this.order=res.data.data;

                    
                    this.allmoney = this.FloatAdd(this.order.total_money,this.order.postage)
                    // 倒计时统计
                    if(this.order.order_status == 10){
                        let Newtimestamp = Date.parse(new Date()); //当前时间戳
                        let Severtimestamp = new Date(this.order.created_at).getTime();//服务器时间戳
                        let m = (14-Math.floor((Newtimestamp-Severtimestamp)/1000/60))<=0 ? 0 : 14-Math.floor((Newtimestamp-Severtimestamp)/1000/60)
                        let s = (60-Math.floor((Newtimestamp-Severtimestamp)/1000%60))<=0 ? 0 : 60-Math.floor((Newtimestamp-Severtimestamp)/1000%60)
                        // let m= 2
                        // let s=2
                        this.mo = m
                        this.so = s
                        let that = this
                        this.clear = setInterval(function(){
                            that.so = s--
                            if(that.mo<=0 && that.so<=0){
                                that.ordertype()
                                clearInterval(that.clear)
                                return false
                            }
                            if(that.so<=0){                                
                                s = 60;
                                that.so = s--
                                that.mo = that.mo-1
                            }
                            
                        },1000)
                    }
                    // 倒计时结束
                    if(this.order.order_status != 10){
                        this.sh = true
                    }
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
            kefu(){
                if(window.__wxjs_environment === 'miniprogram'){
                    wx.miniProgram.navigateTo({url: '/pages/call/main'})
                }else{
                    jsObj.GotoService();
                }

            },
            copy(){
                let num=document.querySelector(".orderno");
                console.log(num.innerText)
                this.s=true;

            },
            gomember(){
                this.$router.push({path:'/hxmember',query:{'user_id':this.user_id,'token':this.token,'university_id':this.university_id}})
            },
            cancel(){
                this.show2=true;
            },
            canto(){
                this.showchoose=false;
            }
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
    .choose{
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
    #main{
        overflow: hidden;
        overflow-x: hidden;
    }
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
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    main{
        width: 100%;
        /*margin-top: 0.88rem;*/
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
        top:0.28rem;
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
        width: 100%;
        margin:0rem 0 0.26rem 0.40rem;
    }
    .order-mitem{
        width: 100%;
        height: 1.98rem;
        overflow: hidden;
        background: #fff;
        margin-bottom:0.17rem;
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


</style>