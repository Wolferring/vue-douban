import api from '../api'
import * as types from '../types'

const state = {
    now:[],
    coming:[]
}

const actions = {
    //获取banner列表
    getNowList:function({commit}){
        api.getNowList(function(res){
            commit(types.NOWPLAY_LIST,res);
        })
    },
    getComingList:function({commit}){
        api.getComingList(function(res){
            commit(types.COMING_LIST,res)
        })
    }
}
const getters = {
    getNowList: state => state.now,
    getComingList: state=> state.coming
}

const mutations = {
    [types.NOWPLAY_LIST](state,res){
        state.now = res
    },
    [types.COMING_LIST](state,res){
        state.coming = res
    },    
}

export default {
    state,
    actions,
    getters,
    mutations
}