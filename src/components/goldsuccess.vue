<template>
    <div id="main">
        <main>
            <div class="erweima" @click="baocun">
                <img src="../assets/images/qr@2x.png" alt="">
            </div>
            <span class="wechat wechat2" >点击保存图片</span>
            <span class="card-title1 card-title3">微信号：156813518646135</span>
            <span class="wechat wechat2">兑换成功</span>
            <span class="card-title1 card-title5">我们会尽快组织发货</span>
            <span class="tel" @click="phone">电话咨询</span>
            <span id="back">返回</span>



        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "goldsuccess",
        data(){
            return{

            }
        },

            methods:{
            phone(){
                jsObj.GotoCall(15703410266);
            },
            baocun(){
                jsObj.SavePic("../static/img/qr@2x.7bc452f.png")
            }
        }
    }

</script>

<style scoped>

    .card-title1{
        font-size:0.28rem;
        color:#a2a2a2;
        display: block;
        text-align: center;
        padding-top:0.35rem;
    }

    .erweima{
        width: 3.14rem;
        height: 3.10rem;
        margin:0 auto;
        margin-top: 2.35rem;
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
    .wechat{
        font-size:0.22rem;
        color:#a2a2a2;
        display: block;
        margin-top:0.22rem;
        text-align: center;
    }
    .wechat2{
        margin-top:0.49rem;
    }
    .wechat3{
        margin-top:3.29rem;
        font-size:0.24rem;
    }
    .tel{
        width: 1.63rem;
        height: 0.5rem;
        display: block;
        margin: 0 auto;
        font-size:0.24rem;
        line-height: 0.5rem;
        text-align: center;
        border-radius: 0.5rem;
        color:#f9444d;
        border:0.02rem solid #f9444d;
        margin-top: 0.3rem;
    }
    #back{
        width: 2.85rem;
        height: 1.10rem;
        display: block;
        margin:0 auto;
        font-size: 0.32rem;
        text-align: center;
        line-height: 1.10rem;
        margin-top: 0.20rem;
        color:#fff;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("../assets/images/button@2x.png") ;
    }
</style>