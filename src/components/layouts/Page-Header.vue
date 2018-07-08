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
            <el-menu-item index="1" class="is-active">VueJS Application Store</el-menu-item>
            <el-submenu index="2">
                <template slot="title">Products</template>
                <el-menu-item index="2-1">Computers</el-menu-item>
                <el-menu-item index="2-2">Laptops</el-menu-item>
                <el-menu-item index="2-3">Phones</el-menu-item>

            </el-submenu>
            <el-menu-item index="3" >Search</el-menu-item>
        </el-menu>

    </div>

</template>
<script>

    export default {
        name: 'headernav',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        }
    }
</script>
<style>


</style>

