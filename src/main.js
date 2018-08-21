// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem.js'
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://total.hxyouhuo.com/api'
router.beforeEach(function (to, from, next) {
	// 接收router参数
	let goods_id = to.query.goods_id || "";
	let token = to.query.token || "";
	let user_id = to.query.user_id || "";
	let university_id = to.query.university_id || "";
    let activity_id = to.query.activity_id || "";
    let business_id = to.query.business_id || "";
    let longitude = to.query.longitude || "";
    let laitude = to.query.laitude || "";
    let goods_type = to.query.goods_type || "";
	store.commit('updateLoadingStatus', {isLoading: true})

	store.commit('setappinfo', {goods_id: goods_id,token: token,user_id: user_id,university_id: university_id,activity_id:activity_id,business_id:business_id,longitude:longitude,laitude:laitude,goods_type:goods_type})
	next()
    axios.defaults.headers.common['Authorization'] ='Bearer ' +token;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
})

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({	
  	router,
  	store,
  	render: h => h(App)
}).$mount('#app-box')
