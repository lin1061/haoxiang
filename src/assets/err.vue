<template>
  <div class="err">
    <img src="https://static.hxyouhuo.com/weixinBox@2x.png">
    <p class="p1">暂无数据</p>
  </div>
</template>

<script>
// import store from '../pages/counter/store'

export default {
	
}
</script>

<style scoped>
.err {
	text-align: center;
	position: fixed;
	/*z-index: 999;*/
	/*left: 0;*/
	/*top: 0;*/
	/*right: 0;*/
	/*bottom: 0;*/
}
.err img{
	width:5.15rem;
	height: 3.52rem;
	display: inline-block;
	margin-top: 3rem; 
	margin-left: 1.17rem;
}
.err .p1{
	font-size: .28rem;
	text-align: center;
	color: #a2a2a2;
}
.err .p2{
	font-size: .22rem;
	text-align: center;
	color: #a2a2a2;
	margin-top: .20rem;
}
</style>
