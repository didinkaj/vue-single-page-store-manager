<script>
    import {mapGetters} from 'vuex'
    export default {
        name: 'sidebar-right',
        data() {
            return {
                isCollapse: true,
                itemsInCart:''
            };
        },
        computed:{
            ...mapGetters({
                cartItemsNo:'cartItemsNo'
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            cartDetails(){
                this.itemsInCart = this.cartItemsNo;
            }
        },
        created(){
            this.cartDetails();
        },
        watch:{
            cartItemsNo: function () {
                this.itemsInCart = this.cartItemsNo;
            }
        }
    }
</script>
<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-row class="tac">
            <el-col :span="24">
                <h5 class="logo">Account</h5>
                <el-menu
                        default-active="0"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <router-link :to="{name:'productslist_route'}">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span>Home</span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'userproducts_route'}">
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span>My Products</span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'usercart_route'}">
                    <el-menu-item index="3">
                        <i class="el-icon-sold-out"></i>
                        <span>Cart <span class="item-in-cart">({{itemsInCart}})</span></span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'userlogin_route'}">
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>Log In</span>
                    </el-menu-item>
                    </router-link>
                </el-menu>
            </el-col>

        </el-row>
    </el-aside>
</template>



<style>
    .logo {
        padding-left: 25px;
        color: #931621;
    }
    .el-aside {
        color: #333;
        background-color: #123456;
        line-height: 100%;
        z-index: 900;
    }
    .item-in-cart{
        margin-left: 20px;
        color:brown;
        font-weight: 800;
    }
</style>