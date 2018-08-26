<template>
    <div id="main">
        <div class="zhezhaojin">
            <!--会员卡-->
            <section class="cardjin">
                <div class="card-rtopjin">
                    {{state}}
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "goldadd",
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
    .zhezhaojin{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.3);
        position: fixed;
        top:0;
        left:0;
    }
    .cardjin{
        width: 6.32rem;
        height: 4.89rem;
        position:fixed;
        top:4.23rem;
        left:0;
        right:0;
        margin:auto;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("../assets/images/jinbi.png") ;
    }
    .card-rtopjin{
        width: auto;
        height: 0.53rem;
        background: #fff;
        float:right;
        padding:0rem 0.2rem;
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

</style>