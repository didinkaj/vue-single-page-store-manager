<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        components: {ElRow},
        data(){
            return{
                copy:'copyright 2018'
            }
        }
    }

</script>

<template>
        <el-row class="footer">
            <h5>By johnson didinya  &copy; {{copy}}</h5>
        </el-row>


</template>

<style>


</style>