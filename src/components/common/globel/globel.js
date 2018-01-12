import Model from './modal'
import Input from './input'

export default {
    install: function (Vue) {
        Vue.component('bwu-modal', Model)
        Vue.component('bwu-input', Input)
    }
}