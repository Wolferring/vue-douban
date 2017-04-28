import api from '../api.js'
import * as types from '../types.js'

const state = {
	detail:null
}

const actions = {
    //获取影片详情并设置标题
    getFilmDetail:function({commit},id){
        api.getFilmDetail(id,function(res){
            commit(types.COM_CONF,{
                title: res.title
            })
            commit(types.FILM_DETAIL,res);
        })
    },
}
const getters = {
    getFilmDetail: state => state.detail,
}

const mutations = {
    [types.FILM_DETAIL](state,res){
        state.detail = res
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}