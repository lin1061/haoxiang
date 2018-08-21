<template>
    <div id="main" class="shopcart">
        <main>
        	<!-- 门店直营 -->
        	<div v-if="typeof(cart.store) != 'undefined' || typeof(cart.warehouse) != 'undefined'">
        		<div class="eit" v-if="eit" @click="eitcard">编辑</div>
          		<div class="eit" v-else @click="successcard">完成</div>
        	</div>
        	
          	<div class="shopcart-itme" v-if="typeof(cart.store) != 'undefined'">
          		<div class="shopcart-title border-1px">
          			<div class="seller-checkbox" :class="{'checked':storecheck}" @click="allgoodsrow(1)"></div>
          			<div class="seller-name" >门店直营</div>
          			<!-- <div class="seller-name">总仓包邮</div> -->
          			
          		</div>
          		<div class="shopcart-cont border-1px" v-for="(item,index) in cart.store" :key=index>
          			<div class="seller-checkbox" :class="{'checked':goodscart.store.indexOf(item) <= -1}" @click="onegoods(1,index)">{{goodscart.store.indexOf(item) <= -1}}</div>
          			<div class="shopcart-thumb">
          				<img :src="item.goods.goods_img">
          			</div>
          			<div class="shopcart-info">
          				<div class="shopcart-info-name">
          					<div class="n1">{{item.goods.goods_name}}</div>
          					<!--<div class="n2"></div>-->
          				</div>
          				<div class="shopcart-info-pro">原价:{{item.goods.market_price}}</div>
          				<div class="shopcart-info-rmb">会员价¥{{item.goods.shop_price}}</div>
          				<div class="shopcart-num">
          					<span class="minus" @click="minus(item.id,index,1)"></span>
							<div class="goos-num">{{item.num}}</div>
          					<span class="add" @click="add(item.id,index,1)"></span>
          				</div>	
          			</div>
          		</div>
          	</div>
          	<!-- 总仓包邮 -->
          	<div class="shopcart-itme"  v-if="typeof(cart.warehouse) != 'undefined'">
          		<div class="shopcart-title border-1px">
          			<div class="seller-checkbox" :class="{'checked':warehousecheck}" @click.stop="allgoodsrow(2)"></div>
          			<!-- <div class="seller-name" >门店直营</div> -->
          			<div class="seller-name">总仓包邮</div>
          		</div>
          		<div class="shopcart-cont border-1px" v-for="(item,index) in cart.warehouse" :key=index>
          			<div class="seller-checkbox" :class="{'checked':item.checkeds}" @click="onegoods(1,index)"></div>
          			<div class="shopcart-thumb">
          				<img :src="item.goods.goods_img">
          			</div>
          			<div class="shopcart-info">
          				<div class="shopcart-info-name">
          					<div class="n1">{{item.goods.goods_name}}</div>
          					<!--<div class="n2"></div>-->
          				</div>
          				<div class="shopcart-info-pro">原价:{{item.goods.market_price}}</div>
          				<div class="shopcart-info-rmb">会员价¥{{item.goods.shop_price}}</div>
          				<div class="shopcart-num">
          					<span class="minus" @click="minus(item.id,index,1)"></span>
							<div class="goos-num">{{item.num}}</div>
          					<span class="add" @click="add(item.id,index,1)"></span>
          				</div>	
          			</div>
          		</div>
          	</div>
        </main>
        <footer class="footer">
        	<div class="footer-vip">成为好象会员，享受会员特权。立即开通></div>
        	<div class="footer-cont" v-if="eit">
        		<div class="seller-checkbox" :class="{'checked':allcheck}" @click.stop="AllEhecked">全选</div>
        		<div class="footer-num">
        			<p class="num1"><label>合计：</label><span>¥ {{contmoney}}</span></p>
        			<p class="num2">不含运费</p>
        		</div>
        		<div class="footer-btn">去结算({{goodsnum}})</div>
        	</div>
        	<div class="footer-cont" v-if="!eit">
        		<div class="seller-checkbox" :class="{'checked':allcheck}" @click.stop="AllEhecked">全选</div>
        		<div class="footer-num">
        			
        		</div>
        		<div class="footer-btn">删除</div>
        	</div>
        </footer>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "shopcart",
		data(){
            return{
                cart:[],
				types:"",
				num:0,
				shop_id:"",
				allcheck:true,//默认全选
				contmoney:0,//总金额
				storecheck:true,//自营选中
				warehousecheck:true,//包邮选中
				eit:true,//默认编辑
				goodscart:{store:{},warehouse:{}}
			}
		},
        computed: {
            ...mapState({
                user_id: state => state.user_id,
            }),
            // 去结算数量
            goodsnum(){
            	// return this.cart.warehouse.length + this.cart.store.length
            	return 0
            }
        },
        created(){
        	this.$axios.get('/user/shop_card',{params:{user_id:this.user_id}}).then(res=>{
			    this.cart=res.data.data;
			    this.goodscart.store = JSON.parse(JSON.stringify(res.data.data.store)) || "";
			    this.goodscart.warehouse = JSON.parse(JSON.stringify(res.data.data.warehouse)) || "";
			    if(typeof(this.cart.warehouse) != 'undefined'){
				    this.cart.warehouse.map((val,indx)=>{
				    	val.checkeds = true;
				    	return val
				    })
				}
			    if(typeof(this.cart.store) != 'undefined'){
				    this.cart.store.map((val,indx)=>{
				    	val.checkeds = true;
				    	return val
				    })
				}
			    this.Allmoney();

			    console.log(this.goodscart)
			})

        },
		// mounted:function () {
		// 	this.Allmoney();
  //       },
		methods:{
            add(id,index,type){
            	// type1=>门店直营,2=>总仓包邮
            	// id 购物车id
            	if(type == 1){
            		let Nums = this.cart.store[index].num;
					this.$axios.get('/user/shop_card_num',
						{params:{shop_card_id:id,num:Nums+1}}).then(res=>{
							// 从新计算总金额
							this.cart.store[index].num++;
	                		this.Allmoney()
					})
            	}else{
            		let Nums = this.cart.warehouse[index].num;
					this.$axios.get('/user/shop_card_num',
						{params:{shop_card_id:id,num:Nums+1}}).then(res=>{
							// 从新计算总金额
							this.cart.warehouse[index].num++;
	                		this.Allmoney()
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
					this.$axios.get('/user/shop_card_num',
						{params:{shop_card_id:id,num:Nums-1}}).then(res=>{
							// 从新计算总金额
							this.cart.store[index].num--;
	                		this.Allmoney()
					})
            	}else{
            		let Nums = this.cart.warehouse[index].num;
					this.$axios.get('/user/shop_card_num',
						{params:{shop_card_id:id,num:Nums-1}}).then(res=>{
							// 从新计算总金额
							this.cart.warehouse[index].num--;
	                		this.Allmoney()
					})
            	}
			},
			// 全选
			AllEhecked(){
				this.allcheck = !this.allcheck;
				// 全选
				if(this.allcheck){
					if(typeof(this.cart.warehouse) != 'undefined'){
						this.cart.warehouse.map((val,indx)=>{
							val.checkeds = true;
							return val
						})
						this.warehousecheck = true;
					}
					if(typeof(this.cart.store) != 'undefined'){
						this.cart.store.map((val,indx)=>{
							val.checkeds = true;
							return val
						})
						this.storecheck = true;
					}
				}else{
					if(typeof(this.cart.warehouse) != 'undefined'){
						this.cart.warehouse.map((val,indx)=>{
							val.checkeds = false;
							return val
						})
						this.warehousecheck = false;
					}

					if(typeof(this.cart.store) != 'undefined'){
						this.cart.store.map((val,indx)=>{
							val.checkeds = false;
							return val
						})
						this.storecheck = false;
					}
					
				}
				
			},
			// 计算订单总金额
			Allmoney(){
				let NUM = 0;
				if(typeof(this.cart.store) != 'undefined'){
					this.cart.store.map((val,indx)=>{
						NUM += val.num*val.goods.shop_price;
					})
				}
				if(typeof(this.cart.warehouse) != 'undefined'){
					this.cart.warehouse.map((val,indx)=>{
						NUM += val.num*val.goods.shop_price;
					})
				}
				this.contmoney = NUM;
			},
			// 选中直营或者包邮
			allgoodsrow(type){
				// type1=>门店直营,2=>总仓包邮
				if(type == 1){
					if(!this.storecheck){
						this.cart.store.map((val,indx)=>{
							val.checkeds = true;
							return val
						})
						this.storecheck = true;
					}else{
						this.cart.store.map((val,indx)=>{
							val.checkeds = false;
							return val
						})
						this.storecheck = false;
					}

				}else{
					if(!this.warehousecheck){
						this.cart.warehouse.map((val,indx)=>{
							val.checkeds = true;
							return val
						})
						this.warehousecheck = true;
					}else{
						this.cart.warehouse.map((val,indx)=>{
							val.checkeds = false;
							return val
						})
						this.warehousecheck = false;
					}
				}
			},
			// 选择单独商品
			onegoods(type,indexs){
				// type  1=>门店直营,2=>总仓包邮
				// index选中位置
				this.goodscart.store.splice(indexs,1);		
				// if(typeof(this.cart.warehouse) != 'undefined'){
				// 	this.cart.warehouse[indexs].checkeds = !this.cart.warehouse[indexs].checkeds
				// 	this.warehousecheck = false;
				// 	this.allcheck = false
				// }
					
				console.log(this.goodscart)
			},
			// 编辑购物车
			eitcard(){
				this.eit = false;
			},
			// 完成购物车
			successcard(){
				this.eit = true;
			}
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
	    	height: 1.4rem;
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