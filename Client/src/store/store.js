import Vue from 'vue'
import Vuex from 'vuex'

import Loid from '@/utils/common/Loid'


Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        isLoading: true,
        pageTabs:{
            activePageName:'root-home-hello',
            pages:[{
                title: 'hello',
                src: 'root-home-hello',
                name: 'root-home-hello'
            },
            {
                title: 'Page_1',
                src: 'root-home-Page_1',
                name: 'root-home-Page_1'
            },
            {
                title: 'Page_2',
                src: 'root-home-Page_2',
                name: 'root-home-Page_2'
            }]
        },
        
        allPages: [
            {
                title: 'hello',
                src: 'root-home-hello',
                name: 'root-home-hello'
            },
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
        addPage(state, { title, src, props, index }) {
            let name = Loid('page')

            if (index) {
                state.pageTabs.pages.splice(index, 0, {
                    title,
                    src,
                    props,
                    name: name
                })
            } else {
                state.pageTabs.pages.push({
                    title,
                    src,
                    props,
                    name: name
                })
            }

            state.pageTabs.activePageName = name
        },
        removePage(state, index) {
            state.pageTabs.pages.splice(index, 1)
        },
        setPage(state,name){
            state.pageTabs.activePageName = name
        }
    }
})
