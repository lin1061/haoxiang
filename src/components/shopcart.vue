<template>
	<div id="main" class="shopcart">
		<div v-if="cart.store.length>0 || cart.warehouse.length>0 ">
			<main>
				<!-- 门店直营 -->
				<div v-if="typeof(cart.store) != 'undefined' || typeof(cart.warehouse) != 'undefined'">
					<div class="eit" v-if="eit" @click="eitcard">编辑</div>
					<div class="eit" v-else @click="successcard">完成</div>
				</div>

				<div class="shopcart-itme" v-if="cart.store.length>0">
					<div class="shopcart-title border-1px">
						<div class="seller-checkbox" :class="{'checked':goodscart.store.length == cart.store.length}" @click="allgoodsrow(1)"></div>
						<div class="seller-name" >门店直营</div>
						<!-- <div class="seller-name">总仓包邮</div> -->

					</div>
					<div class="shopcart-cont border-1px" v-for="(item,index) in cart.store" :key=index>
						<div class="seller-checkbox" :class="{'checked':goodscart.store.indexOf(item.goods.goods_id)
          			>=0}" @click="onegoods(1,item.goods.goods_id,index)"></div>
						<router-link :to="{name:'goodshow',query:{goods_id:item.goods.goods_id}}">
							<div class="shopcart-thumb">
								<img :src="item.goods.goods_img">
							</div>
						</router-link>
						<div class="shopcart-info">
							<router-link :to="{name:'goodshow',query:{goods_id:item.goods.goods_id}}">
								<div class="shopcart-info-name">
									<div class="n1"><span style="text-decoration:none;color:#555555;">{{item.goods.goods_name}}</span></div>
									<!--<div class="n2"></div>-->
								</div>
								<div class="shopcart-info-pro">原价:{{item.goods.market_price}}</div>
								<div class="shopcart-info-rmb">会员价¥{{item.goods.shop_price}}</div>

							</router-link>
							<div class="shopcart-num">
								<span class="minus" @click="minus(item.id,index,1)"></span>
								<div class="goos-num">{{item.num}}</div>
								<span class="add" @click="add(item.id,index,1)"></span>
							</div>
						</div>
					</div>
				</div>
				<!-- 总仓包邮 -->
				<div class="shopcart-itme"  v-if="cart.warehouse.length>0">
					<div class="shopcart-title border-1px">
						<div class="seller-checkbox" :class="{'checked':goodscart.warehouse.length == cart.warehouse.length}" @click.stop="allgoodsrow(2)"></div>
						<!-- <div class="seller-name" >门店直营</div> -->
						<div class="seller-name">总仓包邮</div>
					</div>
					<div class="shopcart-cont border-1px" v-for="(item,index) in cart.warehouse" :key=index>
						<div class="seller-checkbox" :class="{'checked':goodscart.warehouse.indexOf(item.goods.goods_id)
          			>=0}" @click="onegoods(2,item.goods.goods_id,index)"></div>
						<router-link :to="{name:'goodshow',query:{goods_id:item.goods.goods_id}}">
							<div class="shopcart-thumb">
								<img :src="item.goods.goods_img">
							</div>
						</router-link>

						<div class="shopcart-info">
							<router-link :to="{name:'goodshow',query:{goods_id:item.goods.goods_id}}">
								<div class="shopcart-info-name" >
									<div class="n1"><span style="text-decoration:none;color:#555555;">{{item.goods.goods_name}}</span></div>
								</div>
								<div class="shopcart-info-pro">原价:{{item.goods.market_price}}</div>
								<div class="shopcart-info-rmb">会员价¥{{item.goods.shop_price}}</div>
							</router-link>

							<div class="shopcart-num">
								<span class="minus" @click="minus(item.id,index,2)"></span>
								<div class="goos-num">{{item.num}}</div>
								<span class="add" @click="add(item.id,index,2)"></span>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer class="footer">
				<router-link :to="{path:'/hxmember',query:{'user_id':user_id,'token':token}}" class="footer-vip" v-show="showbox">成为好象会员，享受会员特权。立即开通></router-link>
				<div class="footer-cont" v-if="eit">
					<div class="seller-checkbox" :class="{'checked':allcheck}" @click.stop="AllEhecked">全选</div>
					<div class="footer-num">
						<p class="num1"><label>合计：</label><span>¥ {{contmoney}}</span></p>
						<p class="num2">不含运费</p>
					</div>
					<div class="footer-btn" @click="postorder">去结算({{goodsnum}})</div>
				</div>
				<div class="footer-cont" v-if="!eit">
					<div class="seller-checkbox" :class="{'checked':allcheck}" @click.stop="AllEhecked">全选</div>
					<div class="footer-num"></div>
					<div class="footer-btn" @click="deletgoods">删除</div>
				</div>
			</footer>
		</div>
		<err v-else></err>
	</div>
