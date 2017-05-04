import api from '../api.js'
import * as types from '../types.js'

const state = {
	list:null,
    history:[]
}

const actions = {
}
const getters = {
    getMusicList: state => state.list,
    getMusicListHistory:state=>state.history
}

const mutations = {
    [types.MUSIC_LIST](state,res){
        state.list = res.musics
    },
    [types.MUSIC_LIST_HISTORY](state,content){
        if (state.history.length>=5) {
            state.history.shift()
        }
        state.history.push({value:content})
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}