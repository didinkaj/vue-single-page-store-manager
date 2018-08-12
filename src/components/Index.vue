<script>
    import SideBarLeft from '@/components/layouts/sidebar/Left'
    import SideBarRight from '@/components/layouts/sidebar/Right'
    import HeaderNav from '@/components/layouts/Header'
    import PageFooter from '@/components/layouts/Footer'
    import ElCol from "element-ui/packages/col/src/col";
    import ElFooter from "../../node_modules/element-ui/packages/footer/src/main.vue";

    export default {
        components: {
            ElFooter,
            ElCol,
            'side-bar-left': SideBarLeft,
            'side-bar-right': SideBarRight,
            'head-nav': HeaderNav,
            'page-footer': PageFooter,
        },
        data() {
            return {
                footerTitle: "By johnson didinya"
            }
        },
        created(){
            this.$Progress.start(40)
        }
    };
</script>
<template>
    <el-container class="main-container">
        <el-header class="main-header">
            <head-nav></head-nav>
        </el-header>
        <el-main>
            <el-col :span="4" :offset="1">
                <side-bar-left></side-bar-left>
            </el-col>

            <el-col :span="15" class="main-content" :offset="5">
                <vue-progress-bar></vue-progress-bar>
                <!--<el-collapse-transition>-->
                    <router-view></router-view>
                <!--</el-collapse-transition>-->
            </el-col>
            <el-col :span="4" class="cart" :offset="19">
                <side-bar-right></side-bar-right>
            </el-col>
        </el-main>
        <el-footer>
            <page-footer :footerTitle="footerTitle"></page-footer>
        </el-footer>
    </el-container>
</template>

<style>
    body {
        background: #e8ebf3;
        padding: 0px;
        margin: 0px;
        font-family: Helvetica;
    }

    .main-header {
        background-color: #123456;
        color: #ffffff;
        height: 70px;
        position: fixed;
        z-index: 1000;
        width: 100%;
        margin: -1px;
    }

    .el-main {
        margin-top: 60px;
    }

    .main-container {
        height: 100vh;
        border: 1px solid #eee
    }

    .main-content {
        position: relative;
    }

    .cart {
        position: fixed;
    }


</style>



