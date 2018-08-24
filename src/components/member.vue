<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
            <!--<img src="../assets/images/backWhite.png" class="back">-->
            <!--<span class="title">开卡成功</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <section class="card clearfix">
                <div class="card-rtop clearfix" v-if="member.status == 1">{{member.rest_days}}天</div>
                <div class="card-rtop clearfix" v-if="member.status == 0">已过期</div>
                <span class="card-title">{{member.series_number }}</span>
                <div class="tiaoma" v-html="member.bar_pic"></div>
                <span class="card-title3">好象有货{{member.card_type}}</span>
            </section>
            <span class="card-title1">添加该微信号</span>
            <span class="card-title1 card-title2">专属客服将赠送你新会员礼包</span>
            <div class="erweima">
                <img :src="info.wechat_pic" alt="">
            </div>
            <span class="card-title1 card-title3">微信号：{{info.wechat}}</span>
            <span class="card-title1 card-title4">长按保存</span>
            <span class="card-title1 card-title5">任何疑问请致电：{{info.tel}}</span>
        </main>
    </div>
</template>

<script>
 import { mapState } from 'vuex'
    export default {
        name: "member",
        data(){
            return{
                member:{},
                info:{},
                university_id:""
            }
        },
        created(){
            this.cardinfo()
            this.yescard()
            
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
            }),
        },
        methods:{
            // 会员
            yescard(){
                this.$axios.get('/user/card',{params:{user_id:this.user_id}}).then(res=>{
                    if(res.data.err_code == 0){
                        this.member=res.data.data;
                    }
                })
            },
            // 客服信息
            code(){
                 this.$axios.get('/server',{params:{university_id:this.university_id}}).then(res=>{
                    if(res.data.err_code == 0){
                        this.info = res.data.data
                    }
                })
            },
            cardinfo(){
                this.$axios.get('/user/get_member_info',{params:{user_id:this.user_id}}).then(res=>{
                    if(res.data.err_code == 0){
                        this.university_id = res.data.data.university_id
                        this.code()
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
    .card{
        width: 7.32rem;
        height: 4.89rem;
        margin:0 auto;
        margin-top:0.17rem;
    }
    .card img{
        width: 100%;
        height: 100%;
    }
    .card-title1{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        text-align: center;
        padding-top:0.35rem;
    }
    .card-title2{
        font-size:0.28rem;
        color:#a2a2a2;
        padding-top: 0.24rem;
    }
    .erweima{
        width: 3.14rem;
        height: 3.10rem;
        margin:0 auto;
        margin-top: 0.35rem;
    }
    .erweima img{
        width: 100%;
        height: 100%;
    }
    .card-title3{
        font-size:0.22rem;
        padding-top: 0.31rem;
    }
    .card-title4{
        font-size:0.22rem;
        padding-top: 0.20rem;
    }
    .card-title5{
        font-size:0.24rem;
        padding-top: 0.65rem;
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
        /*margin-top: 0.95rem;*/
    }
    .card{
        width: 7.32rem;
        height: 4.89rem;
        background: #ff1c8b;
        margin:0 auto;
        margin-top:0.16rem;
        position: relative;
        background: url("../assets/images/组1@2x.png") no-repeat center/cover;
    }
    .card-rtop{
        width: auto;
        height: 0.53rem;
        background: #fff;
        float:right;
        padding:0rem 0.2rem;
        -webkit-border-radius: 0.5rem;
        -moz-border-radius: 0.5rem;
        border-radius: 0.5rem;
        margin-right:0.42rem;
        margin-top: 0.30rem;
        font-size:0.28rem;
        color:#f9444d;
        text-align: center;
        line-height: 0.53rem;
    }
    .card-title{
        font-size:0.36rem;
        color:#f8f8f8;
        display: block;
        width: 45%;
        margin:0 auto;
        line-height: 0.60rem;
        /*font-weight: 600;*/
        padding-top: 1.54rem;
        text-align: center;
        text-shadow:4px 4px 8px #eb585b;
    }
    .card-title1{
        padding-top: 0.20rem;
    }
    .card-title3{
        font-size:0.34rem;
        color:#3f3f3f;
        display: block;
        text-align: center;
        line-height: 0.34rem;
        position: absolute;
        left:0;
        right:0;
        bottom:0.8rem;
        margin:auto;
    }
    .anniu{
        width: 1.84rem;
        height: 0.60rem;
        background: pink;
        border: none;
        display: block;
        outline: none;
        font-size:0.34rem;
        /*font-weight: bold;*/
        text-align: center;
        color:#fff;
        position: absolute;
        left:0;
        right:0;
        bottom:0.45rem;
        margin:auto;
        background: url("../assets/images/buttonhy@2x.png") no-repeat center/cover;
    }
    .card:nth-child(n+2){
        margin-top: 0;
    }
    section .card-title{
        padding-top: 1.1rem;
    }
</style>