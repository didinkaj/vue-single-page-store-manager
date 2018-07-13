const state = {

    category: [{
        id: 1,
        name: 'Computers:',
        icon: 'el-icon-menu',
    },
        {
            id: 2,
            name: 'Printers:',
            icon: 'el-icon-printer',
        },
        {
            id: 3,
            name: 'Computers:',
            icon: 'el-icon-goods',
        },
        {
            id: 4,
            name: 'Phones:',
            icon: 'el-icon-mobile-phone',
        },
        {
            id: 5,
            name: 'Accessories:',
            icon: 'el-icon-service',
        }
    ],

}

const getters = {
    category: state => state.category,
}

const mutations = {
    ADD_CATEGORY(state, data) {
        state.category.unshift(data)
    },
    DELETE_CATEGORY(state, data) {
        state.category.splice(state.category.indexOf(data), 1);
    }
};

const actions = {};

export default {
    state, getters, mutations, actions
}