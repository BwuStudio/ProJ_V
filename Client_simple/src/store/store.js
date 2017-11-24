import Vue from 'vue'
import Vuex from 'vuex'

import PageTabs_Type from './modules/pageTab/mutation.type'
import PageTabs from './modules/pageTab/pageTabs'

import Loading_Type from './modules/loading/mutation.type'
import Loading from './modules/loading/loading'

import User_Type from './modules/user/mutation.type'
import User from './modules/user/user'

console.log(Loading_Type.mod)

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules:{
        [PageTabs_Type.mod]:PageTabs,
        [Loading_Type.mod]:Loading,
        [User_Type.mod]:User,
    }
})
