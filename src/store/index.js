import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	isLoading: true
}

const actions = {

}

const mutations = {
	updateLoadingStatus:function (state, payload) {
      state.isLoading = payload.isLoading
    }
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})