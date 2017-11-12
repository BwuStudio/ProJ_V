import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        isLoading: true,
        openPage:[{title:'',src:''}]

    },
    mutations: {
        unLoading(state) {
            state.isLoading = false
        },

        doLoading(state) {
            state.isLoading = true
        }
    }
})
