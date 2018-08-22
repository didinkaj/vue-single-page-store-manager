<script>
    import {mapGetters, mapActions} from 'vuex'
    import firebaseUser from 'firebase'

    export default {
        name: 'headernav',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input4: '',
                search: '',
                loggedUser:'',
                email:''
            };
        },
        computed: {
            ...mapGetters({
                users: 'users',
                loggedinUser: 'loggedinUser'
            }),
            user() {
                this.$root.$on('removeposition', filter => {

                })
            },
            isAdmin(){
                if(this.loggedinUser && this.loggedinUser.email == "didinkaj@gmail.com"){
                    return true
                }else{
                    return false
                }
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(this.loggedinUser);
            },
            searchProduct() {
                console.log(this.search)
            },
            isLoggedIn() {
                if (this.loggedinUser) {
                    return true;

                }
            },
            activeUser() {
                let user = firebaseUser.auth().currentUser;
                this.loggedUser = user
                if(user){
                    this.email = user.email
                }
                this.$store.commit('SETLOGGEDIN_USER', user)
            }

        },
        watch:{
            '$route'(to, from) {
                this.activeUser();
            },

        },
        created() {
            this.activeUser();
        },
        mounted() {
            this.activeUser();
        }


    }
</script>
<template>
    <div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#123456"
                text-color="#fff"
                active-text-color="yellow">
            <el-menu-item index="1" class="is-active">
                <router-link :to="{name:'productslist_route'}">VueJS Electronic Store</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">Products</template>
                <el-menu-item index="2-1" v-show="isAdmin">
                    <router-link :to="{name:'productsadd_route'}">Add Products</router-link>
                </el-menu-item>
                <el-menu-item index="2-2"  v-show="isAdmin">
                    <router-link :to="{name:'productscategoriesadd_route'}">Add Product Category</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                    <router-link :to="{name:'productscategoriesdetails_route'}">View Categories</router-link>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="3" class="search">
                <el-input suffix-icon="el-icon-search" placeholder="Search ..." v-model="search" class="find"
                          v-on:keyup.enter="seamrchProduct">
                </el-input>
            </el-menu-item>
            <router-link :to="{name:'userlogin_route'}" v-show="!isLoggedIn()">
                <el-menu-item index="3" class="search">
                    <span> Account</span>
                </el-menu-item>
            </router-link>
            <router-link :to="{name:'useraccount_route'}" v-show="isLoggedIn()" class="name">
                <el-menu-item index="3" class="search ">
                    {{email }}
                </el-menu-item>
            </router-link>

        </el-menu>
    </div>
</template>


<style>
    .search {
        float: right;
    }

    .name a {
        color: #ffff00;
    }

    a {
        color: #FFFFFF;
        text-decoration: none;
        display: block;
    }

    .search input {
        background-color: #123456;
        border-color: #123456;
        color: #ffff00;
        font-size: 16px;
        width: 300px;
    }


</style>

