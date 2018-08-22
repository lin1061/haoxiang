<template>
    <div id="main">
        <div v-if="collect.length>0">
            <main>
                <div class="order-mitem clearfix" v-for="(item,index) in collect" :key="item.id" v-if="collect.length>0">
                    <div class="gouxuan" v-show="succuss">
                        <div class="seller-checkbox" :class="{'checked':gid.indexOf(item.goods_id)>=0}"  @click="onegoods(item.goods_id,index)"></div>
                        <!--<p>-->
                        <!--<span class="circle-btn"></span>-->
                        <!--<input type="checkbox" :name="index "   class="in-check" @click="add(item.goods_id)">-->
                        <!--<label  class="radio"></label>-->
                        <!--</p>-->
                    </div>
                    <router-link :to="{name:'goodshow',query:{goods_id:item.goods_id,user_id:uid,token:header}}" class="goods" :key="item.goods_id">
                        <div class="order-tu">
                            <img :src="item.goods_img" alt="">
                        </div>
                        <div class="box1">
                            <span class="order-title1">{{item.goods_name}}</span>
                            <span class="order-weight">原价：￥{{item.market_price}}</span>
                            <img src="../assets/images/sp@2x.png" class="shanpiao">
                            <span class="order-price">￥{{item.shop_price}}</span>
                            <span class="order-num">已售{{item.sales_volume}}件</span>
                        </div>
                    </router-link>
                </div>

            </main>
            <footer>
                <div class="bianji" v-show="bianji" @click="bian">编辑</div>
                <div class="box clearfix" v-show="succuss">
                    <span class="num">已选择{{num}}件商品</span>
                    <button class="del" @click="del" v-show="dele">完成</button>

                </div>
            </footer>
        </div>

        <err v-else></err>


    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import err from '@/assets/err'
    import qs from 'qs'
    export default {
        name: "collect",
        data(){
            return{
                // show:false,
                collect:[],
                num:0,
                bianji:true,
                succuss:false,
                dele:true,
                gid:[],
                good_id:[],
                header:'',
                uid:''

            }
        },
        components: {
            err
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                token:state=>state.token,
                university_id:state=>state.university_id
            }),

        },
        created(){
            this.init();
        },

        methods:{
            init(){
                this.header=this.token;
                this.uid=this.user_id;
                this.$axios.get('/user/collections',{params:{user_id:this.user_id,university_id:this.university_id}}
                ).then(res=>{
                    this.collect=res.data.data;
                    // console.log(res.data.data)
                })
            },
            onegoods(id,index){

                let del=document.querySelector(".del");
                del.innerHTML="删除"
                    let idIndex = this.gid.indexOf(id)
                    if (idIndex >= 0) {//如果已经包含就去除
                        this.gid.splice(idIndex, 1)
                        this.num--;
                        if(this.num<=0){
                            this.num=0;
                        }
                    } else {//如果没有包含就添加
                        this.gid.push(id);
                        this.num++;
                    }
                    console.log(this.gid)
                var arr = this.gid;
                var a=0;
                for ( var i = 0; i <arr.length; i++){
                    a=arr[i];
                }
                this.good_id.push({id:a})
                console.log(this.good_id)


            },

            bian(){
                this.bianji=!this.bianji;
                this.succuss=!this.succuss;



            },
            del:function () {

                this.bianji=!this.bianji;
                this.succuss=!this.succuss;
                this.$axios.post('/user/collection_delete',
                    qs.stringify({
                        user_id:this.user_id,
                        goods_id:this.good_id
                    })
                    ).then(res=>{
                        console.log(res)
                    if(res.data.err_code == 0){

                        this.init();
                    }
                });

            },
            wdone(){
                this.bianji=!this.bianji;
                this.succuss=!this.succuss;
            }

        },
       
    }
</script>

<style scoped>
    .seller-checkbox {
        background: url('../assets/images/y@2x.png') no-repeat;
        width: 0.33rem;
        height: 0.33rem;
        /*background-color: red;*/
        background-size: 0.32rem 0.32rem;
        display: inline-block;
    }
    .seller-checkbox.checked {
        background: url('../assets/images/wc@2x.png') no-repeat;
        background-size: 0.32rem 0.32rem;
    }
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
        height: auto;
        overflow: hidden;
        background: #fff;
        border-bottom:1px solid #e0e0e0;
        position: relative;
        padding-bottom: 0.20rem;
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
    input.in-check[type='checkbox']{
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

    input.in-check[type='checkbox']:checked+.radio{
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
    .bianji{
        width: 100%;
        height: 0.97rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        font-size:0.36rem;
        color:#fff;
        line-height: 0.97rem;
        text-align: center;
        position: fixed;
        left:0;
        bottom:0;
        border-top:0.01rem solid #d4d7da;

    }

</style>