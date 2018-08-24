<template>
    <div id="main">
        <main>
            <div class="erweima">
                <img :src="kefu.wechat_pic" alt="">
            </div>
            <span class="wechat wechat2" @click="baocun">长按保存图片</span>
            <span class="card-title1 card-title3">微信号：{{kefu.wechat}}</span>
            <span class="wechat wechat2">支付成功</span>
            <span class="card-title1 card-title5">我们的客服会在24小时内与你取得联系</span>
            <span class="tel" @click="phone">电话咨询</span>
            <span id="back" @click="back">返回</span>

        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "schoolsuccess",
        data(){
            return{
               kefu:[],
                img:''
            }
        },
        computed: {
            ...mapState({
                university_id: state => state.university_id,
            }),
        },
        mounted:function () {
            this.$axios.get('/server',{params:{university_id:this.university_id}}).then(res=>{
                this.kefu=res.data.data;
                this.img=this.kefu.wechat_pic;
            })
        },
        methods:{
            phone(){
                jsObj.GotoCall(this.kefu.tel);
            },
            back(){
                jsObj.GotoMain();
            },
            baocun(){
                let img=document.querySelector(".erweima");
                savePicture();
            }
        }
    }
    function savePicture() {

    // 创建下载任务
            picurl=this.img;
    //图片保存到手机后的路径
            picname="_downloads/erwei.png";
            var dtask = plus.downloader.createDownload(picurl, {}, function ( d, status ) {
    // 下载完成
                if ( status == 200 ) {
    //	alert( "Download success: " + d.filename );
                    plus.gallery.save(picname,function() {//保存到相册方法
                        mui.toast('已保存到手机相册');
                    }, function() {
                        mui.toast('保存失败，请重试！');
                    });
                } else {
    //	alert( "Download failed: " + status );
                }
            });
    //dtask.addEventListener( "statechanged", onStateChanged, false );
            dtask.start();//开始下载
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