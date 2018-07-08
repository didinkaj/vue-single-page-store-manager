<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-row class="tac">
            <el-col :span="24">
                <h5 class="logo">Account</h5>
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">

                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span>Home</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span>My Products</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-sold-out"></i>
                        <span>Cart</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span>Log Out</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

        </el-row>
    </el-aside>
</template>

<script>
    export default {
        name:'sidebar-right',
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
.logo{
    padding-left: 25px;
    color: brown;
}
</style>