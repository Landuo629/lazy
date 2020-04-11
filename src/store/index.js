import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        mohu: false,
        isActive: false,
        Search: "Search"
    },
    mutations: {
        mohu(state, n) {
            state.mohu = n
        },
        isActive(state, n) {
            state.isActive = n
        }
    }
})

export default store