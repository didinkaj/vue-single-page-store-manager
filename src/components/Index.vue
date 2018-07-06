<script>
    import SideBar from '@/components/layouts/Page-SideBar'
    import HeaderNav from '@/components/layouts/Page-Header'

    export default {
        components: {
            'side-bar': SideBar,
            'head-nav': HeaderNav,
        },
        data() {
            return {}
        }
    };
</script>
<template>
    <el-container class="maincontainer">

        <side-bar></side-bar>

        <el-container>

            <el-header class="mainheader">
                <head-nav></head-nav>
            </el-header>

            <el-main>
                    <slot name="content"></slot>
            </el-main>

        </el-container>

    </el-container>
</template>

<style>
    body {
        background: #ffffff;
        padding: 0px;
        margin: 0px;
        font-family: Helvetica;
    }

    .el-header {
        background-color: #ffffff;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
        line-height: 100%;
    }

    .maincontainer {
        height: 740px;

        border: 1px solid #eee
    }

    .mainheader {
        text-align: right;
        font-size: 12px
    }
</style>



