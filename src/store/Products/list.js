const state = {
    products: [
        'sugar',
        'Bread',
        'milk'
    ],
    price : '20 dollara'
};

const getters = {
    products: state => state.products,
    price: state => state.price
};

const mutations = {};

const actions = {};

export default {
    state, getters, mutations, actions
}