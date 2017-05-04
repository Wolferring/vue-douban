import api from '../api.js'
import * as types from '../types.js'

const state = {
    list:null
}

const actions = {
}
const getters = {
    getBookList: state => state.list,
}

const mutations = {
    [types.BOOK_LIST](state,res){
        state.list = res.books
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}