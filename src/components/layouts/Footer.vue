<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        props: [
            'footerTitle'
        ],
        components: {ElRow},
        data() {
            return {
                copy: 'copyright 2018'
            }
        }
    }

</script>

<template>
    <el-row class="footer">
        <h5>{{ footerTitle }}   &copy; {{copy}}</h5>
    </el-row>


</template>

<style>
    .el-footer {
        background-color: #123456;
        color: yellow;
        text-align: center;
        padding: 0px;
        margin: -1px;
        height: 50px;
        z-index: 1000;
    }

</style>