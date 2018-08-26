<template>
    <div id="main">
        <main>
            <div class="img">
                <img src="../assets/images/success.png" alt="">
                <span>订单支付成功</span>
                <router-link :to="{path:'/myorder/20',query:{'user_id':user_id,'token':token,'university_id':university_id}}">
                    <button class="anniu" @click="goorder"></button>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "paysuccess",
        data(){
            return{

            }
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                token: state => state.token,
                university_id: state => state.university_id
            }),
        },
        methods:{
            goorder(){
                jsObj.SetTitle("全部订单")
            }
        }
    }
</script>

<style scoped>
    main{
        background: #f5f5f5;
        width: 100vw;
        height: 100vh;
        float:left;
    }
    .img{
        width: 3.87rem;
        height: 3.93rem;
        margin-top:1.23rem;
        margin-left:1.62rem
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .img span{
        display: block;
        font-size:0.46rem;
        color:#89969f;
        text-align: center;
    }
    .anniu{
        width: 100%;
        height: 1.5rem;
        border:none;
        outline: none;
        background: url("../assets/images/watch_order.png") no-repeat center/cover;
        margin-top: 1.44rem;
    }
</style>