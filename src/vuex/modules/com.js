import * as types from '../types.js'

const state = {
	title:'',
	loading:0,
	leftNavState:false,
    share:false
}

const actions = {
	comConf({commit},settings){
		commit(types.COM_CONF,settings)
	},
    changeLoadingState({commit},state){
        commit(types.LOADING_STATE,state)
    }
}

const getters = {
	comConf:state=>state,
	loading:state=>state.loading,
	title:state=>state.title,
    share:state=>state.share,
}

const mutations = {
    [types.COM_CONF](state,settings){
        state = Object.assign(state,settings)
    },
    [types.LOADING_STATE](state,status){
        if(state.loading == 0 && !status){
            return ;
        }
        state.loading = status ? ++state.loading : --state.loading;
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}