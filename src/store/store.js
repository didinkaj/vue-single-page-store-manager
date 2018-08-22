import Vue from 'vue'
import Vuex from 'vuex'
import List from './Products/list'
import Users from './users/users'
import Cart from './shopping/cart'
import SideBarItems from './Products/category'
import Search from './search/search'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        names: 'Johnson Didinya Cytonnaire',
        age: 26,
        dob: '20/08/1990'

    },
    mutations: {
        updateName(state, name) {
            state.names = name
        }

    },
    getters: {},
    actions: {},
    modules: {
        List, Users, Cart, SideBarItems,Search
    }
});


export default store