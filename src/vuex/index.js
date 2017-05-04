import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com.js'
import home from './modules/home.js'
import detail from './modules/detail.js'
import user from './modules/user.js'
import music from './modules/musics.js'
import search from './modules/search.js'
import book from './modules/books.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
    	home,
    	com,
    	detail,
    	user,
    	music,
    	search,
    	book
    },
    strict:process.env.NODE_ENV !== 'production'
})

export default store;