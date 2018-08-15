import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const state={
    userinfo:{
        token:null,
        uid:null,
        schoolId:null,
        schoolName:null
    }
}
const mutations={
    updateUserInfo(state,payload){
        state.userinfo.token=payload.token,
        state.userinfo.uid=payload.uid,
        state.userinfo.schoolId=payload.schoolId,
        state.userinfo.schoolName=payload.schoolName
    }
}
const actions={
    dologin({commit,dispath},payload){
        if(res){
            commit('updataUserInfo',{
                token:res.token,
                uid:res.uid,
                schoolId:res.schoolId,
                schoolName:res.schoolName
            })
        }else{
            // TODO:login failure
        }
    }
}
const getters={
    userinfo:(state)=>state.userinfo
}
export default {
    state,
    mutations,
    actions,
    getters
}