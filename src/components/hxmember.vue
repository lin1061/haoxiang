<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">好象会员</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <!--非会员-->
            <router-link :to="{name:'membershow',query:{cartid:item.id,user_id:user_id,university_id:university_id,money:item.money,token:token,days:item.days,desc:item.desc,tit:item.name,tel:tel,istype:istype,maxmoney:item.price}}" class="card clearfix" v-for="item in list" :key="item.id" v-if="ishx == 0">
                <div class="card-rtop clearfix">
                    {{item.days}}天
                </div>
                <span class="card-title" v-html="item.desc"></span>
                <!--<span class="card-title card-title1">9天最高可买1000元</span>-->
                <span class="card-title3">好象有货{{item.name}}</span>
                <button class="anniu">￥{{item.money}}</button>
            </router-link>
            <!-- 会员 -->
            <section class="card clearfix"  v-if="ishx == 1">
                <div class="card-rtop clearfix" v-if="member.status == 1">{{member.rest_days}}天</div>
                <div class="card-rtop clearfix" v-if="member.status == 0">已过期</div>
                <span class="card-title">{{member.series_number }}</span>
                <div class="tiaoma" v-html="member.bar_pic"></div>
                <span class="card-title3">好象有货{{member.card_type}}</span>
               <router-link :to="{name:'hxmember',query:{user_id:user_id,token:token}}">
                   <button class="anniu" @click="renewals">立即续费</button>
               </router-link>

            </section>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "hxmember",
        data(){
            return{
                list:[],
                money:0,
                ishx:-1,//-1会员/非会员
                member:{},
                tel:"",//会员手机号
                istype:0,
                maxmoney:0
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                university_id:state=>state.university_id,
                token:state=>state.token,
                device:state=>state.device,
                longitude: state => state.longitude,
                latitude:state=>state.latitude

            }),

        },
        created(){
            this.getuserinfo();
            this.nocard();
            this.yescard();
        },
        methods:{
            // 用户信息判断是否为会员
            getuserinfo(){
                this.$axios.get('/user/get_info/'+this.user_id).then(res=>{
                    if(res.data.err_code == 0){
                        this.ishx = res.data.data.user_info.is_yellow_card //0非会员1会员
                        this.istype = res.data.data.user_info.is_yellow_card
                        this.tel = res.data.data.user_info.tel
                    }
                })
            },
            // 非会员
            nocard(){
                this.$axios.get('/cards',{params:{user_id:this.user_id,university_id:this.university_id,token:this.token,device:this.device,longitude:this.longitude,latitude:this.latitude}}).then(res=>{
                    if(res.data.err_code == 0){
                        this.list=res.data.data;
                    }
                })
            },
            // 会员
            yescard(){
                this.$axios.get('/user/card',{params:{user_id:this.user_id}}).then(res=>{
                    if(res.data.err_code == 0){
                        this.member=res.data.data;
                    }
                })
            },
            // 立即续费
            renewals(){
                this.ishx = 0;
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
        bottom:1.20rem;
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