</template>

<script>
    import { mapState } from 'vuex'
    import err from '@/assets/err'

    export default {
        name: "shopcart",
        data(){
            return{
                cart:[],
                types:"",
                num:0.00,
                shop_id:"",
                // contmoney:0,//总金额
                storecheck:true,//自营选中
                warehousecheck:true,//包邮选中
                eit:true,//默认编辑
                goodscart:{store:[],warehouse:[]},
                successcart:{},//确定购物车
                is_yellow_card:0,//默认不是黄卡会员
                showbox:false
            }
        },
        components: {
            err
        },
        computed: {
            ...mapState({
                user_id: state => state.user_id,
                token: state => state.token,
                university_id:state =>state.university_id,
                device:state =>state.device,
            }),
            // 去结算数量
            goodsnum(){
                return this.goodscart.store.length + this.goodscart.warehouse.length
            },
            // 全选
            allcheck(){
                return this.goodscart.store.length == this.cart.store.length && this.goodscart.warehouse.length == this.cart.warehouse.length
            },
            // 计算订单总金额
            contmoney(){
                let NUM=0.00;
                let that = this
                this.cart.store.forEach(function(v){
                    if(that.goodscart.store.indexOf(v.goods.goods_id) >= 0){
                        // 如果是会员用会员价计算
                        if(that.is_yellow_card == 1){
                            NUM += v.num*v.goods.shop_price;
                        }else {
                            NUM += v.num*v.goods.market_price;
                        }

                    }
                    //
                })
                this.cart.warehouse.forEach(function(v){
                    if(that.goodscart.warehouse.indexOf(v.goods.goods_id) >= 0){
                        // 如果是会员用会员价计算
                        if(that.is_yellow_card == 1){
                            NUM += v.num*v.goods.shop_price;

                        }else {
                            NUM += v.num*v.goods.market_price;
                        }

                    }
                })
                return NUM.toFixed(2)
            },
        },
        created(){
            this.init();
        },
		mounted:function(){
            console.log(this.university_id);
		},
        methods:{
            init(){
                // 获取用户跟人信息判断会员
                this.$axios.get('/user/get_info/'+this.user_id).then(res=>{
                    if(res.data.err_code == 0){
                        let myinfo =res.data.data.user_info.is_yellow_card;
                        this.is_yellow_card = myinfo

                    }
                })

                // if(this.is_yellow_card==0){
                //     this.showbox=!this.showbox;
                // }
				console.log(this.university_id);
                this.$axios.get('/user/shop_card',{params:{user_id:this.user_id,university_id:this.university_id}}).then(res=>{
                    if(res.data.err_code == 0){
                        let cartdata =res.data.data;
                        if(typeof(cartdata.store) == 'undefined'){
                            cartdata.store = [];
                        }
                        if(typeof(cartdata.warehouse) == 'undefined'){
                            cartdata.warehouse = [];
                        }
                        this.cart = cartdata;
                        this.goodscart.store = cartdata.store.map((val) =>{
                            return val.goods.goods_id;
                        });
                        this.goodscart.warehouse = cartdata.warehouse.map((val) =>{
                            return val.goods.goods_id;
                        });
                    }
                })
            },
            add(id,index,type){
                // type1=>门店直营,2=>总仓包邮
                // id 购物车id
                if(type == 1){
                    let Nums = this.cart.store[index].num;
                    this.$axios.get('/user/shop_card_num',
                        {params:{shop_card_id:id,num:Nums+1}}).then(res=>{
                        // 从新计算总金额
                        if(res.data.err_code == 0){
                            this.cart.store[index].num++;
                        }
                    })
                }else{
                    let Nums = this.cart.warehouse[index].num;
                    this.$axios.get('/user/shop_card_num',
                        {params:{shop_card_id:id,num:Nums+1}}).then(res=>{
                        // 从新计算总金额
                        if(res.data.err_code == 0){
                            this.cart.warehouse[index].num++;
                        }
                    })
                }


            },
            del(){
                this.$axios.get('/user/delete_shop_card',{params:{shop_card_id:this.shop_id}}).then(res=>{
                    console.log(res)
                })
            },
            minus(id,index,type){

                // type1=>门店直营,2=>总仓包邮
                // id 购物车id
                if(type == 1){
                    let Nums = this.cart.store[index].num;
                    if(Nums == 1) return;
                    this.$axios.get('/user/shop_card_num',
                        {params:{shop_card_id:id,num:Nums-1}}).then(res=>{
                        // 从新计算总金额
                        if(res.data.err_code == 0){
                            this.cart.store[index].num--;
                        }
                    })
                }else{
                    let Nums = this.cart.warehouse[index].num;
                    if(Nums == 1) return;
                    this.$axios.get('/user/shop_card_num',
                        {params:{shop_card_id:id,num:Nums-1}}).then(res=>{
                        // 从新计算总金额
                        if(res.data.err_code == 0){
                            this.cart.warehouse[index].num--;
                        }
                    })
                }
            },
            // 全选
            AllEhecked(){

                if(this.goodscart.store.length == this.cart.store.length && this.goodscart.warehouse.length == this.cart.warehouse.length){
                    this.goodscart.store = []
                    this.goodscart.warehouse = []
                }else{
                    this.goodscart.store = this.cart.store.map((val) =>{
                        return val.goods.goods_id;
                    });
                    this.goodscart.warehouse = this.cart.warehouse.map((val) =>{
                        return val.goods.goods_id;
                    });
                }

            },

            // 选中直营或者包邮
            allgoodsrow(type){
                if(type == 1){
                    if(this.goodscart.store.length == this.cart.store.length){
                        this.goodscart.store = []
                    }else{
                        this.goodscart.store = this.cart.store.map((val) =>{
                            return val.goods.goods_id;
                        });
                    }
                }
                if(type == 2){
                    if(this.goodscart.warehouse.length == this.cart.warehouse.length){
                        this.goodscart.warehouse = []
                    }else{
                        this.goodscart.warehouse = this.cart.warehouse.map((val) =>{
                            return val.goods.goods_id;
                        });
                    }
                }
            },
            // 选择单独商品
            onegoods(type,id,index){
                // type  1=>门店直营,2=>总仓包邮
                // index选中位置
                if(type == 1){
                    let idIndex = this.goodscart.store.indexOf(id)
                    if (idIndex >= 0) {//如果已经包含就去除
                        this.goodscart.store.splice(idIndex, 1)
                    } else {//如果没有包含就添加
                        this.goodscart.store.push(id)
                    }
                }else{
                    let idIndex = this.goodscart.warehouse.indexOf(id)
                    if (idIndex >= 0) {//如果已经包含就去除
                        this.goodscart.warehouse.splice(index, 1)
                    } else {//如果没有包含就添加
                        this.goodscart.warehouse.push(id)
                    }
                }
            },
            // 编辑购物车
            eitcard(){
                this.eit = false;
            },
            // 完成购物车
            successcard(){
                this.eit = true;
            },
            // 提交订单
            postorder(){
                this.cartgoodsinfo();
                this.$router.push({path:'/confirmorder1',query:{user_id:this.user_id,token:this.token,university_id:this.university_id,device:this.device}})
                jsObj.SetTitle("确认订单")


            },
            // 统计购物车选中
            cartgoodsinfo(){
                let store=[];
                let warehouse= [];
                let that = this
                this.cart.store.forEach(function(v){
                    if(that.goodscart.store.indexOf(v.goods.goods_id) >= 0){
                        store.push(v)
                    }
                    //
                })
                this.cart.warehouse.forEach(function(v){
                    if(that.goodscart.warehouse.indexOf(v.goods.goods_id) >= 0){
                        warehouse.push(v)
                    }
                })
                that.successcart.store = store;
                that.successcart.warehouse = warehouse;
                this.$store.commit('setgoodsinfo',that.successcart)
            },
            // 删除购物车
            deletgoods(){
                this.cartgoodsinfo()
                let that = this;
                if(this.successcart.store.length >0){

                    this.successcart.store.map(v=>{
                        that.deletgoodsapi(v.id)
                    })
                }
                if(this.successcart.warehouse.length >0){
                    this.successcart.warehouse.map(v=>{
                        that.deletgoodsapi(v.id)
                    })
                }
            },
            deletgoodsapi(id){
                // 购物车id
                this.$axios.get('/user/delete_shop_card',{params:{'shop_card_id':id}}).then(res=>{
                    if(res.data.err_code == 0){
                        let that = this
                        setTimeout(function(){
                            that.successcard()
                        },500)
                        this.init();
                    }
                })
            }
            //
        }
    }
