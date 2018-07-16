import firebase from 'firebase'
const state = {
    loggedinUser:[],

    users: [{
        id:1,
        fname: 'Johnson',
        sname:' Didinya',
        email: 'jdidinya@gmail.com',
        password: '',
        previllege: '1'
    },
        {
            id:2,
            fname: 'Johnson:',
            sname:' Didinya',
            email: 'jdidinya@gmail.com',
            password: '',
            previllege: '1'
        },
        {
            id:3,
            fname: 'Johnson',
            sname:' Didinya',
            email: 'jdidinya@gmail.com',
            password: '',
            previllege: '1'
        },
        {
            id:4,
            fname: 'Johnson',
            sname:' Didinya',
            email: 'jdidinya@gmail.com',
            password: '',
            previllege: '1'
        },
        {
            id:5,
            fname: 'Johnson',
            sname:' Didinya',
            email: 'jdidinya@gmail.com',
            password: '',
            previllege: '1'
        },
        {
            id:6,
            fname: 'Johnson',
            sname:' Didinya',
            email: 'jdidinya@gmail.com',
            password: '',
            previllege: '1'
        }
    ],

}

const getters = {
    users: state => state.users,
    loggedinUser: state => state.loggedinUser
}

const mutations = {
    SETLOGGEDIN_USER(state,userInfo){
        state.loggedinUser=userInfo;



    }
};



const actions = {

    getUser(store){
        var user = firebase.auth().currentUser;
        if (user != null) {
            email = user.email;
            uid = user.uid;
            store.commit('SETLOGGEDIN_USER',email);
        }
    }

};

export default {
    state, getters, mutations, actions
}