import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	isLoading: true,
    goods_id:"",//商品id
    token:"",  //token
    user_id:"", //用户id
    university_id:"",//高校id
    activity_id:"",  //活动id
    business_id:"",  //商家id
    longitude:"",  //当前定位经度
    latitude:"",    //当前定位纬度
    device:""

}

const actions = {

}

const mutations = {
	updateLoadingStatus:function (state, payload) {
      state.isLoading = payload.isLoading
    },
    // 设置app数据
    setappinfo:function(state,app){
        state.goods_id = app.goods_id
        state.token = app.token
        state.user_id = app.user_id
        state.university_id = app.university_id
        state.activity_id = app.activity_id
        state.business_id = app.business_id
        state.longitude = app.longitude
        state.latitude = app.latitude
        state.device=app.device

    },
    //设置购物车数据
    setgoodsinfo:function (state,info) {
        state.goodscard = info
    }
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})