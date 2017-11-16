import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        isLoading: true,
        allPages: [
            { title: 'hello', src: 'root-home-hello', name: 'root-home-hello' },
            {
                title: 'Page_1',
                src: 'root-home-Page_1',
                name: 'root-home-Page_1'
            },
            {
                title: 'Page_2',
                src: 'root-home-Page_2',
                name: 'root-home-Page_2'
            }
        ]
    },
    mutations: {
        unLoading(state) {
            state.isLoading = false
        },

        doLoading(state) {
            state.isLoading = true
        },
        addPage(state,{title, src, prop, index}) {
            if (index) {
                state.allPages.splice(index, 0, {
                    title,
                    src,
                    props,
                    name: src
                })
            } else {
                state.allPages.push({
                    title,
                    src,
                    props,
                    name: src
                })
            }
            state.allPages
        },
        removePage(state,index) {
            state.allPages.splice(index,0)
        }
    }
})
