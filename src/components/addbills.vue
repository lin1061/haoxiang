<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
        <!--<img src="../assets/images/back.png" class="back">-->
        <!--<span class="title">新增发票</span>-->
        <!--</header>-->
        <!--内容-->
        <main>
            <!--输入发票抬头名称-->
            <div class="name clearfix">
                <span class="michen">名称</span>
                <input type="text" class="bill-name" placeholder="发票抬头名称" v-model="name">
            </div>
            <!--输入发票抬头税号-->
            <div class="name billsNO clearfix">
                <span class="michen billno">税号</span>
                <input type="text" class="bill-name billno" placeholder="纳税人识别号或社会统一同意代码" v-model="no">
            </div>
            <div class="name clearfix">
                <span class="leixing">请选择类型:</span>
                <span class="personal">个人</span>
                <div class="gouxuan" >
                    <p>
                        <span class="circle-btn"></span>
                        <input type="radio" value="2" name="checkname" id="check" @click="porsonal">
                        <label  class="radio"></label>
                    </p>
                </div>
                <span class="personal">公司</span>
                <div class="gouxuan" >
                    <p>
                        <span class="circle-btn"></span>
                        <input type="radio" value="2" name="checkname" id="check1" @click="company">
                        <label  class="radio"></label>
                    </p>
                </div>
            </div>

            <button class="anniu">
                <span class="anniu-wenzi" @click="add">添加并使用新抬头</span>
            </button>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import qs from 'qs'
    export default {
        name: "addbills",
        data(){
            return{
                name:"",
                no:"",
                invoice_type:""
            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
            }),

        },
        methods:{
            porsonal(){
                this.invoice_type=1;
                console.log(1)
            },
            company(){
                this.invoice_type=2;
                console.log(2)
            },
            add:function () {

                this.$axios.post('/user/invoice_store',
                    qs.stringify({
                        invoice_title:this.name,
                        invoice_tax:this.no,
                        user_id:this.user_id,
                        invoice_type:this.invoice_type
                    }),).then(res=>{
                    let {err_code,msg,data}=res.data;
                    console.log(res)
                    if(err_code=='0'){
                        this.$router.push({name:'billslist'})
                    }
                })
            },


        }
    }
</script>

<style scoped>
    #main{
        background: #fff;
        width: 100%;
        height: 100vh;
    }
    header{
        width: 100%;
        height: 0.93rem;
        background: #f6f6f8;
        line-height: 0.53rem;
    }
    .back{
        width: 0.32rem;
        height: 0.22rem;
        margin-left:0.32rem;
    }
    .title{
        font-size:0.30rem;
        color:#555555;
        margin-left:2.20rem;
    }
    .name{
        width: 6.10rem;
        /*height: 1.47rem;*/
        background-color: #fff;
        margin-left:0.70rem;
        border-bottom:0.01rem solid #e0e0e0;
        padding-bottom: 0.5rem;
    }
    .michen{
        display: block;
        font-size:0.26rem;
        color:#555555;
        margin-top:0.82rem;
        float:left;
        font-weight: bold;
    }
    .bill-name{
        width: 4.39rem;
        /*height: 0.26rem;*/
        /*background-color: blue;*/
        float:left;
        border:none;
        outline:none;
        margin:0.82rem 0 0 1.18rem;
        background-color: transparent;

    }
    .billsNO{
        height: 1.19rem;
    }
    .billno{
        margin-top:0.54rem;
    }
    .anniu{
        width: 100%;
        height: 1.78rem;
        display: block;
        margin:0 auto;
        margin-top:0.78rem;
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
    .gouxuan{
        width: 0.33rem;
        height: 0.33rem;
        margin-top: 0.82rem;
        margin-left:0.30rem;
        display: block;
        float:left;
        position: relative;

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
    input#check[type='radio']{
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

    input#check[type='radio']:checked+.radio{
        width: 0.33rem;
        height: 0.33rem;
        position: absolute;
        top:0rem;
        right:0rem;
        background: url('../assets/images/wc@2x.png') no-repeat center/cover;
    }
    input#check1[type='radio']{
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

    input#check1[type='radio']:checked+.radio{
        width: 0.33rem;
        height: 0.33rem;
        position: absolute;
        top:0rem;
        right:-0.03rem;
        background: url('../assets/images/wc@2x.png') no-repeat center/cover;
    }
    .leixing{
        font-size: 0.26rem;
        color:#555555;
        display: block;
        margin-top: 0.82rem;
        float: left;
        font-weight: bold;
    }
    .personal{
        font-size: 0.26rem;
        color:#555555;
        float:left;
        margin-left:0.30rem;
        margin-top: 0.82rem;
    }
</style>