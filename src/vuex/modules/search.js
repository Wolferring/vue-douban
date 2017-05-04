import api from '../api.js'
import * as types from '../types.js'

const state = {
	searchResult:null
}

const actions = {
    getSearchResult:function({commit},payload){
        commit(types.LOADING_STATE,true)
        commit(types[payload.field+'_HISTORY'],payload.content)
        api.getSearchResult(payload,function(res){
            commit(types[payload.field],res);
            commit(types.LOADING_STATE,false)
        })
    },
}
const getters = {
    getSearchResult: state => state.searchResult,
}

const mutations = {
    [types.MUSIC_LIST](state,res){
        state.MUSIC_LIST = res
    },
    [types.BOOK_LIST](state,res){
        state.BOOK_LIST = res
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}