const state = {

    products: [{
        id:1,
        name: 'Laptops:',
        description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
        date: 'Posted on June 12, 2018 by',
        price: 600,
        category_id:1,
        img: '/static/img/laptop.737283c.jpg'
    },
        {
            id:2,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            category_id:2,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:3,
            name: 'Laptops Hp:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            category_id:3,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:4,
            name: 'Laptops Toshiba:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            category_id:4,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:5,
            name: 'Laptops Accer:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            category_id:5,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:6,
            name: 'Laptops Mac:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 1400,
            category_id:5,
            img: '/static/img/laptop.737283c.jpg'
        }
    ],

}

const getters = {
    products: state => state.products,
    price: state => state.price,
    productCount: state => state.products.length
}

const mutations = {
    ADD_PRODUCT(state, data){
        state.products.unshift(data)
    },
    DELETE_PRODUCT(state, data){
    state.products.splice( state.products.indexOf(data), 1 );
}
};

const actions = {};

export default {
    state, getters, mutations, actions
}