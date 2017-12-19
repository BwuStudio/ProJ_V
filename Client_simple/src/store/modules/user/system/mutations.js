import Type from './mutation.type'

const {INIT_MOD, CHANGE_MOD} = Type

export default {
    [INIT_MOD](state) {},
    [CHANGE_MOD](state, nid) {
        state.active = nid ? nid : state.modules[0].nid
    }
}
