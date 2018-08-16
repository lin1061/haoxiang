<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
        <!--<img src="../assets/images/back.png" class="back">-->
        <!--<span class="title">收货地址</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <div class="list-item clearfix" v-for="item in adr">
                <div class="list-itemtop">
                    <span class="list-title1">{{item.address}}</span>
                    <span class="list-title2">{{item.name}}</span>
                    <span class="list-title2 list-title3">{{item.phone}}</span>
                </div>

            </div>
            <button class="anniu">
                <span class="anniu-wenzi" @click="add">新增收货地址</span>
            </button>
        </main>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "addresslist",
        data(){
            return{
                adr:[]
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,

            }),

        },
        mounted:function () {

            this.$axios.get('/user/addresses',
                {params:{user_id:this.user_id}},
            ).then(res=>{
                this.adr=res.data.data;
                console.log(res)

            })

        },
        methods:{
            add:function () {
                this.$router.push({name:'shouhuoadd'})

            }
        }
    }
</script>

<style scoped>

    header{
        width: 100%;
        height: 0.93rem;
        background: #ffffff;
        line-height: 0.53rem;
        position: fixed;
        top:0;
        left:0;
    }
    /*main{*/
    /*margin-top:1.07rem;*/
    /*}*/
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.29rem;
    }
    .list-item{
        width: 7.21rem;
        height: 2.03rem;
        margin:0.14rem 0 0.14rem 0.16rem;
        background: url("../assets/images/bg.png") no-repeat  center;
        background-position: center;
        -webkit-background-size: cover;

    }
    .list-itemtop{
        width: 100%;
        height: 100%;
        overflow:hidden;
    }
    .list-title1{
        margin:0.45rem 0 0.34rem 0.45rem;
        display: block;
        font-size:0.27rem;
    }
    .list-title2{
        font-size:0.24rem;
        display: block;
        color:#a2a2a2;
        float:left;
        margin:0 0 0.15rem 0.45rem;
    }
    .list-title3{
        margin:0 0 0.15rem 0.22rem;
    }

    footer{
        position: fixed;
        bottom:0.62rem;
        left:8.5vw;
    }
    .anniu{
        width: 100%;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:5.68rem;
        border:none;
        outline:none;
        background-color: #fff;
        background:url(../assets/images/button.png) no-repeat center;

    }
    .anniu-wenzi{
        font-size:0.36rem;
        color:#ffffff;
        text-align: center;
    }
</style>