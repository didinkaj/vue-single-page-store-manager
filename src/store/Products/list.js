const state = {

    products: [{
        id:1,
        name: 'Laptops:',
        description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
        date: 'Posted on June 12, 2018 by',
        price: 600,
        img: '/static/img/laptop.737283c.jpg'
    },
        {
            id:2,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:3,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:4,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:5,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            img: '/static/img/laptop.737283c.jpg'
        },
        {
            id:6,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 400,
            img: '/static/img/laptop.737283c.jpg'
        }
    ],

}

const getters = {
    products: state => state.products,
    price: state => state.price
}

const mutations = {};

const actions = {};

export default {
    state, getters, mutations, actions
}