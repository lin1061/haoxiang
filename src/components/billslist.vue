<template>
    <div id="main">
        <!--头部-->
        <!--<header>-->
        <!--<img src="../assets/images/back.png" class="back">-->
        <!--<span class="title">其他</span>-->
        <!--</header>-->
        <main>
            <div  class="list-item clearfix" v-for="(item,index) in bills" :key="item.id" >

                <div  class="list-itemtop" style="color:#555555;">
                    <span class="list-title1" >{{item.name}}</span>
                    <span class="list-title2">{{types[index]}}</span>
                    <span class="list-title2 list-title3">{{item.tax_number}}</span>
                </div>
                <div class="list-itembottom clearfix" >
                    <div @click="moren(item.id)">
                        <img src="../assets/images/mr@2x.png"class="mr" v-show="moreno">
                        <img src="../assets/images/fp@2x.png" alt="" class="mr" v-show="bmoren">
                    </div>

                    <div class="list-ritem">
                        <div class="list-ritem1"@click="bianji(item.id)">
                            <img src="../assets/images/b@2x.png" alt="">
                            <span class="list-ritem1-wen" >编辑</span>
                        </div>
                        <div class="list-ritem1 ritem2" @click="del(item.id)">
                            <img src="../assets/images/s@2x.png" alt="">
                            <span class="list-ritem1-wen">删除</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="anniu" @click="add">
                <span class="anniu-wenzi">添加新发票抬头</span>
            </button>
        </main>



    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import qs from 'qs'
    export default {
        name: "billslist",
        data(){
            return{
                bills:[],
                types:"",
                invoice_id:'',
                moreno:false,
                bmoren:true,
                token:'',
                gid:[],
                bid:''
            }
        },
        computed: {
            ...mapState({


            }),


        },
        mounted:function () {
            this.user_id=this.$route.query.user_id;
            this.token=this.$route.query.token;

            this.$axios.get('/user/invoices',{params:{user_id:this.user_id}}).then(res=>{
                this.bills=res.data.data;
                console.log(res.data.data)

                var typesIndex = 0;
                for(let i=0;i<res.data.data.length;i++){
                    var types=res.data.data[i].type;
                    console.log(types)
                    // console.log(this.types)
                    if(types == '1'){
                        this.types[typesIndex] ="个人";
                        typesIndex++;

                    }else if(types == '2'){
                        this.types[typesIndex]="公司";
                        typesIndex++;
                    }

                }



            })
        },
        methods:{
            bianji(id){
                this.$router.push({name:'billupdate',query:{user_id:this.user_id,token:this.token,invoice_id:id}})
            },
            del(id){

                this.$axios.post('/user/invoice_delete?invoice_id='+id).then(res=>{
                    console.log(res)
                });


            },
            add(){
                this.$router.push({name:'addbills',query:{user_id:this.user_id,token:this.token}})
            },
            moren(id){
                var index=0;
                for(let i=0;i<this.bills.length;i++){
                    var bills=this.bills[i].id;
                }
                if(bills == id){
                    this.moreno=true;
                    this.bmoren=false;
                    index++;
                }

                this.$axios.post('/user/default_invoice',
                    qs.stringify({
                        invoice_id:this.invoice_id
                    })).then(res=>{
                    console.log(res)


                })
            }
        }

    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 0.93rem;
        background: #ffffff;
        line-height: 0.49rem;
        /*position: fixed;*/
        /*top:0;*/
        /*left:0;*/
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
        margin-left:2.49rem;
    }
    .list-item{
        width: 7.21rem;
        height: 2.03rem;
        margin:0.14rem 0 0.14rem 0.12rem;
        background: url("../assets/images/bg.png") no-repeat  center;
        background-position: center;
        -webkit-background-size: cover;

    }
    .list-itemtop{
        width: 100%;
        height: 1.34rem;
        border-bottom:1px solid #e0e0e0;
        overflow:hidden;
    }
    .list-title1{
        margin:0.27rem 0 0.34rem 0.45rem;
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
    .list-itembottom{
        width: 100%;
        height: 0.69rem;
        overflow: hidden;
    }
    .mr{
        display: block;
        width: 0.62rem;
        height: 0.32rem;
        float:left;
        margin:0.16rem 0 0 0.48rem;

    }

    .list-ritem{
        width: 2.36rem;
        height: 0.69rem;
        margin-right:0.69rem;
        float:right;
    }
    .list-ritem1{
        width: 0.97rem;
        height: 100%;
        float:left;
        margin-right:0.41rem;
    }
    .list-ritem1 img{
        width: 0.33rem;
        height: 0.35rem;
        display: block;
        margin-top:0.15rem;
        float:left;
        margin-right:0.08rem;
    }
    .list-ritem1-wen{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        line-height: 0.69rem;
    }
    .ritem2{
        margin-right: 0rem;
    }
    .sw{
        width: 1.03rem;
        height: 0.33rem;
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
        margin-top:5.00rem;
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