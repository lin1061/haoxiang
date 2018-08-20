<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">物流信息</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <section class="logis-item">
                <span>共计{{num}}个包裹</span>
            </section>
            <div class="logis-thing clearfix" v-for="(item,index) in list">
                <div class="item" v-for="(gitem,gindex) in item.goods">
                    <div class="imgbox ">
                        <img :src="gitem.img_path">
                    </div>
                    <div class="info ">
                        <span class="info-title">{{types}}<span class="name">{{gitem.goods_name}}</span></span>
                        <span class="info-state">{{status}}</span>
                        <span class="expressno">韵达快递：{{item.order_num}}</span>
                        <img src="../assets/images/fz_2@2x.png" class="fz">
                    </div>
                </div>

            </div>
            <div class="logis-thing clearfix" v-for="item in list1">
                <div class="item" v-for="gitem in item.goods">
                    <div class="imgbox ">
                        <img :src="gitem.img_path">
                    </div>
                    <div class="info ">
                        <span class="info-title">{{types}}<span class="name">{{gitem.goods_name}}</span></span>
                        <span class="info-state">{{status}}</span>
                        <span class="expressno">韵达快递：3242402002929384</span>
                        <img src="../assets/images/fz_2@2x.png" class="fz">
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "logistics",
        data(){
            return{
                list:[],
                num:0,
                num1:0,
                list1:[],
                types:"",
                status:""
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
            }),
            numtotal(){
                return this.num+this.num1
            }
        },
        mounted:function () {
            this.$axios.get('/user/order?status=50',{params:{user_id:this.user_id}}).then(res=>{
                this.list=res.data.data;
                this.num=this.list.length;
                console.log(this.list)
                var statusIndex = 0;
                var typesIndex = 0;
                for(let i=0;i<res.data.data.length;i++){
                    var types=res.data.data[i].order_type
                    var status=this.list[i].order_status
                    console.log(this.types)
                    if(types=='2'){
                        this.types[typesIndex]="门店直营";
                        typesIndex++;

                    }else if(types=='3'){
                        this.types[typesIndex]="总仓包邮";
                        typesIndex++;
                    }
                    else if(types=='4'){
                        this.types[typesIndex]="兑换订单";
                        typesIndex++;
                    }
                    else if(types=='5'){
                        this.types[typesIndex]="特价订单";
                        typesIndex++;
                    }
                    if(status=='10'){
                        this.status[statusIndex]="待支付";
                        statusIndex++;

                    }else if(status=='20'){
                        this.status[statusIndex]="已支付";
                        statusIndex++;
                    }
                    else if(status=='30'){
                        this.status[statusIndex]="待发货";
                        statusIndex++;
                    }
                    else if(status=='40'){
                        this.status[statusIndex]="部分发货";
                        statusIndex++;
                    }
                    else if(status=='50'){
                        this.status[statusIndex]="已发货";
                        statusIndex++;
                    }
                    else if(status=='60'){
                        this.status[statusIndex]="已完成";
                        statusIndex++;
                    }
                    else if(status=='70'){
                        this.status[statusIndex]="取消";
                        statusIndex++;
                    }

                }

            });
            this.$axios.get('/user/order?status=40',{params:{user_id:this.user_id}}).then(res=>{
                this.list1=res.data.data;
                this.num1=this.list1.length;
                console.log(this.list1)
                var statusIndex = 0;
                var typesIndex = 0;
                for(let i=0;i<res.data.data.length;i++){
                    var types=res.data.data[i].order_type
                    var status=this.list[i].order_status
                    console.log(this.types)
                    if(types=='2'){
                        this.types[typesIndex]="门店直营";
                        typesIndex++;

                    }else if(types=='3'){
                        this.types[typesIndex]="总仓包邮";
                        typesIndex++;
                    }
                    else if(types=='4'){
                        this.types[typesIndex]="兑换订单";
                        typesIndex++;
                    }
                    else if(types=='5'){
                        this.types[typesIndex]="特价订单";
                        typesIndex++;
                    }
                    if(status=='10'){
                        this.status[statusIndex]="待支付";
                        statusIndex++;

                    }else if(status=='20'){
                        this.status[statusIndex]="已支付";
                        statusIndex++;
                    }
                    else if(status=='30'){
                        this.status[statusIndex]="待发货";
                        statusIndex++;
                    }
                    else if(status=='40'){
                        this.status[statusIndex]="部分发货";
                        statusIndex++;
                    }
                    else if(status=='50'){
                        this.status[statusIndex]="已发货";
                        statusIndex++;
                    }
                    else if(status=='60'){
                        this.status[statusIndex]="已完成";
                        statusIndex++;
                    }
                    else if(status=='70'){
                        this.status[statusIndex]="取消";
                        statusIndex++;
                    }

                }
            });

        }
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.32rem;
        position: fixed;
        left:0;
        top:0;
    }
    .item{
        width: 100%;
        height:1.98rem;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    main{
        /*margin-top: 0.8rem;*/
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .logis-item{
        width: 100%;
        height: 0.84rem;
        background: #fff;
        border-bottom:0.01rem solid #d4d7da;
        font-size:0.28rem;
        color:#323a45;
        line-height: 0.84rem;
    }
    .logis-item span{
        padding-left:0.57rem;
    }
    .logis-thing{
        width: 100%;
        padding:0.40rem 0;
        /*height: 1.98rem;*/
        background: url("../assets/images/bg_2@2x.png") no-repeat center/cover;
        overflow: hidden;
    }
    .imgbox{
        width: 1.59rem;
        height: 1.59rem;
        margin:0.19rem 0.24rem 0 0.48rem;
        float:left;
    }
    .info{
        width: 65%;
        float:left;
    }
    .imgbox img{
        width: 100%;
        height: 100%;
    }
    .info-title{
        font-size:0.26rem;
        color:#f9444d;
        display: block;
        float:left;
        padding-top: 0.20rem;
        width: 3.55rem;
    }
    .name{
        font-size:0.26rem;
        color:#2c2c2c;
        height: 0.50rem;
        overflow: hidden;
    }
    .info-state{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        float:right;
        padding-top:0.20rem;
        padding-right:0.48rem;
    }
    .expressno{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:left;
        padding-top: 0.40rem;
    }
    .fz{
        width: 0.93rem;
        height: 0.46rem;
        display: block;
        float:right;
        margin: 0.33rem 0.43rem 0 0;
    }
</style>