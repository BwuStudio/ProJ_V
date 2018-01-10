import root from './root/mod'
import routerLabel from '@/router/RouterLabel'


const RouterNamer = (mod, arr, name = '') => {
    if (mod.children) {
        mod.children.forEach((value) => {
            value.mod ? RouterNamer(value.mod,arr,name + (name?"-":'') + mod.name)
                : value.name && value.component ? arr.push({
                    name: name + "-" + mod.name + "-" + value.name,
                    component: value.component
                })
                    : ''
        })
    }
}

let RouterName = []

RouterNamer(root,RouterName)

export default RouterName