<template>
    <div id="main">
        <!--头部-->
        <header>
            <img src="../assets/images/backWhite.png" class="back">
            <span class="title">收藏</span>
            <span class="share" @click="change">编辑</span>
        </header>
        <!--内容-->
        <main>
            <div class="order-mitem clearfix" v-for="item in collect">
                <div class="gouxuan" v-show="show">
                    <p>
                        <span class="circle-btn"></span>
                        <input type="checkbox" value="2" name="checkname" id="check" >
                        <label for="check" class="radio"></label>
                    </p>
                </div>
                <div class="order-tu">
                    <img :src="item.goods_img" alt="">
                </div>
                <div class="box1">
                    <span class="order-title1">{{item.goods_name}}</span>
                    <span class="order-weight">原价：￥{{item.market_price}}</span>
                    <img src="../assets/images/sp@2x.png" class="shanpiao">
                    <span class="order-price">￥{{item.shop_price}}</span>
                    <span class="shen">已省{{item.saved_price}}元</span>
                    <span class="order-num">已售{{item.sales_volume}}件</span>
                </div>

            </div>
        </main>
        <footer>
            <div class="box clearfix" v-show="show">
                <span class="num">已选择{{num}}件商品</span>
                <button class="del" @click="del">删除</button>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "collect",
        data(){
            return{
                show:false,
                collect:[],
                num:0
            }
        },
        mounted:function () {
            let token=JSON.parse(localStorage.getItem('user')).token;
            this.$axios.get('/user/collections',
                {
                    headers: {
                        'Authorization': 'Bearer ' + token,

                    }
                }
            ).then(res=>{
                this.collect=res.data.data;
            })
        },
        computed:{
            add:function () {
                let nums=document.querySelector("#check");
                for(var i=0;i<nums.length;i++){
                    if(nums.checked==true){

                        return this.num++;
                    }
                }



            }
        },
        methods:{
            change:function () {
                let anniu=document.querySelector(".share");
                anniu.innerHTML="完成"
                this.show=true;
            },
            del:function () {

            }
        }
    }
</script>

<style scoped>
    .box1{
        float: left;
        width: 66%;
    }
    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.88rem;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.60rem;
    }
    .share{
        font-size:0.28rem;
        color:#fff;
        display: inline-block;
        margin-right:0.38rem;

        float:right;
    }
    .order-mitem{
        width: 100%;
        height: 2.21rem;
        overflow: hidden;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
        position: relative;
    }
    .order-tu{
        width: 1.50rem;
        height: 1.56rem;
        margin:0.35rem 0 0 0.27rem;
        float:left;

    }
    .order-tu img{
        width: 1.60rem;
        height: 1.56rem;
    }
    .order-title1{
        font-size:0.28rem;
        color:#555555;
        display: block;
        float:left;
        margin:0.23rem 0 0 0.20rem;
        width: 4.56rem;
        line-height: 0.38rem;
    }
    .order-weight{
        font-size:0.24rem;
        color:#a2a2a2;
        line-height: 0.24rem;
        display: block;
        float:left;
        width:5.0rem;
        margin:0.25rem 0 0 0.20rem;
    }

    .order-price{
        font-size:0.28rem;
        color:#f9444d;
        float:left;
        line-height: 0.28rem;
        display: block;
        margin:0.25rem 0 0.20rem 0.06rem;
        font-weight: bold;
    }
    .shen{
        font-size:0.24rem;
        color:#a2a2a2;
        display: block;
        float:left;
        margin:0.23rem 0 0.20rem 0.16rem;
    }
    .order-num{
        font-size:0.24rem;
        line-height: 0.28rem;
        color:#a2a2a2;
        float:right;
        margin:0.23rem 0.45rem 0.20rem 0;

    }
    .shanpiao{
        width: 0.76rem;
        height: 0.26rem;
        display: block;
        float:left;
        margin:0.27rem 0 0 0.20rem;
    }
    .gouxuan{
        width: 0.33rem;
        height: 0.33rem;
        margin-top: 0.9rem;
        margin-left:0.20rem;
        display: block;
        float:left;
        position: relative;
        /*position: absolute;*/
        /*top:0.94rem;*/
        /*left:0.24rem;*/
    }
    .box{
        width: 100%;
        height: 0.97rem;
        background: #fff;
        position: fixed;
        left:0;
        bottom:0;
        border-top:0.01rem solid #d4d7da;
        line-height: 0.97rem;
    }
    .num{
        font-size: 0.32rem;
        color:#282828;
        display: block;
        padding-left:0.77rem;
        float:left;
    }
    .del{
        width: 2.76rem;
        height: 0.96rem;
        border:none;
        outline: none;
        display: block;
        float:right;
        font-size:0.38rem;
        color:#fff;
        background: linear-gradient(to right, #ff1c8b , #f37404);
    }
    p{  position: relative;  }
    .circle-btn{
        display: inline-block;
        position: absolute;
        top:0.02rem;
        border:1px solid rgb(192,192,192);
        border-radius: 50%;
        width: 0.32rem;
        height: 0.32rem;

    }
    input#check[type='checkbox']{
        opacity:0;
        top:0;
        left: -0.04rem;
        display:inline-block ;
        height: 0.18rem;
        width: 0.18rem;
        z-index: 100;
        vertical-align: middle;
        position:absolute;
    }

    input#check[type='checkbox']:checked+.radio{
        width: 0.33rem;
        height: 0.33rem;
        position: absolute;
        top:0rem;
        right:0rem;
        background: url('../assets/images/wc@2x.png') no-repeat center/cover;
    }

    label.radio{
        font-size:0.14rem;
        display: inline-block;
        height: 0.14rem;
        padding-left: 0.30rem;
        position: relative;
        vertical-align: middle;
        line-height: 0.14rem;
    }

</style>