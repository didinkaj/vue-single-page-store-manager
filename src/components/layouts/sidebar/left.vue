<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-row class="tac">
            <el-col :span="24">
                <h5 class="logo">Products Categories</h5>
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <router-link :to="{name:'productslist_route'}">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span>Computers </span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'useraccount_route'}">
                    <el-menu-item index="2">
                        <i class="el-icon-printer"></i>
                        <span> Printers</span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'productslist_route'}">
                    <el-menu-item index="3">
                        <i class="el-icon-goods"></i>
                        <span>Laptops</span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'productslist_route'}">
                    <el-menu-item index="4">
                        <i class="el-icon-mobile-phone"></i>
                        <span>Phones</span>
                    </el-menu-item>
                    </router-link>
                    <router-link :to="{name:'productsadd_route'}">
                    <el-menu-item index="5">
                        <i class="el-icon-service"></i>
                        <span>Accessories</span>
                    </el-menu-item>
                    </router-link>

                </el-menu>
            </el-col>

        </el-row>
    </el-aside>
</template>

<script>
    export default {
        name: 'sidebar-left',
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    .logo {
        padding-left: 25px;
        color: #931621;
    }

    .el-aside {
        color: #333;
        background-color: #123456;
        line-height: 100%;
        position: fixed;
        z-index: 900;
    }
</style>