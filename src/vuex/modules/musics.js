import api from '../api.js'
import * as types from '../types.js'

const state = {
	list:null
}

const actions = {
}
const getters = {
    getMusicList: state => state.list,
}

const mutations = {
    [types.MUSIC_LIST](state,res){
        state.list = res.musics
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}