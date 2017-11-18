import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/pages/Hello'
import Page_1 from '@/components/pages/Page_1'
import Page_2 from '@/components/pages/Page_2'

import RouterName from './RouterName'
import RouterLabel from './RouterLabel'

Vue.use(Router)

// console.log(RouterName)

// console.log(RouterLabel)

let name_component = {}

RouterName.forEach(value => {
    name_component[value.name] = value.component
})

console.log(name_component)


export default new Router({
    routes: [
        {
            path: '/',
            components: name_component
        }
    ]
})
