import Type from './mutation.type'

const { UN_LOADING, DO_LOADING } = Type

export default {
    [UN_LOADING](state) {
        state.isLoading = false
    },
    [DO_LOADING](state) {
        state.isLoading = true
    },
}