</script>

<style lang="less"  scoped>
	.eit{
		font-size: 12px;
		color: #868686;
		position: absolute;
		top:10px;
		right: 5px;
		z-index: 99;
	}
	.border-1px{
		&:after{
			content: "";
			display: block;
			height: 1px;
			background: #d4d7da;
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
		}
	}
	.seller-checkbox{
		margin-right: 0.2rem;
	}
	.shopcart{
		main{
			padding-bottom: 1.4rem;
		}
		.shopcart-itme{
			background: #fff;
			/*margin-top: 0.15rem;*/
		}
		.shopcart-title{
			position: relative;
			padding: 0 0.24rem;
			height: 0.85rem;
			display: flex;
			align-items: center;

			.seller-name{
				font-size: 0.28rem;
				flex: 1;
				color: #323a45;
			}
			.seller-del{
				background: url(../assets/images/s@2x.png) no-repeat;
				width: 0.32rem;
				height: 0.32rem;
				margin-right: 0.2rem;
				background-size: 0.32rem 0.32rem;
				display: inline-block;
			}

		}
		.shopcart-cont{
			padding: 0.2rem 0.24rem;
			position: relative;
			display: flex;
			align-items: center;
		}
		.shopcart-thumb{
			width: 2rem;
			height: 1.7rem;
			margin-right: 0.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.shopcart-info{
			flex: 1;
			position: relative;
			.shopcart-info-name{
				display: flex;
				align-items: top;
				font-size: 0.26rem;
				height: 0.7rem;
				overflow: hidden;
				line-height: 0.35rem
			}
			.shopcart-info-pro{
				font-size: 0.24rem;
				color: #8a959e;
			}
			.shopcart-info-rmb{
				font-size: 0.28rem;
				font-weight: bold;
				color: #f84848;
				margin-top: 0.1rem;
				text-decoration: none;
			}
			.n1{
				flex: 1;
			}
			.n2{
				background: url(../assets/images/b@2x.png) no-repeat;
				width: 0.32rem;
				height: 0.34rem;
				background-size: 0.32rem 0.34rem;
			}
			.shopcart-num{
				position: absolute;
				right: 0;
				bottom: 0;

				height: 0.4rem;
				font-size: 0;
				span{
					display: inline-block;
					vertical-align: middle;
				}
			}
			.goos-num{
				display: inline-block;
				font-size: 0.28rem;
				color: #323a45;
				padding-top: 0.04rem;
				width: 0.4rem;
				text-align: center;
				height: 0.4rem;
				border:none;
				vertical-align: middle;
				margin: 0 0.05rem;
				outline: none;
			}
		}
		.footer{
			position: fixed;
			transform: translateZ(0);
			/*height: 1.4rem;*/
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			background: #fff;
			.footer-vip{
				height: 0.4rem;
				font-size: 0.24rem;
				color: #fff;
				text-align: center;
				line-height: 0.4rem;
				background: #b5b6b7;
				display:block;
			}
			.footer-cont{
				height: 1rem;
				display: flex;
				align-items: center;
				.seller-checkbox{
					font-size: 0.28rem;
					width: 1.15rem;
					padding-left: 0.5rem;
					height: 0.4rem;
					background-position: left center;
					margin-left: 0.24rem;
					margin-right: 0.5rem;
				}
			}
			.footer-num{
				flex: 1;
			}
			.num1{
				font-size: 0;
				text-align: right;
				label{
					font-size: 0.36rem;
					color: #282828;
				}
				span{
					font-size: 0.32rem;
					color: #fc5459;
				}
			}
			.num2{
				text-align: right;
				font-size: 0.24rem;
				color: #8a959e;
			}
			.footer-btn{
				width: 2.8rem;
				height: 1rem;
				text-align: center;
				color: #fff;
				font-size: 0.38rem;
				background: url(../assets/images/header@2x.png);
				background-size: 2.8rem 1rem;
				line-height: 1rem;
				margin-left: 0.34rem;
			}
		}
	}

</style>