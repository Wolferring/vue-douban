import api from '../api.js'
import * as types from '../types.js'

const state = {
	books:[]
}

const actions = {
    //获取影片详情并设置标题

}
const getters = {
    getBookList: state => state.books,
}

const mutations = {
    [types.BOOK_LIST](state,res){
        state.books = res
    },
}

export default {
    state,
    actions,
    getters,
    mutations
}