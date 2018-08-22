
const state = {
    searchValue: '',


}

const getters = {
    searchValue: state => state.searchValue
}

const mutations = {
    SET_SEARCH_VALUE(state, userInfo) {
        state.searchValue = userInfo;
    },
    UNSET_SEARCH_VALUE(state){
        state.searchValue = ''
    }

};


const actions = {};

export default {
    state, getters, mutations, actions
}