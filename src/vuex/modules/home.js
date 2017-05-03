import api from '../api'
import * as types from '../types'

const state = {
    now:[],
    coming:[]
}

const actions = {
    //获取banner列表
    getNowList:function({commit}){
        commit(types.LOADING_STATE,true)

        api.getNowList(function(res){
            commit(types.NOWPLAY_LIST,res);
            commit(types.LOADING_STATE,false)

        })

    },
    getComingList:function({commit}){
        commit(types.LOADING_STATE,true)

        api.getComingList(function(res){
            commit(types.COMING_LIST,res)
            commit(types.LOADING_STATE,false)

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