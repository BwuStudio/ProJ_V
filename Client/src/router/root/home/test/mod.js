import Hello from '@/components/pages/Hello'
import Page_1 from '@/components/pages/Page_1'
import Page_2 from '@/components/pages/Page_2'

export default {
    name: 'test',
    children: [
        { name: 'Page_1', component: Page_1 },
        { name: 'page_2', component: Page_2 },
        { name: 'hello', component: Hello },
    ]
}