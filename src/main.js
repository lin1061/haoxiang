// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem.js'
import axios from 'axios'
import { Toast } from 'vux'
Vue.component('toast', Toast)
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
    let latitude = to.query.latitude || "";
    let goods_type = to.query.goods_type || "";
    let device = to.query.device || "";
    // add
    let university_name = "";
    if(to.query.university_name){
      localStorage.setItem('university_name', to.query.university_name);//缓存高校名称
      university_name = to.query.university_name
    }else {
      university_name = localStorage.getItem('university_name') || ""
    }
    
	store.commit('updateLoadingStatus', {isLoading: true})

	store.commit('setappinfo', {goods_id: goods_id,token: token,user_id: user_id,university_id: university_id,activity_id:activity_id,business_id:business_id,longitude:longitude,latitude:latitude,goods_type:goods_type,device:device,university_name:university_name})
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
