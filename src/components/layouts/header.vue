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
            <el-menu-item index="1" class="is-active">VueJS Electronic Store</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Products</template>
                <el-menu-item index="2-1"><router-link :to="{name:'productsadd_route'}">Add Products</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{name:'productscategoriesadd_route'}">Add Product Category</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link :to="{name:'productslist_route'}">Add Category</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="3" class="search">
               search
            </el-menu-item>
            <router-link :to="{name:'userlogin_route'}">
                <el-menu-item index="3" class="search">
                    Johnson Didinka
                </el-menu-item>
            </router-link>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'headernav',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input4: '',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .search {
        float: right;
    }
    a{
        color: #FFFFFF;
        text-decoration: none;
        display: block;
    }


</style>

