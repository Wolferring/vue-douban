import api from '../api.js'
import * as types from '../types.js'

const state = {
	user:null
}

const actions = {
    //获取影片详情并设置标题
    getUserInfo:function({commit},id){
        commit(types.LOADING_STATE,true)
        api.getUserInfo(id,function(res){
            commit(types.COM_CONF,{
                title: res.name
            })
            commit(types.USER_INFO,res);
            commit(types.LOADING_STATE,false)
        })
    },
}
const getters = {
    getUserInfo: state => state.user,
}

const mutations = {
    [types.USER_INFO](state,res){
        state.user = res
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}