<template>
    <div id="main" class="shopcart">
        <main>
          	<div class="shopcart-itme">
          		<div class="shopcart-title border-1px">
          			<div class="seller-checkbox checked"></div>
          			<div class="seller-name">门店自营</div>
          			<div class="seller-del"></div>
          		</div>
          		<div class="shopcart-cont border-1px">
          			<div class="seller-checkbox"></div>
          			<div class="shopcart-thumb">
          				<img src="../assets/images/banner2@2x.png">
          			</div>
          			<div class="shopcart-info">
          				<div class="shopcart-info-name">
          					<div class="n1">这是标题这是标题这是标题这是标题这是标题</div>
          					<div class="n2"></div>
          				</div>
          				<div class="shopcart-info-pro">10g</div>
          				<div class="shopcart-info-rmb">¥65</div>
          				<div class="shopcart-num">
          					<span class="minus"></span>
          					<input class="goos-num" type="text" name="" value="1" readonly="readonly">
          					<span class="add"></span>
          				</div>	
          			</div>
          		</div>
          		<div class="shopcart-cont border-1px">
          			<div class="seller-checkbox"></div>
          			<div class="shopcart-thumb">
          				<img src="../assets/images/banner2@2x.png">
          			</div>
          			<div class="shopcart-info">
          				<div class="shopcart-info-name">
          					<div class="n1">这是标题这是标题这是标题这是标题这是标题</div>
          					<div class="n2"></div>
          				</div>
          				<div class="shopcart-info-pro">10g</div>
          				<div class="shopcart-info-rmb">¥65</div>
          				<div class="shopcart-num">
          					<span class="minus"></span>
          					<input class="goos-num" type="text" name="" value="1" readonly="readonly">
          					<span class="add"></span>
          				</div>	
          			</div>
          		</div>
          	</div>
          	<div class="shopcart-itme">
          		<div class="shopcart-title border-1px">
          			<div class="seller-checkbox checked"></div>
          			<div class="seller-name">重仓邮寄</div>
          			<div class="seller-del"></div>
          		</div>
          		<div class="shopcart-cont border-1px">
          			<div class="seller-checkbox"></div>
          			<div class="shopcart-thumb">
          				<img src="../assets/images/banner2@2x.png">
          			</div>
          			<div class="shopcart-info">
          				<div class="shopcart-info-name">
          					<div class="n1">这是标题这是标题这是标题这是标题这是标题</div>
          					<div class="n2"></div>
          				</div>
          				<div class="shopcart-info-pro">10g</div>
          				<div class="shopcart-info-rmb">¥65</div>
          				<div class="shopcart-num">
          					<span class="minus"></span>
          					<input class="goos-num" type="text" name="" value="1" readonly="readonly">
          					<span class="add"></span>
          				</div>	
          			</div>
          		</div>
          		<div class="shopcart-cont border-1px">
          			<div class="seller-checkbox"></div>
          			<div class="shopcart-thumb">
          				<img src="../assets/images/banner2@2x.png">
          			</div>
          			<div class="shopcart-info">
          				<div class="shopcart-info-name">
          					<div class="n1">这是标题这是标题这是标题这是标题这是标题</div>
          					<div class="n2"></div>
          				</div>
          				<div class="shopcart-info-pro">10g</div>
          				<div class="shopcart-info-rmb">¥65</div>
          				<div class="shopcart-num">
          					<span class="minus"></span>
          					<input class="goos-num" type="text" name="" value="1" readonly="readonly">
          					<span class="add"></span>
          				</div>	
          			</div>
          		</div>
          	</div>
        </main>
        <footer class="footer">
        	<div class="footer-vip">成为好象会员，享受会员特权。立即开通></div>
        	<div class="footer-cont">
        		<div class="seller-checkbox checked">全选</div>
        		<div class="footer-num">
        			<p class="num1"><label>合计：</label><span>¥ 130</span></p>
        			<p class="num2">不含运费</p>
        		</div>
        		<div class="footer-btn">去结算(3)</div>
        	</div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "shopcart"
    }
</script>

<style lang="less" scoped>
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
			margin-top: 0.15rem;
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
	    		font-size: 0.26rem;
	    		color: #323a45;
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