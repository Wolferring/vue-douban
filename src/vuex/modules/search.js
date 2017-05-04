import api from '../api.js'
import * as types from '../types.js'

const state = {
	searchResult:null
}

const actions = {
    getSearchResult:function({commit},payload){
    	console.log(payload)
        api.getSearchResult(payload,function(res){
            commit(types.MUSIC_LIST,res);
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
}

export default {
    state,
    actions,
    getters,
    mutations
}