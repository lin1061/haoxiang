import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	isLoading: true,
    goods_id:"",//商品id
    token:"",
    user_id:"",
    university_id:"",//高校id
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
    }
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})