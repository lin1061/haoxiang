<template>
    <div id="main">
        <main>
            <div class="erweima" @click="baocun">
                <img :src="kefu.wechat_pic" alt="">
            </div>
            <span class="card-title1 card-title3">微信号：{{kefu.wechat}}</span>
            <span class="card-title1 card-title3">点击保存到手机</span>
            <span class="card-title1 card-title5">发现活动参加成功，请添加该微信号领取成功</span>
        </main>
    </div>
</template>

<script>
    export default {
        name: "activesuccess",
        data(){
            return{
                kefu:[],
                img:'',
                university_id:'',
                kefu:''
            }
        },

        mounted:function () {
            this.university_id=this.$route.query.university_id;
            this.$axios.get('/server',{params:{university_id:this.university_id}}).then(res=>{
                this.kefu=res.data.data;
                this.img=this.kefu.wechat_pic;
            })
        },
        methods:{
            baocun(){
                jsObj.SavePic(this.img)
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
</style>