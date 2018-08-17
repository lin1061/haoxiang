<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">好象会员</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <!--会员卡-->
            <section class="card clearfix">
                <div class="card-rtop clearfix">
                    {{state}}
                </div>
                <span class="card-title">{{member.series_number }}</span>
                <div class="tiaoma" v-html="member.bar_pic"></div>
                <span class="card-title3">好象有货{{member.card_type}}</span>
                <button class="anniu">立即续费</button>
            </section>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "memberover",
        data(){
            return{
                member:[],
                state:"",


            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
            }),

        },
        mounted:function () {
            this.$axios.get('/user/card',{params:{user_id:this.user_id}}).then(res=>{
                this.member=res.data.data;
                console.log(res.data.data)
                // console.log(this.member)
                this.state=res.data.data.status;
                if(this.state=="0"){
                    this.state="已过期"

                }else if(this.state=="1"){
                    this.state=this.member.rest_days+"天"

                }
            })
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
        margin-top:0.16rem;
        position: relative;
        background: url("../assets/images/组1@2x.png") no-repeat center/cover;
    }
    .card-rtop{
        width: 1.25rem;
        height: 0.53rem;
        background: #fff;
        float:right;
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
        font-size:0.42rem;
        color:#f8f8f8;
        display: block;
        /*font-weight: 600;*/
        padding-top: 1.25rem;
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
        margin:0 auto;
        border: none;
        display: block;
        outline: none;
        margin-top: 0.19rem;
        font-size:0.32rem;
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
    .tiaoma{
        width: 4.6rem;
        height: 1.04rem;

        margin:0 auto;
        margin-top: 0.10rem;
    }
    .tiaoma img{
        width: 4.6rem!important;
        height: 1.04rem!important;
    }
</style>