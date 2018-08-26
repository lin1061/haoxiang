<template>
    <div id="main">
        <!--头部-->
        <!--<header class="clearfix">-->
        <!--<img src="../assets/images/backWhite.png" class="back">-->
        <!--<span class="title">活动详情</span>-->
        <!--&lt;!&ndash;<img src="../assets/images/fx@2x.png" class="share">&ndash;&gt;-->
        <!--</header>-->
        <!--内容-->
        <main>
            <span class="biaoti">{{active.name}}</span>
            <span class="jianshu">{{active.title}}</span>
            <span class="jianshu">有效期：{{active.end_time}}</span>
            <div class="content">
                <p v-html="active.describe" class="describe"></p>
            </div>
            <button class="join join1" @click="now" v-show="sa">已参与</button>
            <button class="join" @click="join" v-show="jj">立即参与</button>
        </main>
        <div class="choose" v-show="showchoose">
            <div class="fanshi">
                <div class="ziti ziti2 noto" >提示</div>
                <div class="ziti" >该活动为会员才能参加</div>

                <div class="ziti ziti1 ziti3" @click="canto">算了</div>
                <div class="ziti ziti1 okto"  @click="willmember">办理会员</div>
            </div>

        </div>
        <toast v-model="sx"  type="text" :time="800" is-show-mask text="没有该活动" position="bottom"></toast >
        <toast v-model="sc"  type="text" :time="800" is-show-mask text="参加活动失败，请稍后重试" position="bottom"></toast >
        <toast v-model="sb"  type="text" :time="800" is-show-mask text="没货了，下次再来吧" position="bottom"></toast >
        <toast v-model="sy"  type="text" :time="800" is-show-mask text="请先登录" position="bottom"></toast >
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { Toast } from 'vux'
    export default {
        name: "activemore",
        data(){
            return{
                active:[],
                showchoose:false,
                is_yellow_card:"",
                user_info:"",
                sx:false,
                sa:false,
                sb:false,
                sc:false,
                sy:false,
                jj:true

            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                activity_id:state=>state.activity_id,
                token:state=>state.token,
                university_id:state=>state.university_id
            }),

        },
        created:function(){
            this.$axios.get('/user/get_info/'+this.user_id).then(res=> {
                this.user_info = res.data.data.user_info;
                this.is_yellow_card = this.user_info.is_yellow_card;

            });
            this.$axios.get('/find/activity_involvement',{params:{user_id:this.user_id,activity_id:this.activity_id,goods_spec_id:this.spec_id,goods_num:this.goodsnum}}).then(res=>{
                console.log(res);
                if(res.data.err_code==0){
                    // this.sa=false;
                    this.jj=true;

                }
                if(res.data.err_code==1003){
                    this.sa=true;
                    this.jj=false;

                }
            })
        },
        mounted:function () {
            this.$axios.get('/find/activity_detail',{params:{user_id:this.user_id,activity_id:this.activity_id}}).then(res=>{
                console.log(res);
                this.active=res.data.data;
            })

        },
        methods:{
            now(){
                this.$router.push({name:'activesuccess',query:{university_id:this.university_id}})
            },
            join(){
                let id=this.user_id;
                if(id==0){
                    this.sy=true;
                    jsObj.GotoLogin();
                }else{
                    if(this.is_yellow_card=='0'){

                        this.showchoose=true;
                    }else  if(this.is_yellow_card=="1"){
                        this.$axios.get('/find/activity_involvement',{params:{user_id:this.user_id,activity_id:this.activity_id}}).then(res=>{
                            console.log(res);
                            if(res.data.err_code==0){
                                this.$router.push({name:'activesuccess'})
                            }else if(res.data.err_code==1001){
                                this.sx=true;
                            }else if(res.data.err_code==1002){
                                this.sc=true;
                            }else if(res.data.err_code==1003){
                                this.sa=true;
                                //     this.jj=false;
                                this.$router.push({name:'activesuccess'})
                            }else if(res.data.err_code==1005){
                                this.sb=true;
                            }
                        })
                    }
                }


            },
            canto(){
                this.showchoose=false;
            },
            willmember(){
                this.$router.push({name:'hxmember',query:{user_id:this.user_id,token:this.token}})
            }
        },
        components: {

            Toast
        }
    }
</script>

<style scoped>
    .fanshi{
        width: 5.53rem;
        height: 3.43rem;
        background: #fff;
        position: absolute;
        bottom:0;
        left:0;
        top:0;
        right:0;
        margin:auto;
        border-radius: 0.20rem;
    }
    .ziti2{
        color:#cccccc;
        font-size: 0.28rem;
        line-height: 0.30rem;
    }
    body{
        background: #f5f5f5;
    }
    .ziti{
        font-size: 0.32rem;
        text-align: center;
        color:#555555;
        width: 100%;
        height: 1.0rem;
        line-height: 1.0rem;
    }
    .ziti1:hover{
        color:#f9444d;
    }
    .ziti3{
        color:#cccccc;
    }
    .choose{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
        z-index: 44;
    }
    .ziti1{
        width: 50%;
        float:left;

    }
    .noto{
        color:#cccccc;
        font-size: 0.28rem;
    }
    .okto{
        color:#f9444d;
    }
    header{
        width: 100%;
        height: 6vh;
        background:  linear-gradient(to right, #ff1c8b , #f37404);
        line-height: 0.88rem;
        position: fixed;
        left:0;
        top:0;
    }
    .content p img{
        width: 7.0rem!important;
        height: auto!important;
        display: block!important;
        margin: 0 auto!important;
    }
    .back{
        width: 0.34rem;
        height: 0.24rem;
        margin-left:0.32rem;
    }
    .share{
        width: 0.30rem;
        height: 0.33rem;
        display: block;
        margin-right:0.38rem;
        margin-top: 0.25rem;
        float:right;
    }
    main{
        /*margin-top: 0.80rem;*/
        background: #fff;
    }
    .title{
        font-size:0.30rem;
        color:#fff;
        margin-left:2.20rem;
    }
    .biaoti{
        font-size:0.36rem;
        color:#555555;
        line-height: 0.36rem;
        display: block;
        font-weight: bold;
        padding-top: 0.35rem;
        padding-left:0.50rem;
    }
    .jianshu{
        font-size:0.26rem;
        display: block;
        color:#a2a2a2;
        padding-top: 0.20rem;
        padding-left:0.50rem;
        line-height: 0.26rem;
    }
    .content{
        width: 6.4rem;
        height: auto;
        padding:0.25rem 0.1rem;
        margin:0 auto;
        margin-top:0.30rem;
        margin-bottom:0.4rem;
    }
    .join{
        width: 6.4rem;
        height: 0.96rem;
        background: linear-gradient(to right, #ff1c8b , #f37404);
        font-size:0.36rem;
        color:#fff;
        display: block;
        margin:0 auto;
        border:none;
        outline: none;
        margin-bottom: 0.3rem;
    }
    .content img{
        width: 100%;
        height: auto;
    }
    .content p{
        font-size:0.26rem;
        color:#555555;
        line-height: 0.40rem;
        letter-spacing: 0.02rem;
        text-indent: 0.6rem;

    }
    .describe img{
        width: 50%;
        height: 50%;
    }
    .join1{
        background: #a2a2a2;

    }
</style>