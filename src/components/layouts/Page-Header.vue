<template>
    <div>
        <el-dropdown>
            <i class="el-icon-bell" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>Settings</el-dropdown-item>
                <el-dropdown-item>logout</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>Johnso Didinya</span>
    </div>

</template>
<script>

    export default {
        name: 'headernav',
        data() {
            return {}
        }
    }
</script>
<style>

</style>