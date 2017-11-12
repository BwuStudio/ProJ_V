import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/pages/Hello'
import Page_1 from '../components/pages/Page_1'
import Page_2 from '../components/pages/Page_2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:
       {
          'page1':Page_1,
          'hel_lo':Hello,
        }
    },
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/page_1',
      component: Page_1
    },
    {
      path: '/page_2',
      component: Page_2
    }
    
  ]
})
