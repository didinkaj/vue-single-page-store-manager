<script>
    import SideBarLeft from '@/components/layouts/Page-SideBar-Left'
    import SideBarRight from '@/components/layouts/Page-SideBar-Right'
    import HeaderNav from '@/components/layouts/Page-Header'
    import PageFooter from '@/components/layouts/Page-Footer'
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
            return {}
        }
    };
</script>
<template>
    <el-container class="maincontainer">
        <el-header class="mainheader">
            <head-nav></head-nav>
        </el-header>
        <el-main>
            <el-col :span="4" :offset="1">
                <side-bar-left></side-bar-left>
            </el-col>
            <el-col :span="15" class="main-content" :offset="5">
                <slot name="content"></slot>
            </el-col>
            <el-col :span="4" class="cart">
                <side-bar-right></side-bar-right>
            </el-col>
        </el-main>
        <el-footer>
            <page-footer></page-footer>
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

    .mainheader {
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

    .el-aside {
        color: #333;
        background-color: #123456;
        line-height: 100%;
        position: fixed;
    }

    .maincontainer {
        height: 100vh;
        border: 1px solid #eee
    }

    .main-content {
        position: relative;
    }

    .el-footer {
        background-color: #123456;
        color: yellow;
        text-align: center;
        padding: 0px;
        margin: -1px;
        height: 50px;
    }


</style>



