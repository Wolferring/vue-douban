import api from '../api.js'
import * as types from '../types.js'

const state = {
    list:null,
    history:[]
}

const actions = {
}
const getters = {
    getBookList: state => state.list,
    getBookListHistory:state=>state.history

}

const mutations = {
    [types.BOOK_LIST](state,res){
        state.list = res.books
    },
    [types.BOOK_LIST_HISTORY](state,content){
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