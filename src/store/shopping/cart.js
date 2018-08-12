const state = {
    cartItems: [{
        id:1,
        product_id:3,
        user_id:1,
        name: 'Laptops:',
        description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
        date: 'Posted on June 12, 2018 by',
        price: 400,
        quantity:1,
        category:"Computers",
        img: '/static/img/laptop.737283c.jpg',
    },
        {
            id:2,
            product_id:5,
            user_id:1,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 200,
            quantity:1,
            category:"Computers",
            img: '/static/img/laptop.737283c.jpg',
        },
        {
            id:3,
            product_id:1,
            user_id:1,
            name: 'Laptops:',
            description: ' HP EliteBook Folio 1020 G1 - 12.5" - Core m5 6th gen - 8 GB RAM - 256 GB SSD -silver-free dos-free laptop bag',
            date: 'Posted on June 12, 2018 by',
            price: 600,
            quantity:1,
            category:"Computers",
            img: '/static/img/laptop.737283c.jpg',
        },

    ],

}

const getters = {
    cartItems:state => state.cartItems,
    cartItemsNo :state => state.cartItems.length,
}

const mutations = {
    ADD_CART_PRODUCT(state, data){
        const record = state.cartItems.find(product => product.product_id === data.product_id)
        if(!record){
            state.cartItems.unshift(data)
        }else{
            if(record.quantity<10){
                record.quantity++
            }

        }

    },

    SHOPING_ADD_NEW_PRODUCT_TO_CART(state, data){
        state.cartItems.unshift(data)
    },

    SHOPING_REMOVE_PRODUCT_FROM_CART(state, data){
        const product = state.cartItems.find(product => product.product_id === data.id)
        let itemIndex = state.cartItems.indexOf(product);
        state.cartItems.splice( itemIndex, 1 );
    },

    DELETE_CART_PRODUCT(state, data){
        const product = state.cartItems.find(product => product.product_id === data.product_id)
        let itemIndex = state.cartItems.indexOf(product);
        state.cartItems.splice( itemIndex, 1 );
    },

    EMPTY_CART(state) {
        while (state.cartItems.length) { state.cartItems.pop(); }
    },

    DECREASE_CART_PRODUCT(state, data){
        const record = state.cartItems.find(product => product.id === data.product_id)
        if(!record){

        }else{
            if(record.quantity>1){
                record.quantity--
            }else{
                const product = state.cartItems.find(product => product.product_id === data.product_id)
                let itemIndex = state.cartItems.indexOf(product);
                state.cartItems.splice( itemIndex, 1 );
            }

        }

    },
};

const actions = {};

export default {
    state, getters, mutations, actions
}