import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //背景模糊
        mohu: false,
        //句子
        isActive: false,
        isActive2: true,
        //设置关闭
        ejectClose : false,
        regular: false,
        background: false,
        //控制输入框
        search: true,
        //控制背景图片
        images: "background: url(" +
        require("assets/img/0.jpg") +
        ") center top / cover no-repeat fixed"
    },
    mutations: {
        mohu(state, n) {
            state.mohu = n
        },
        isActive(state, n) {
            state.isActive = n
        },
        isActive2(state, n){
            state.isActive2 = n
        },
        ejectClose(state, n) {
            state.ejectClose = n
        },
        regular(state, n) {
            state.regular = n
        },
        background(state, n) {
            state.background = n
        },
        search(state, n) {
            state.search = n
        },
        images(state, n) {
            state.images = n
        },
    }
})

export default store